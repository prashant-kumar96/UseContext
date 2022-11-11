import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'
import NoteState from "./context/notes/NoteState"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NoteState>
    <Component {...pageProps} />
    </NoteState>
    )
}
