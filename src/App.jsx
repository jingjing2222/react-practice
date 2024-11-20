import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Helloworld from './components/Helloworld'
import Header from './components/Header'
import Library from './components/Bookgenerate/Library'
import Todolist from './components/Todolist'
import Bookgenerate from './components/Bookgenerate/Bookgenerate'
import Tiktaktoe from './components/Tiktaktoe/Tiktaktoe'
function App() {
  return (
    <>
      <Header />
      <Helloworld />
      <Library />
      <Todolist />
      <Bookgenerate />
      <Tiktaktoe />
    </> 
  )
}

export default App