import { getApp, getApps, initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDgkkFPJI7QUhOHfs19hxopVsknsvQ7bag",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "blue-eye-4dbfc.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "blue-eye-4dbfc",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "blue-eye-4dbfc.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "648833411163",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:648833411163:web:bluai-landing",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export { auth };
export type { User };
export { onAuthStateChanged };

export async function signInWithBluaiGoogle() {
  const result = await signInWithPopup(auth, provider);
  return result.user;
}

export async function signOutBluai() {
  await signOut(auth);
}
