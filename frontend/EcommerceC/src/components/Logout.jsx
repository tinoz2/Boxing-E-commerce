import { logoutRequest } from "../auth/axios"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Logout = () => {

    const navigate = useNavigate()
    const { logout } = useAuth();

    const handleLogout = async () => {
        try{
            const res = await logoutRequest()
            if(res.data){
                navigate('/login')
                logout()
            }
            else{
                console.log("Error")
            } 
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <button className=' bg-red-400 p-2 text-lg font-semibold rounded-md' onClick={handleLogout}>Logout</button>
    )
}

export default Logout