import { NextApiRequest, NextApiResponse } from 'next'
import { getRequestId } from '../../service/contractMethods'

// localhost:3000/api/getRequestId
export default async function (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  res.json({ message: await getRequestId() })
}
