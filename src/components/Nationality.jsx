import React from 'react'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../store/atoms/UserData'
import InfoCard from './InfoCard';

const Nationality = () => {
    const user = useRecoilValue(userAtom);
    const userName = user?.name;
    const location = user?.location;
  return (
    <div >
    {/* <InfoCard>
    Full Name : {userName?.title || "Loading..."} {userName?.first} {userName?.last}
    </InfoCard> */}
    <InfoCard>
     I'm from {user != 0? location?.city : "127.0.0.1"}, {user != 0? location?.country : "World"} ({user != 0? user?.nat : "*_*"})
    </InfoCard>
    </div>
  )
}

export default Nationality