import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil';
import { navTextAtom } from '../store/atoms/navText';
import { userAtom } from '../store/atoms/UserData';

const Nav = () => {
    const navigate = useNavigate();
    const user = useRecoilValue(userAtom);
    const [navText, setNavText] = useRecoilState(navTextAtom);
  return (
    <div className=' m-auto  bg-slate-500 rounded-lg py-4 font-mono text-white text-[1.23rem] flex justify-between px-[1rem] mb-1'>

    <div>
        <div>{navText}</div>
    </div>
    <div>
        <ul className=' flex gap-[1.2rem]'>
            <li className='cursor-pointer' onClick={()=>{
                setNavText("Hello World!")
                navigate('/')
            }}>Home</li>
            <li className='cursor-pointer' onClick={()=>{
                setNavText(user?.name?.first || "Hello World !")
                navigate('/about')
            }}>About</li>
            <li className='cursor-pointer' onClick={()=>{
                setNavText("Hello World !")
                navigate('/contact')
            }}>Contact</li>
        </ul>
    </div>
    </div>
  )
}

export default Nav