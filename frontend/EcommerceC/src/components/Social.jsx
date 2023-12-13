import '../css/social.css'
import { Link } from 'react-router-dom'

const Social = ({ to, icon, iconAlt, clase }) => {
    return (
        <div>
            <Link to={to} target='_blank' rel='noopener noreferrer'>
                <button className={clase}><img className='icon' src={icon} alt={iconAlt} />
                </button>
            </Link>
        </div>
    )
}

export default Social