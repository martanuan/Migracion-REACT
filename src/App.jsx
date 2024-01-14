import { useState } from 'react'
import './App.css'
import Header from './components/header/MenuOps'
import ButtonList from './components/appButtons/ButtonList'
import MainTextSection from './components/mainTextSection/MainTextSection'
import PhonePicture from './components/phonePicture/PhonePicture'

function App() {

  return (
    <>
       <Header></Header>
       <MainTextSection></MainTextSection>
       <ButtonList></ButtonList>
       <PhonePicture></PhonePicture>
    </>
  )
}

export default App
