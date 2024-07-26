import React from 'react'
import Navbar  from '../components/Navbar'
import Footer from '../components/Footer'
import Blog from '../components/Blog'

function Home() {
  return (
    <div>
        <Navbar/>

        {/* Name */}
        <div className='flex justify-center h-96 w-full'>
            <div className='flex-col text-center justify-center my-auto'>
                <h1 className='text-red-700 text-4xl font-describeFont  font-bold'>Mrs.Thanyaporn Musikpodok</h1>
                <h2 className='text-red-400 text-3xl font-describeFont pt-6 '>" Front - End Developer "</h2>
            </div>
        </div>

        {/* Describe */}
        <div className='mb-40 flex justify-center'>
            <div className="p-9 h-3/4 w-5/6 rounded-sm shadow-2xl bg-stone-200">
            <div className='lg:grid grid-cols-2 h-full px-auto'>
                <div className='flex justify-center'>
                    <img className='p-4 h-96' src=".\myself.jpg" alt="" />
                </div>
                <p className='r m-auto p-7 text-auto font-describeFont'>Hello ! I am a Computer Engineer from Naresuan University. I am looking for an internship to gain experience and learn about the working atmosphere. I am very excited to submit my application here.
As an intern, I am ready to learn new things and face different challenges. I am determined to improve my skills and prepare for a good internship.
I hope to have the chance to learn and develop in many ways through your organization. Thank you very much for considering my application.</p>
            </div>
            </div>
        </div>

        {/* Blog content */}
        <div className='grid grid-col-3 gap-20 mb-20'>
            <div className='flex justify-center'>
            <Blog/>
            <Blog/>
            <Blog/>
            </div>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Home