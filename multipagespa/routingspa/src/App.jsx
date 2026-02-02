
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return  (
   <BrowserRouter>
    <Routes>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
   </BrowserRouter>
     
  )
}
function Dashboard(){
  return (
    <>
    <h1>Artificial Intelligence</h1>
    <h2>Machine Learning</h2>
    </>
  )
}
function Profile(){
  return(
    <div>
      <marquee loop = "5">
        <h1>Welcome to the profile page</h1>
      </marquee>
      <h1>Bianca Malhotra</h1>
      <h2>Full stack developer</h2>
    </div>
  )
}
export default App