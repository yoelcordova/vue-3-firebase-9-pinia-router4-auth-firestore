import { defineStore } from "pinia";
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut,
} from 'firebase/auth';

import { auth } from "../firebaseconfig";
import router from "../router";

 export const useUserStore = defineStore("userStore", {
            state: () => ({
                userData: true,
                loadingUser: false,
        
            }),
            actions: {
                async registerUser(email, password) {
                    this.loadingUser = true;
                    try {

                        const { user } = await createUserWithEmailAndPassword(
                            auth, 
                            email, 
                            password
                            );
                        this.userData = { email: user.email, uid: user.uid };
                            router.push('/')
                    } catch (error) {
                        console.log(error);

                    } finally {
                        this.loadingUser = false;

                    }
    
                },
                async loginUser(email, password) {
                    this.loadingUser = false;

                    try {
                        const {user} = await signInWithEmailAndPassword(
                            auth, 
                            email, 
                            password
                            );
                        this.userData = { email: user.email, uid: user.uid };
                        router.push('/')

                    } catch (error) {
                        console.log(error);
                    } finally {
                        this.loadingUser = false;

                    }
    
                },
                async logoutUser() {

                    try {
                        await signOut(auth)
                        this.userData = null;
                        router.push('/login')

                    } catch (error) {
                        console.log(error);
                    }
                },

                currentUser(){
                    return new Promise((resolve, reject) => {

                    const unsuscribe = onAuthStateChanged(
                    auth,
                        (user) => {
                        if (user) {
                            this.userData = { 
                                email: user.email, 
                                uid: user.uid,
                            };

                          } else {
                            this.userData = null;
                            

                          }
                          resolve(user);
                        }, 

                        (e) => reject(e)

                        );

                        unsuscribe();
                    });
                },

            },
            
    });