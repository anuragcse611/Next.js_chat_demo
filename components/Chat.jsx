'use client'

import * as Ably from 'ably';
import { AblyProvider } from 'ably/react';
import ChatBox from './Chatbox';

const client = Ably.Realtime.Promise({ authUrl: '/api' })

export default function Chat() {
  return (
    <AblyProvider client={ client }>
      <ChatBox />
    </AblyProvider>
  )
}