const Pagination=()=>{

    return(
        <>

<nav aria-label="Page navigation example">
  <ul className="flex items-center space-x-2 h-6 text-sm">
    <li>
      <a href="#" className="font-bold flex items-center justify-center px-2 rounded h-6 leading-tight text-[#3F4E6B] bg-gray-100 border border-[#3F4E6B] hover:bg-[#3F4E6B] hover:text-white">
        <span className="sr-only">Previous</span>
        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="#" className=" font-bold bg-gray-100 flex items-center justify-center px-2 rounded h-6 leading-tight text-black bg-gray-100 border border-[#3F4E6B] hover:bg-[#3F4E6B] hover:text-white">1</a>
    </li>
    <li>
      <a href="#" className="font-bold flex items-center justify-center px-2 rounded h-6 leading-tight text-[#3F4E6B] bg-gray-100 border border-[#3F4E6B] hover:bg-[#3F4E6B] hover:text-white ">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" className="z-10 font-bold flex items-center justify-center px-2 rounded h-6 leading-tight text-[#3F4E6B] bg-gray-100 border border-[#3F4E6B] hover:bg-[#3F4E6B] hover:text-white">3</a>
    </li>
    <li>
      <a href="#" className="font-bold flex items-center justify-center px-2 rounded h-6 leading-tight text-[#3F4E6B] bg-gray-100 border border-[#3F4E6B] hover:bg-[#3F4E6B] hover:text-white">4</a>
    </li>
    <li>
      <a href="#" className="font-bold flex items-center justify-center px-2 rounded h-6 leading-tight text-[#3F4E6B] bg-gray-100 border border-[#3F4E6B] hover:bg-[#3F4E6B] hover:text-white">5</a>
    </li>
    <li>
      <a href="#" className="font-bold flex items-center justify-center px-2 rounded h-6 leading-tight text-[#3F4E6B] bg-gray-100 border border-[#3F4E6B] hover:bg-[#3F4E6B] hover:text-white">
        <span className="sr-only">Next</span>
        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>
{/* <nav aria-label="Page navigation example">
  <ul className="flex items-center -space-x-px 2 rounded-10 text-base">
    <li>
      <a href="#" className="flex items-center justify-center px-2 rounded h-10 ml-0 leading-tight text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-white">
        <span className="sr-only">Previous</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-2 rounded h-10 leading-tight text-gray-500 bg-gray-100 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-2 rounded h-10 leading-tight text-gray-500 bg-gray-100 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-2 rounded h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-100 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-2 rounded h-10 leading-tight text-gray-500 bg-gray-100 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-2 rounded h-10 leading-tight text-gray-500 bg-gray-100 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-2 rounded h-10 leading-tight text-gray-500 bg-gray-100 border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-100 dark:hover:text-white">
        <span className="sr-only">Next</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
</nav> */}

</>
    )
}

export default Pagination