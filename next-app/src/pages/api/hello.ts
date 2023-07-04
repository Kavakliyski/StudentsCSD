// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { withApiAuthRequired } from '@auth0/nextjs-auth0'

type Data = {
    name: string
}

export default withApiAuthRequired(
    function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
        console.log(req)
        res.status(200).json({ name: 'this must be protcted api' })
    }
);
