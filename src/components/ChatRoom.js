import React, { useState } from 'react'

import firebase from 'firebase/app';
import { firestore, auth } from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useRef } from 'react';

import ChatMessage from './ChatMessage';

function ChatRoom() {
  const dummy = useRef();

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(50);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const [inputText, setInputText] = useState('');

  const sendMessage = async(e) => {
    e.preventDefault();

    const {uid, photoURL} = auth.currentUser;

    await messagesRef.add({
      text: inputText,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setInputText('');

    dummy.current.scrollIntoView({behaviour: 'smooth'});
  }

  return (
    <>
      <div className="messages">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </div>

      <form onSubmit={sendMessage}>
        <input value={inputText} onChange={(e) => setInputText(e.target.value)} required placeholder="Your message..."/>
        <button type="submit"><i class="fas fa-paper-plane"></i></button>
      </form>
    </>
  )
}

export default ChatRoom
