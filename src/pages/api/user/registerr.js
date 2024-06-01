import { registerr } from '../../../../service/user';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const token = registerr(JSON.parse(req.body));
      res.status(201).json(token);
    } catch (err) {
      res.status(400).json("Usuário cadastrado");
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
