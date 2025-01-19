import React from "react";
import Nav from "../components/Nav";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/atoms/UserData";
import loading from "../assets/loading.gif"

const About = () => {
  const user = useRecoilValue(userAtom);
  const date = user?.dob? new Date(user?.dob?.date).toISOString().split('T')[0] : "XX-XX-XXXX";
  const location = user?.location;

  
  return (
    <div>
      <Nav />
      
      <div className=' flex justify-around items-center bg-slate-500 rounded-lg py-4 font-mono text-white'>
        <img style={{ height: "200px", borderRadius: "15px", width:"200px" }} src={user != 0 ? user?.picture?.large : loading} alt="" />
        {/* <div className='text-white text-xl'>
        <div className=' text-4xl'>{user != 0? user?.name?.first : "_ _ _"}</div>
        </div> */}
      </div>
      
      
      <div className=' bg-slate-500 rounded-lg py-4 font-mono text-white mt-1 p-5 flex justify-between text-[1.1rem]'>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
      <li><strong>Personal Details</strong>
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
          <li><strong>Full Name :</strong> {user?.name?.first || "Loading..."} {user?.name?.last}</li>
          <li><strong>Gender :</strong> {user?.gender || "Checking..."}</li>
          <li><strong>Date of Birth :</strong> {date} (Age: {user?.dob?.age || "Undefined"})</li>
          <li><strong>Nationality :</strong> {location?.city || "127.0.0.1"}, {location?.country || "World"} ({user?.nat || "XX"})</li>
        </ul>
      </li>
      <li><strong>Location</strong>
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
          <li><strong>Address :</strong> {location?.street?.number || "Finding..."} {location?.street?.name}, {location?.city}, {location?.state} {location?.country}</li>
          <li><strong>Postcode :</strong> {location?.postcode || "XX XXX"}</li>
          
          <li><strong>Timezone :</strong> {user?.location?.timezone?.description || "Checking..."} (Offset: -6:00)</li>
        </ul>
      </li>
      <li><strong>Contact Information</strong>
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
          <li><strong>Email :</strong> {user?.email || "Example@email.com"}</li>
          <li><strong>Phone :</strong> {user?.phone || "(XX) 12345"}</li>
        </ul>
      </li>
    </ul>
      </div>
    </div>
  );
};

export default About;
