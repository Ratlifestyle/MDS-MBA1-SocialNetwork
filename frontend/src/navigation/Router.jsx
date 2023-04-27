import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResponsiveAppBar from '../components/Layout/AppBar'
import Auth from '../pages/Auth'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Users from '../pages/Users'
import Post from '../pages/Post'

const Router = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='users'>
          <Route index element={<Users />} />
          <Route path=':id' element={<Profile />} />
        </Route>
        <Route path='/post/:id' element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
