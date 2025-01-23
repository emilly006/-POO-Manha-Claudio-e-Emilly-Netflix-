import { Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Home from './pages/Home'

function MainRoutes() {
    return (
        <Routes>

            <Route path='/' element={<Profile />} />
            <Route path='/home' element={<Home />} />

        </Routes>

    );

}

export default MainRoutes;