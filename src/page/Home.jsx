import Navbar  from '../components/Navbar'
import Footer from '../components/Footer'
import Box from '../components/ฺBox'

const performances = [
    {
        title: "Shopee Web",
        pathImage :  "./image/shopeeweb.jpg",
        describe: "My first Web",
        nextpage: "https://tailwindcss.com/docs/border-collapse"
    },
    {
        title: "Windows Presentation Foundation (WPF)",
        pathImage :  "./image/wpf1.jpg",
        describe: "Final Project",
        nextpage: ""
    },
    {
        title: "3 in 1 Ted Fund Youth Stratup",
        pathImage :  "./image/xbot1.jpg",
        describe: "XBOT Team",
        nextpage: ""
    }
];

function Home() {
    const performanceElements = performances.map((performance , index) => {
    return <Box key={index} performance={performance} />;
    })

  return (
    <div className='h-full w-full'>
        <Navbar/>

        {/* Name */}
        <div className='flex justify-center h-96 w-full'>
            <div className='flex-col justify-center my-auto text-center'>
                <h1 className='font-describeFont text-4xl text-red-700 font-bold'>Mrs.Thanyaporn Musikpodok</h1>
                <h2 className='pt-6 text-red-400 text-3xl font-describeFont'>" Front - End Developer "</h2>
            </div>
        </div>

        {/* Describe */}
        <div className='flex justify-center mb-40'>
            <div className="p-9 h-3/4 w-5/6 rounded-sm shadow-2xl bg-stone-200">
            <div className='lg:grid grid-cols-2 px-auto h-full '>
                <div className='flex justify-center'>
                    <img className='p-4 h-96' src=".\image\myself.jpg" alt="" />
                </div>
                <div className='m-auto p-7 '>
                <h1 className='mb-7 text-center font-describeFont text-3xl font-bold text-stone-500 lg:text-start 
                transition ease-in-out hover:duration-300 hover:-translate-y-1'
                >" Pin "</h1>
                <p className='indent-8 text-balance font-describeFont lg:p-0'>Hello ! I am a Computer Engineer from Naresuan University. 
                    I am looking for an internship to gain experience and learn about the working atmosphere. As an intern, I am ready to learn new things and face different challenges. I am determined to improve my skills and prepare for a good internship.
                    I hope to have the chance to learn and develop in many ways through your organization. Thank you very much for considering my application.</p>

                </div>
            </div>
            </div>
        </div>

        {/* Box content */}
        <div className='mb-0 grid grid-cols-1 gap-2 px-14 bg-rose-200  lg:px-2 lg:grid-cols-3 '>
            {performanceElements}
        </div>
        
        <Footer/>
    </div>
  )
}

export default Home