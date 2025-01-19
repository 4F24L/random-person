import React from 'react'
import Nav from '../components/Nav'
import InfoCard from '../components/InfoCard'

const Contact = () => {
  return (
    <div>
    <Nav/>

    <InfoCard>
    <div>
    <h1 className=' font-semibold text-xl mb-4'>Hi, I'm Md Afzal Mir!</h1>
    <p>A tech enthusiast and <strong>problem solver</strong> from Kolkata, diving deep into <strong>frontend development</strong> and constantly learning. Always exploring new technologies and building something amazing. Let’s create something awesome together! 🌟</p>
    </div>
    </InfoCard>

    <InfoCard>
    <ul>
    <li className=' text-xl font-semibold mb-3'>Tools Used : </li>
  <li>⚛️ <strong>React:</strong> A JavaScript library for building user interfaces</li>
  <li>🌪️ <strong>Tailwind CSS:</strong> A utility-first CSS framework for rapid UI development</li>
  <li>🔮 <strong>Random API:</strong> An API for fetching random user data and other resources</li>
</ul>

    </InfoCard>

    <InfoCard>
    <ul className='text-[1.1rem]'>
    <li className='mb-4 text-xl'><strong>Key Points :</strong></li>
  <li><strong>🧑‍💼 Random User Data</strong>: Fetches name, gender, and location.</li>
  <li><strong>📞 Contact Info</strong>: Displays phone, email, and address.</li>
  <li><strong>🖼️ Profile Image</strong>: Shows the user's profile picture.</li>
  <li><strong>⚠️ Missing Data</strong>: Defaults used for unavailable info.</li>
  <li><strong>🔄 Dynamic Experience</strong>: Fresh data on every reload.</li>
</ul>

    </InfoCard>

    <div className=' bg-slate-500 rounded-lg py-4 font-mono text-white mt-1 p-5 flex justify-between flex-col'>
    <h3 className=' text-2xl'>Connect with Me</h3>
<ul className='flex justify-around my-3 text-xl'>
  <li><a href="https://www.linkedin.com/in/iafzalmir" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
  <li><a href="https://github.com/4f24l" target="_blank"><i class="fab fa-github"></i> GitHub</a></li>
  <li><a href="https://twitter.com/iafzalmir" target="_blank"><i class="fab fa-twitter"></i> Twitter</a></li>
</ul>

    </div>
    </div>
  )
}

export default Contact