import { logoutRequest } from "../auth/axios"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Logout = () => {

    const navigate = useNavigate()
    const { logout } = useAuth();

    const handleLogout = async () => {
        try {
            const res = await logoutRequest()
            if (res.data) {
                navigate('/login')
                logout()
            }
            else {
                console.log("Error")
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="button-borders button2">
            <button className='primary-button' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout