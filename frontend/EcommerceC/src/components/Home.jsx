import '../css/home.css'
import Circle from './Circle.jsx'

const Home = () => {
    return (
        <>
            <main className='main'>
                <div className='container-h1'>
                    <h1>BOXING</h1>
                    <p className='p-main'>"Unleash Your Inner Fighter: Where Passion Meets Power in the World of Boxing!"</p>
                    <div className='more-container'>
                        <Circle />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home