import axios from 'axios';
import jwt from 'jsonwebtoken';

const MICROSOFT_CLIENT_ID = '14f63b39-4241-4173-84e2-9c632e81ab64';
const MICROSOFT_CLIENT_SECRET = 'your-microsoft-client-secret';
const JWT_SECRET = 'awda45dw4a4d4a64wd6d5a4w';
const REDIRECT_URI = 'http://localhost:3000/api/auth/microsoft/callback';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); 
  }

  const { code } = req.body;

  try {
   
    const tokenResponse = await axios.post(
      `https://login.microsoftonline.com/common/oauth2/v2.0/token`,
      new URLSearchParams({
        client_id: MICROSOFT_CLIENT_ID,
        client_secret: MICROSOFT_CLIENT_SECRET,
        code,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code'
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const { access_token } = tokenResponse.data;

   
    const userResponse = await axios.get(
      'https://graph.microsoft.com/v1.0/me',
      { headers: { Authorization: `Bearer ${access_token}` } }
    );

    const user = userResponse.data;

  
    const token = jwt.sign(
      { id: user.id, email: user.userPrincipalName, name: user.displayName },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to authenticate' });
  }
}
