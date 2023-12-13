import instanceAxios from './axiosCreate'

const registerRequest = (data) => {
    return instanceAxios.post('users/register', data)
}

export const loginRequest = (data) => {
    return instanceAxios.post('users/login', data)
}

export const logoutRequest = () => {
    return instanceAxios.post('users/logout')
}

export const payments = (data) => {
    return instanceAxios.post('pays/checkout', data)
}

export const paymentsMp = (data) => {
    return instanceAxios.post('paysmp/checkoutmp', data)
}

export default registerRequest