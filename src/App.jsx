import React, {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import  {logout} from './store/authSlice'
const App = () => {
  const [loading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
      if(userData) dispatch(logout())
      })
    .finally(()=> setIsLoading(false))
  }, [dispatch])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <div className='w-full block'>
        <Footer />
      </div>
    </div>
   
  ): null
}

export default App