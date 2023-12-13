import Products from './components/Products'
import './index.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

const Container = () => {
    return (
        <div>
            <Navbar />
            <ToastContainer position="top-right" autoClose={100} theme='dark' />
            <div>
                <Home />
                <Products />
            </div>
            <Link to='/terms' target='_blank' className='flex justify-center my-8 ml-0 sm:ml-20 font-bold sm:text-xl text-lg'>Términos y Condiciones de Uso</Link>
        </div>
    )
}

export default Container