import connectMongoDB from 'utils/connectMongoDB';
import masterStudent from 'models/studentModel/MasterStudentModel';

import type { NextApiRequest, NextApiResponse } from 'next'

import { withApiAuthRequired } from '@auth0/nextjs-auth0'


export default withApiAuthRequired(
    async function getStats(req: NextApiRequest, res: NextApiResponse) {


        try {

            connectMongoDB();
            console.log('Getting statistic for Student Master...');

            // get different school years
            const schoolYears = await masterStudent.distinct('school_year');
            console.log('Distinct School Years:', schoolYears);

            // get different majors(desired_major) for each school year 
            const result = await Promise.all(
                schoolYears.map(async (year) => {
                    const yearMajors = await masterStudent.aggregate([
                        { $match: { school_year: year } },
                        {
                            $group: {
                                _id: '$desired_major',
                                askCount: { $sum: 1 },
                                paidCount: {
                                    $sum: { $cond: [{ $eq: ['$paid_ksk', 'Да'] }, 1, 0] }
                                },
                                acceptedCount: {
                                    $sum: { $cond: [{ $eq: ['$status_of_ksk', 'Приет'] }, 1, 0] }
                                }
                            }
                        },

                    ]);

                    return {
                        schoolYear: year,
                        majors: yearMajors.map(({ _id, askCount, paidCount, acceptedCount }) => ({ major: _id, askCount, paidCount, acceptedCount })),
                    };
                }),
            );


            res.status(200).json(result);
        } catch (error) {

            res.status(500).send(error);
        }
    }
);