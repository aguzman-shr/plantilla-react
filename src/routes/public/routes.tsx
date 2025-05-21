import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageError from '@/pages/PageError/PageError'
import Login from '@/pages/Login/Login'

export default function PublicRoutes() {

  return (<BrowserRouter>
    <Routes>
      <>
        <Route path="/" element={< Login />} />
        <Route path="*" element={< PageError />} />
      </>
    </Routes>
  </BrowserRouter>)
}