import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Checkout } from './pages/Checkout/Checkout'
import { Success } from './pages/Success'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<Success />} />
      </Route>
    </Routes>
  )
}
