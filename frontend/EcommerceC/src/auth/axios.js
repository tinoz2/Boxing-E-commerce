import axios from 'axios'

const registerRequest = (data) => {
    return axios.post('http://localhost:3001/users/register', data)
}

export const loginRequest = (data) => {
    return axios.post('http://localhost:3001/users/login', data)
}

export const logoutRequest = () => {
    return axios.post('http://localhost:3001/users/logout')
}

export const payments = (data) => {
    return axios.post('http://localhost:3001/pays/checkout', data)
}

export const paymentsMp = (data) => {
    return axios.post('http://localhost:3001/paysmp/checkoutmp', data)
}

export default registerRequest