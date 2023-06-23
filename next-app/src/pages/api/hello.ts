// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from 'firebase-admin';
import { firebaseServiceAccount } from '../../../utils/firebase-adminsdk';
import checkEmailExists from 'utils/checkEmailExists';

type Data = {
    name?: string;
    message?: string;
    error?: any;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (!admin.apps.length) {

        admin.initializeApp({
            credential: admin.credential.cert(firebaseServiceAccount)
        });
    }

    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }


    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        const userId = decodedToken.uid;
        const userEmail = decodedToken.email;

        console.log('====================================');
        console.log(userId);
        console.log(userEmail);
        
        if (userEmail) checkEmailExists(userEmail)
            .then((exists) => {
                console.log(`Email exists: ${exists}`);
            })
            .catch((error) => {
                console.error('Error checking email:', error);
            });
        console.log('====================================');

        res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error('Token verification failed:', error);
        res.status(401).json({ error: 'Invalid token' });
    }
};