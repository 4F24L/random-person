import React from 'react'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../store/atoms/UserData'
import loading from "../assets/loading.gif"


const ProfilePhoto = () => {
    const user = useRecoilValue(userAtom);

  return (
    <div className=' flex justify-around items-center bg-slate-500 rounded-lg py-4 font-mono text-white'>
    <div className='text-white text-xl'>
        I am <div className=' text-4xl'>{user != 0? user?.name?.first : "_ _ _"}</div>
        </div>
    <img style={{ height: "200px", borderRadius: "15px", width:"200px" }} src={user != 0 ? user?.picture?.large : loading} alt="" />
    </div>
  )

  
}

export default ProfilePhoto