import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/productSlice';
import '../css/card.css'
import '../css/button.css'
import baseURL from '../config';

const ProductItem = ({ product }) => {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            <div className="card">
                <div className="card__wrapper">
                    <div className="card__back"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 24" height="24" width="14"><path strokeLinejoin="round" strokeLinecap="round" strokeWidth="3" stroke="#fff" d="M12 2L2 12L12 22"></path></svg></div>
                    <div className="card__menu"><svg xmlns="http://www.w3.org/2000/svg" width="29" viewBox="0 0 29 14" height="14" fill="none"><path fill="#fff" d="m16.5714 9.16667h10.3572c.5493 0 1.0762.22827 1.4647.6346s.6067.95743.6067 1.53203c0 .5747-.2182 1.1258-.6067 1.5321s-.9154.6346-1.4647.6346h-10.3572c-.5493 0-1.0762-.2283-1.4647-.6346s-.6067-.9574-.6067-1.5321c0-.5746.2182-1.1257.6067-1.53203s.9154-.6346 1.4647-.6346zm-14.49997-8.66667h24.85717c.5493 0 1.0762.228273 1.4647.6346.3885.40633.6067.95743.6067 1.53207 0 .57463-.2182 1.12573-.6067 1.53206s-.9154.6346-1.4647.6346h-24.85717c-.54938 0-1.076254-.22827-1.464722-.6346s-.606708-.95743-.606708-1.53206c0-.57464.21824-1.12574.606708-1.53207.388468-.406327.915342-.6346 1.464722-.6346z"></path></svg></div>
                </div>
                <div className="card__img">
                    <img style={{ width: '150px', height: 'auto', marginLeft: "0.5rem" }} src={`${baseURL}/${product.imagePath}`} />
                </div>
                <div className="card__title uppercase">{product.title}</div>
                <div className="card__subtitle">{product.description}</div>
                <div className="card__wrapper">
                    <div className="card__price">{product.price}$</div>
                    <div className="card__counter">
                        <div className="card__counter-score">{product.qty}</div>
                    </div>
                </div>
                <div className='button-cart'>
                    <div className='button-borders button2'>
                        <button className='primary-button' onClick={handleAddToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;