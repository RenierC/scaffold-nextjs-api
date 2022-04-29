import { NextApiRequest, NextApiResponse } from 'next'
import { requestRandomWords } from '../../service/contractMethods'

// localhost:3000/api/requestRandomWords
export default async function (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    await requestRandomWords()
    res.json({ message: 'succesfully requested random words' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
