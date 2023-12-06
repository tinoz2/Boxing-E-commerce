import Products from './components/Products'
import { Link } from 'react-router-dom'

const Container = () => {
    return (
        <>
            <div className='flex justify-center m-2'>
                <Link to='register' className='my-4 text-xl m-2'>Register</Link>
                <Link to='login' className='my-4 text-xl m-2'>Login</Link>
            </div>
            <Link className='flex justify-center font-semibold text-3xl m-auto bg-slate-600 w-24 p-2 rounded-md' to='cart'>Cart</Link>
            <Products />
        </>
    )
}

export default Container