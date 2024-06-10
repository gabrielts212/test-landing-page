import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "14f63b39-4241-4173-84e2-9c632e81ab64",
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: "http://localhost:3000/api/auth/microsoft/callback",
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);