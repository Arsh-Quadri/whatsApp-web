import './App.css';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './components/context/AccountProvider';

function App() {
  const clientId = '833472954361-18am0j3vhp48a5cr6og4hpbnmcv0kpp6.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <div className='text-center h-full w-full'>
          <Messenger />
        </div>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
