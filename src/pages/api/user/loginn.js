import { loginn } from '../../../../service/user';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const userToken = loginn(JSON.parse(req.body));
      res.status(200).json(userToken);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}