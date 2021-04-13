import './styles/App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from './firebase';

import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header>
          ĆUPRIJA
          <SignOut />
      </header>
      <section>
        {user ? <ChatRoom />: <SignIn />}
      </section>
    </div>
  );
}

export default App;
