import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import registerRequest from '../auth/axios'
import { getValidationErrorMessage } from '../utils/errorsValidation';

const Register = () => {

    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = async (values) => {
        try {
            const res = await registerRequest(values)
            res.data ? navigate('/login') :
                console.log("Error")
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <form className='flex justify-center flex-col m-auto w-1/12'
            onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input
                className='p-1 text-zinc-950'
                type="email"
                placeholder="Enter email"
                {...register('email', {
                    required: true,
                    minLength: 5,
                    maxLength: 50
                })}
            />

            {errors.email && (
                <span className='text-red-600 my-1 text-sm'>
                    {getValidationErrorMessage('Email', errors.email.type)}
                </span>
            )}

            <label>Password</label>
            <input
                className='p-1 text-zinc-950'
                type="password"
                placeholder="Password"
                {...register('password', {
                    required: true,
                    minLength: 8,
                    maxLength: 50
                })}
            />

            {errors.password && (
                <span className='text-red-600 my-1 text-sm'>
                    {getValidationErrorMessage('Password', errors.password.type)}
                </span>
            )}

            <label>Username</label>
            <input
                className='p-1 text-zinc-950'
                type="username"
                placeholder="Username"
                {...register('user', {
                    required: true,
                    minLength: 3,
                    maxLength: 50
                })}
            />

            {errors.user && (
                <span className='text-red-600 my-1 text-sm'>
                    {getValidationErrorMessage('User', errors.user.type)}
                </span>
            )}

            <Button type='submit' className='bg-red-700 p-1 rounded-md text-md font-semibold'>
                Register
            </Button>
        </form>
    )
}

export default Register