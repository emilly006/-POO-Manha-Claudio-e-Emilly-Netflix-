import './Home.css'
import NavBar from '../components/NavBar'
import Meio from '../components/Meio'
import Carrossel from '../components/Carrossel'



function Home() {
    return (
            <div className='telaHome'>
                <NavBar />
                <Meio />
                <Carrossel />
            </div>


    )

}

export default Home;