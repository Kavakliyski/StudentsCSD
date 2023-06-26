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

    res.status(200).send({ message: 'hell world' });
};