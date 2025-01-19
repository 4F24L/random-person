import React from 'react'
import { useRecoilValue } from 'recoil';
import { userAtom } from '../store/atoms/UserData';
import InfoCard from './InfoCard';

const DoB = () => {
    const user = useRecoilValue(userAtom);
    const dob = user?.dob;
    const date = dob ? new Date(dob.date).toISOString().split('T')[0] : "XX-XX-XXXX";

    const location = user?.location;
  return (
    <div >
    <InfoCard>
        <div>DoB : {dob? date : "XX-XX-XXXX"}</div>
        <div> I am {dob? dob?.age : "XX"} years old.</div>
    </InfoCard>
    </div>
  )
}

export default DoB