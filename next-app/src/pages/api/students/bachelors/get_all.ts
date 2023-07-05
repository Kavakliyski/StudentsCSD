import connectMongoDB from "utils/connectMongoDB";
import bachelorStudent from "models/studentModel/BachelorStudentModel";

import type { NextApiRequest, NextApiResponse } from "next";

import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function getAllBachelorStudent(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        connectMongoDB();
        console.log("Mongoose: getting docs for Students BACHELOR...");

        const sortedBachelorsDocs = await bachelorStudent
            .find()
            .sort({ dateOfCreation: -1 });

        console.log(
            "\x1b[32m%s\x1b[0m",
            `Mongoose: Students BACHELOR --> Mongoose found items ${sortedBachelorsDocs.length}`
        );
        res.status(200).json(sortedBachelorsDocs);
    } catch (error) {
        res.status(500).send(error);
    }
});
