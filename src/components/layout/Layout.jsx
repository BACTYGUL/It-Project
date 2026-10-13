import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import AlphabetSpeech from '../footer/Footer'

export default function Layout() {
  return (
    <div>
       <Header/>
        <Outlet/>
      
        < AlphabetSpeech/>
    </div>
  )
}
