import admin from 'firebase-admin';


export default async function checkEmailExists(email: string) {
    try {
        const userRecord = await admin.auth().getUserByEmail(email);
        return true; // Email exists
    } catch (error: any) {
        if (error.code === 'auth/user-not-found') {
            return false; // Email does not exist
        }
        throw error; // Handle other errors
    }
}