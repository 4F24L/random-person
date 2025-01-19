import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../store/atoms/UserData'

const ProfilePhoto = () => {
    const user = useRecoilValue(userAtom);
    const [image, setImage] = useState("")

    useEffect(() => {
      if (user && user?.picture?.large) {
          setImage(user?.picture?.large);
      } else {
          setImage("./src/assets/loading.gif");
      }
    }, [user]);

  return (
    <div className=' flex justify-around items-center bg-slate-500 rounded-lg py-4 font-mono text-white'>
    <div className='text-white text-xl'>
        I am <div className=' text-4xl'>{user != 0? user?.name?.first : "_ _ _"}</div>
        </div>
    <img style={{ height: "200px", borderRadius: "15px", width:"200px" }} src={image} alt="" />
    </div>
  )

  
}

export default ProfilePhoto