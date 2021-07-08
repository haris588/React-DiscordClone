import React from "react"
import { Landing } from './pages/landing'
import { ContextProvider } from './context'

export default function App() {
  return (
    <ContextProvider>
      <Landing />
    </ContextProvider>
  );
}


