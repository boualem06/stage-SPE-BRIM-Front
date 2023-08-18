import Pagination from '../components/Pagination'
import Search from '../components/Search'
import Statistics from '../components/Statistics'
import Table from '../components/Table'

const Home = () => {
  return (
    <div
      style={{ height: '100vh' }}
      className='bg-[#E8ECF4] px-20 lg:px-[180px] py-20 '
    >
      <div className=''>
        <Statistics></Statistics>
      </div>

      <div className='mt-16 bg-white  px-10 lg:px-20 py-8  rounded-2xl'>
        <div className='w-full flex justify-between mb-4'>
          <h1 className='text-2xl font-bold'>Liste des formulaires</h1>
          <Search></Search>
        </div>

        <Table></Table>

        <div className='mt-10 w-full flex  justify-end'>
            <Pagination></Pagination>
            
        </div>
      </div>
    </div>
  )
}

export default Home
