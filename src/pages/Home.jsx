import React from 'react'
import Nav from '../components/Nav'
import ProfilePhoto from '../components/ProfilePhoto'
import Nationality from '../components/Nationality'
import DoB from '../components/DoB'
import ContactComp from '../components/ContactComp'
import Button from '../components/Button'

const Home = () => {
  
  return (
    <div>
    <Nav/>
    <ProfilePhoto/>
    <Nationality/>
    <DoB/>
    <ContactComp/>
    <Button/>
    </div>
  )
}

export default Home