
import './App.css';
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignOut from './components/SignOut/SignOut';
import { Header, Wrapper, Section } from './styles/Styles';
import SingIn from './components/SignIn/SingIn';
import ChatRoom from './components/ChatRoom/ChatRoom';
import PopUp from './components/PopUp/PopUp'
import { useState } from 'react';
import { PopUpBtn } from './components/PopUpBtn/PopUpStyle';

function App() {

  const [user] = useAuthState(auth)

  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }
  return (
    <Wrapper>
      {open && <PopUp closeModal={setOpen}/>}
      <Header>
          <SignOut/>
          <PopUpBtn onClick={openModal}>Developer</PopUpBtn>
      </Header>
      <Section>
          {user ? <ChatRoom /> : <SingIn />}
      </Section>
    </Wrapper>
  );
}

export default App;
