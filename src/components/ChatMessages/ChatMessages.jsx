import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import { auth, firestore } from '../../firebase';
import { Form, SendBtn, InputMsg, SendImg } from './ChatMessagesStyle';

function ChatMessages ({scroll}) {

  const [msg, setMsg] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    setMsg('');

    await firestore.collection('messages').add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })

    scroll.current.scrollIntoView({ behavior: 'smooth' })
  }
  
    return (
      <Form onSubmit={sendMessage}>
          <InputMsg value={msg} onChange={(e) => setMsg(e.target.value)} />
  
          <SendBtn type='submit' disabled={!msg}> 
            Send
            <SendImg src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/25/fafafa/external-send-basic-ui-elements-flatart-icons-outline-flatarticons.png"/>
          </SendBtn>
        </Form>
    )
  }

export default ChatMessages;