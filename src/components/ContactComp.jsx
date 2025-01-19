import React from 'react'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../store/atoms/UserData'
import InfoCard from './InfoCard';

const ContactComp = () => {
    const user = useRecoilValue(userAtom);

  return (
    <div>
    <InfoCard>
    
    <div>
        Contact : {user !=0? user?.phone : "(XX) XXX XXXX"}
    </div>
    </InfoCard>
    <InfoCard>
    <div>
        {user!=0? user?.email : "email.Example.com"}
    </div>
        
    </InfoCard>

    </div>
  )
}

export default ContactComp