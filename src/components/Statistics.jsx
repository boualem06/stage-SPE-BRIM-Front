import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
const Statistics = () => {
  return (
    <div className='bg-white px-10 lg:px-40 w-full rounded-3xl shadow-md py-8 flex justify-between'>
      <div className='flex items-center'>
        <img src={img2} className='md:h-14 md:w-14 lg:h-16 lg:w-16'></img>
        <div className='ml-2'>
            <h1 className='text-gray-400 md:text-sm lg:text-lg'>nombre d'utilisateur</h1>
            <h1 className=' font-bold md:text-lg lg:text-2xl' >5,423</h1>
        </div>
      </div>

      <div className='flex items-center'>
        <img src={img1} className='md:h-14 md:w-14 lg:h-16 lg:w-16'></img>
        <div className='ml-2'>
            <h1 className='text-gray-400'>nombre de reponse</h1>
            <h1 className='font-bold md:text-lg lg:text-2xl'>1,893</h1>
        </div>
      </div>

      <div className='flex items-center'>
        <img src={img3} className='md:h-14 md:w-14 lg:h-16 lg:w-16'></img>
        <div className='ml-2'>
            <h1 className='text-gray-400'>nombre de formulaire</h1>
            <h1 className='font-bold md:text-lg lg:text-2xl'>189</h1>
        </div>
      </div>
    </div>
  )
}

export default Statistics
