import AddStaff from 'components/AddStaff'
import NotFound from 'components/NotFound'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import Staff from 'pages/Staff'
import { Route, Routes, useRoutes } from 'react-router-dom'

function App() {
    const elements = useRoutes([
        { path: '/', element: <Dashboard /> },
        { path: '/about', element: <About /> },
        { path: '/staff/*', element: <Staff /> },
        { path: '*', element: <NotFound /> }
    ])
    return (
        <div className='App'>
            <MainLayout>
                {elements}
                {/* <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/about' element={<About />} />

                    <Route path='/staff' element={<Staff />}>
                        <Route path=':id' element={<StaffItem />} />
                        <Route index element={<StaffList />} />
                        <Route path='add' element={<AddStaff />} />
                    </Route> */}

                {/* <Route path='/staff/*' element={<Staff />} /> */}
                {/* </Routes> */}
            </MainLayout>
        </div>
    )
}

export default App
