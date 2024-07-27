
function Box(props) {
  const { performance } = props;
  return (
    <div className="block">
      <a href="/experience" target="_blank">
      <div className='flex justify-center py-5 m-9 h-4/5 w-auto rounded-lg shadow-lg bg-rose-100
      transition duration-500 ease-in-out hover:-translate-y-2 hover:scale-110 hover:bg-yellow-200'>
        <div className='flex-col justify-center w-5/6 h h-full'>
          <img className='mx-auto h-64 w-full rounded-md md:h-40' src={performance.pathImage} alt="" />
            <div className='flex-col m-6 text-center'>
              <h1 className="font-describeFont text-amber-800 font-bold">{performance.title}</h1>
              <p className='mt-3 font-describeFont text-amber-600'>{performance.describe}</p>
            </div>
        </div>
      </div>
      </a>
    </div>
  )
}

export default Box