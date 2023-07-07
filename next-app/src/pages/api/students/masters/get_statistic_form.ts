import connectMongoDB from 'utils/connectMongoDB';
import masterStudent from 'models/studentModel/MasterStudentModel';

import type { NextApiRequest, NextApiResponse } from 'next';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function getAcceptedStats(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    connectMongoDB();
    console.log('Getting accepted student statistics...');

    const acceptedStats = await masterStudent.aggregate([
      {
        $match: {
          status_of_ksk: 'Приет',
        },
      },
      {
        $group: {
          _id: {
            schoolYear: '$school_year',
            major: '$desired_major',
            shape: '$desired_shape',
          },
          count: { $sum: 1 },
        },
      },
      {
        $group: {
          _id: '$_id.schoolYear',
          majors: {
            $push: {
              desiredMajor: '$_id.major',
              desiredShape: '$_id.shape',
              count: '$count',
            },
          },
        },
      },
      {
        $sort: {
          _id: -1,
        },
      },
      {
        $project: {
          _id: 0,
          schoolYear: '$_id',
          majors: 1,
        },
      },
    ]);

    const result = acceptedStats.map(({ schoolYear, majors }) => ({
      schoolYear,
      majors,
    }));

    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});
