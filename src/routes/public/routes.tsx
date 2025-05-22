import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageError from '@/pages/page-error/PageError'
import Login from '@/pages/login/login'

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