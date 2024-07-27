

function Experiencebox(props) {
    const {event} = props;
  return (
    <div>
        <div className="grid bg-stone-200 md:grid-cols-2 items-center justify-items-center ">
            <div>
                <img className="w--full hover:bg-[url({pathImage2})]"src={event.pathImage1} alt="" />
                <div>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </div>
            </div>
            <div className="flex-col items-center align-center text-center">
                <h1 className="font-describeFont font-bold">{event.title}</h1>
                <p className="font-describeFont">{event.describe}</p>
            </div>
        </div>
    </div>
  )
}

export default Experiencebox