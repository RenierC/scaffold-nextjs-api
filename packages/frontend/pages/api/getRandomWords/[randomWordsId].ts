import { NextApiRequest, NextApiResponse } from 'next'
import { getRandomWords } from '../../../service/contractMethods'

// localhost:3000/api/getRandomWords/:id
export default async function (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { randomWordsId } = req.query
  const id = parseInt(randomWordsId as string)

  const randomWord = await getRandomWords(id).then((result) =>
    result.toString()
  )

  res.json({ message: randomWord })
}
