import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import TaskForm from './pages/TaskForm'
import Navbar from './components/NavBar'
function App(){
  return(
    <BrowserRouter>
      <div className='container mx-auto px-10'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/tasks/new' element={<TaskForm/>}/>
          <Route path='/tasks/:id' element={<TaskForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App