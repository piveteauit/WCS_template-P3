import Navbar from '../components/Navbar';      
import Footer from '../components/Footer';
import '../styles/NotreHistoire.css'

const NotreHistoire = () => {
    return (
        <div className='histoire-page'>
            <Navbar />
            <h1>Notre histoire</h1>
            <div className='histoire-container'>
                <h2><span>Notre concept</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam omnis porro vel deserunt, similique aliquid aspernatur ullam cupiditate necessitatibus molestiae, eveniet saepe corrupti commodi error fuga ea, odio aperiam!</p>
                <h2><span>Nos programmes</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptas quod earum id. Veritatis aut, eaque ipsum nobis voluptatem, dolorum ea voluptatibus corrupti cum, voluptates neque! Dolorum dicta modi fuga.</p>
            </div>
            <Footer />
        </div>
    )
}

export default NotreHistoire;