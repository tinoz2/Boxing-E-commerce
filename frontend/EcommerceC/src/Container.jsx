import Products from './components/Products'
import './index.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'

const Container = () => {
    return (
        <div>
            <Navbar />
            <ToastContainer position="top-right" autoClose={100} theme='dark' />
            <div>
                <Home />
                <Products />
            </div>
        </div>
    )
}

export default Container