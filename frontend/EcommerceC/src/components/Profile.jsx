import Logout from "./Logout"
import { Link } from "react-router-dom"
import '../css/profile.css'
import { useEffect, useState, useRef } from "react"
import axios from 'axios'
import profile from '../img/profile.svg'
import history from '../img/history.svg'
import baseURL from "../config"
import 'ldrs/bouncy'

const Profile = () => {

    const [userData, setUserData] = useState({
        id: '',
        user: '',
        email: '',
        createdAt: '',
        updatedAt: ''
    });

    const [file, setFile] = useState(null)
    const fileInputRef = useRef(null);

    const handleFile = (e) => {
        e.preventDefault()
        setFile(e.target.files[0])
    }

    const handleImageClick = () => {
        fileInputRef.current.click();
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${baseURL}/users/profile`, {
                withCredentials: true,
            })
            setUserData(res.data)
        }
        fetchData()
    }, [])


    return (
        <div>
            <div className='button-borders button2 flex m-8'>
                <Link className='primary-button' to='/'>
                    Back to home
                </Link>
            </div>

            <div className="mb-8 flex justify-center">
                <p className="font-bold text-2xl">Profile</p>
                <img className="w-8 rounded-lg ml-2" src={profile} alt="" />
            </div>
            <div className="card-3">
                <div className="infos">
                    <img
                        className="image"
                        src={file ? URL.createObjectURL(file) : profile}
                        alt="image"
                        onClick={handleImageClick}
                    />
                    <input
                        ref={fileInputRef}
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleFile}
                    />
                    <div className="info">
                        <div>
                            <p className="name">
                                {userData.user}
                            </p>
                            <p className="function">
                                {userData.email}
                            </p>
                        </div>
                        <div className="stats">
                            <p className="flex-2 flex-col">
                                Buys
                                <span className="state-value">
                                    0
                                </span>
                            </p>
                            <p className="flex-2">
                                Coins
                                <span className="state-value">
                                    0
                                </span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <p className="font-bold text-2xl">Purchase history</p>
                <img className="w-8 rounded-lg ml-2" src={history} alt="" />
            </div>

            <div className='flex justify-center my-16'>
                <l-bouncy
                    size="80"
                    speed="2"
                    color="white"
                ></l-bouncy>
            </div>

            <div className="flex justify-center mt-8">
                <Logout />
            </div>
        </div>
    )
}

export default Profile