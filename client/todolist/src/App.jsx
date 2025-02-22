import About from './components/About.jsx'
import Create from './Create.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import SignUP from './SignUp.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/register' element = {<SignUP />}></Route>
      <Route path='/login' element = {<Login />}></Route>
      <Route path='/todolist' element = {<Create />}></Route>
      <Route path='/' element = {<Home />}></Route>
      <Route path='/about' element = {<About />}></Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App