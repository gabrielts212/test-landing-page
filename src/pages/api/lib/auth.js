import axios from 'axios';

const MICROSOFT_CLIENT_ID = '14f63b39-4241-4173-84e2-9c632e81ab64';
const REDIRECT_URI = 'http://localhost:3000/api/auth/microsoft/callback';

export const loginWithMicrosoft = async () => {
  const response_type = 'code';
  const scope = 'user.read';

  const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${MICROSOFT_CLIENT_ID}&response_type=${response_type}&redirect_uri=${REDIRECT_URI}&scope=${scope}`;

  window.location.href = authUrl;
};

export const handleMicrosoftCallback = async (code) => {
  const response = await axios.post('/api/auth/microsoft', { code });
  return response.data;
};
