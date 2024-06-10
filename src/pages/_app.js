import '../styles/globals.css';
import { MsalProvider } from '@azure/msal-react';
<<<<<<< HEAD
import { msalInstance } from './api/msalConfig';
=======
import { msalInstance } from '../pages/msalConfig';
>>>>>>> e87b3b2056ff6ccff44df216d3b87af27fcea46b

function MyApp({ Component, pageProps }) {
  return (
    <MsalProvider instance={msalInstance}>
      <Component {...pageProps} />
    </MsalProvider>
  );
}

export default MyApp;
