

function Experiencebox(props) {
    const {event} = props;
    


  return (
    <div>
        <div className="m-14 items-center rounded-lg bg-stone-200 overflow-hidden grid grid-cols-2 ">
            <div className="relative m-0">
                <div className="flex overflow-x-auto snap-center snap-mandatory scroll-smooth no-scrollbar" >
                <img id="img-1" className="snap-always snap-start max-w-full max-h-[400px]"src={event.pathImage1} alt="" />
                <img id="img-2" className="snap-always snap-start max-w-full max-h-[400px] "src={event.pathImage2} alt="" />
                <img id="img-3" className="snap-always snap-start max-w-full max-h-[400px] "src={event.pathImage3} alt="" />
                </div>
                <div className="flex absolute w-14 h-10 z-1 bottom-[-12px] left-1/2 opacity-75">
                    <a className="absolute w-2 h-2 left-1/4 rounded-full bg-gray-300 transition-colors  hover:bg-gray-500" href="#img-1"></a>
                    <a className="absolute w-2 h-2 left-2/4 rounded-full bg-gray-300 transition-colors  hover:bg-gray-500" href="#img-2"></a>
                    <a className="absolute w-2 h-2 left-3/4 rounded-full bg-gray-300 transition-colors  hover:bg-gray-500" href="#img-3"></a>
                </div>
            </div>
            <div className="p-10 flex-col text-center justify-center">
                <h1 className="font-describeFont font-bold">{event.title1}</h1>
                <p className="font-describeFont">{event.describe1}</p>
            </div>
        </div>

        <div className="m-14 items-center rounded-lg bg-stone-200 overflow-hidden md:grid md:grid-cols-2">
            <div className="relative m-0">
                <div className="flex overflow-x-auto snap-center snap-mandatory scroll-smooth no-scrollbar" >
                <img id="img-4" className="snap-always snap-start max-w-full max-h-full"src={event.pathImage4} alt="" />
                <img id="img-5" className="snap-always snap-start max-w-full max-h-full "src={event.pathImage5} alt="" />
                </div>
                <div className="flex absolute w-14 h-10 z-1 bottom-[-12px] left-1/2 opacity-75">
                    <a className="absolute w-2 h-2 left-1/3 rounded-full bg-gray-300 transition-colors  hover:bg-gray-500" href="#img-4"></a>
                    <a className="absolute w-2 h-2 left-2/3 rounded-full bg-gray-300 transition-colors  hover:bg-gray-500" href="#img-5"></a>
                </div>
            </div>
            <div className="p-10 flex-col text-center justify-center">
                <h1 className="font-describeFont font-bold">{event.title2}</h1>
                <p className="font-describeFont">{event.describe2}</p>
            </div>
        </div>

        <div className="m-14 items-center rounded-lg bg-stone-200 overflow-hidden md:grid md:grid-cols-2">
            <div className="relative m-0">
                <div className="flex overflow-x-auto snap-center snap-mandatory scroll-smooth no-scrollbar" >
                <img id="img-6" className="snap-always snap-start max-w-full max-h-[400px]"src={event.pathImage6} alt="" />
                </div>
            </div>
            <div className="p-10 flex-col text-center justify-center">
                <h1 className="font-describeFont font-bold">{event.title3}</h1>
                <p className="font-describeFont">{event.describe3}</p>
            </div>
        </div>

        <div className="m-14 items-center rounded-lg bg-stone-200 overflow-hidden md:grid md:grid-cols-2">
            <div className="relative m-0">
                <div className="flex overflow-x-auto snap-center snap-mandatory scroll-smooth no-scrollbar" >
                <img id="img-7" className="snap-always snap-start max-w-full max-h-[400px]"src={event.pathImage7} alt="" />
                </div>
            </div>
            <div className="p-10 flex-col text-center justify-center">
                <h1 className="font-describeFont font-bold">{event.title4}</h1>
                <p className="font-describeFont">{event.describe4}</p>
            </div>
        </div>

        <div className="m-14 items-center rounded-lg bg-stone-200 overflow-hidden grid grid-cols-2 ">
            <div className="relative m-0">
                <div className="flex overflow-x-auto snap-center snap-mandatory scroll-smooth no-scrollbar" >
                <img id="img-8" className="snap-always snap-start max-w-full max-h-[400px]"src={event.pathImage8} alt="" />
                <img id="img-9" className="snap-always snap-start max-w-full max-h-[400px] "src={event.pathImage9} alt="" />
                </div>
                <div className="flex absolute w-14 h-10 z-1 bottom-[-12px] left-1/2 opacity-75">
                    <a className="absolute w-2 h-2 left-1/4 rounded-full bg-gray-300 transition-colors  hover:bg-gray-500" href="#img-8"></a>
                    <a className="absolute w-2 h-2 left-2/4 rounded-full bg-gray-300 transition-colors  hover:bg-gray-500" href="#img-9"></a>
                </div>
            </div>
            <div className="p-10 flex-col text-center justify-center">
                <h1 className="font-describeFont font-bold">{event.title5}</h1>
                <p className="font-describeFont">{event.describe5}</p>
            </div>
        </div>

        



    </div>
  )
}

export default Experiencebox