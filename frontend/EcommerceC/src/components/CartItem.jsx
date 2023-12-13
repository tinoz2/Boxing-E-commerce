import { toast } from 'react-toastify';
import deleteIcon from '../img/delete.svg'
import baseURL from '../config';

const CartItem = ({ product, onRemove }) => {

    const notify = () => {
        toast.error(`
        ${product.title} removed from cart`)
    }

    return (
        <div className='container-cart container-cart-hover'>
            <div>
                <img className='img-cart' src={`${baseURL}/${product.imagePath}`} alt='image helmet boxing' />
            </div>
            <div className='container-infos-cart'>
                <div className='container-info-cart'>
                    <p className='p-cart'>Name:</p>
                    <p className='p-cart'>Amount:</p>
                    <p className='p-cart'>Price:</p>
                </div>
                <div className='container-info-cart'>
                    <small className='small-cart'>{product.title}</small>
                    <small className='small-cart'>{product.qty}</small>
                    <small className='small-cart'>{product.price} $</small>
                </div>
            </div>
            <div>
                <button onClick={() => {
                    onRemove(),
                        notify()
                }}>
                    <img className='w-12' src={deleteIcon} alt="" />
                </button>
            </div>
        </div>
    )
}

export default CartItem