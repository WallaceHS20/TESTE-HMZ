import { Routes, Route } from 'react-router-dom'
import ListPage from '../pages/List'
import Login from '../pages/Login'

function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/listPage' element={<ListPage/>}/>
        </Routes>
    )
}

export default RoutesApp