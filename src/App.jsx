import './App.css'
import Cards from './Components/Cards/Cards'
import Nav from './Components/Navbar/Nav'


function App() {

  return (
    <>
      <Nav />
      <div className='grid grid-cols-3 grid-flow-row gap-4 mt-10'>
          <div className='col-span-2'>
              <Cards />
          </div>
          <div>

          </div>
      </div>
    </>
  )
}

export default App
