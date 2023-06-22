// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from 'firebase-admin';


type Data = {
  name?: string;
  message?: string;
  error?: any;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  if (!admin.apps.length) {
    const serviceAccount = require('../../../utils/vuzf-studentscsd-firebase-adminsdk.json');

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const token = req.headers.authorization

  if (!token) {

    return res.status(401).json({ error: 'Unauthorized' });
  } else {

    try {
      res.status(200).json({ message: 'Success' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error });
    }
  }
};