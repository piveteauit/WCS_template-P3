
import Navbar from '../components/Navbar'
import '../styles/FicheDeRenseignement.css'

const FicheDeRenseignement = () => {
    return (
        <div>
            <Navbar />
            <div className='FicheDeRenseignement-container'>

                <h1>FICHE DE RENSEIGNEMENT</h1>
                <div className='vin-container'>
                    <p>vin blanc</p>
                    <div className="checkbox-container">
                        <input type="checkbox" id='check-vin-blanc' />
                        <label htmlFor="check-vin-blanc" className='button'></label>
                    </div>



                </div>
                <div className='vin-container'>
                    <p>vin rouge</p>
                    <div className="checkbox-container">
                        <input type="checkbox" id='check' />
                        <label htmlFor="check" className='button'></label>
                    </div>
                </div>

                <div className='olfactif'>
                    <h2><span>OLFACTIF</span></h2>
                    <h3>Intensitée</h3>
                    <div className="olfactif-toggle-container">


                    </div>
                </div>
            </div>
        </div>

    )
}

export default FicheDeRenseignement