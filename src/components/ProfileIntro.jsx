import React from 'react'
import { useRecoilValue } from 'recoil';
import { userAtom } from '../store/atoms/UserData';

const ProfileIntro = () => {
    const user = useRecoilValue(userAtom);
    
        console.log(user);
      return (
        <div className='text-white text-3xl mx-1'>
        I am {user != 0? user?.name?.first : "_ _ _"}
        </div>
        
      )
}

export default ProfileIntro
