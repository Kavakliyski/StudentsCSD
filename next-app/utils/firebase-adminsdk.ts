import { ServiceAccount } from "firebase-admin"


export const firebaseServiceAccount: ServiceAccount = {
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
    privateKey: JSON.parse(`"${process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY}"`),
};
