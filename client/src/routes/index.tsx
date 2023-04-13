import { Routes, Route } from 'react-router-dom'
// import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { DefaultLayout } from '../layout/DefaultLayout'
import { Tasks } from '../pages/Tasks'
import { About } from '../pages/About'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}
