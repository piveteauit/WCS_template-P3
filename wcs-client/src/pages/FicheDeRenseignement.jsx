import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MenuBurger from '../components/MenuBurger'
import '../styles/FicheDeRenseignement.css'

const FicheDeRenseignement = () => {
    const params = useParams()
    console.log(params)


    return (
        <div>
            <Navbar />
            <MenuBurger />

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
                    <h3>Intensité</h3>
                    <div className="olfactif-toggle-container-intensity">

                        <div className="checkbox-container">
                            <p>FAIBLE</p>
                            <input type="checkbox" id='low-intensity' />
                            <label htmlFor="low-intensity" className='button'></label>
                        </div>

                        <div className="checkbox-container">
                            <p>MOYEN</p>
                            <input type="checkbox" id='middle-intensity' />
                            <label htmlFor="middle-intensity" className='button'></label>
                        </div>

                        <div className="checkbox-container">
                            <p>FORT</p>
                            <input type="checkbox" id='high-intensity' />
                            <label htmlFor="high-intensity" className='button'></label>
                        </div>
                    </div>
                    <h3>Aromes</h3>
                    <div className="olfactif-toggle-container-aromes">

                        <div className="checkbox-container">
                            <p>FRUITÉ</p>
                            <input type="checkbox" id='fruit-arome' />
                            <label htmlFor="fruit-arome" className='button'></label>
                        </div>
                        <div className="checkbox-container">
                            <p>FLORAL</p>
                            <input type="checkbox" id='floral-arome' />
                            <label htmlFor="floral-arome" className='button'></label>
                        </div>
                        <div className="checkbox-container">
                            <p>EPICÉ</p>
                            <input type="checkbox" id='spicy-arome' />
                            <label htmlFor="spicy-arome" className='button'></label>
                        </div>
                        <div className="checkbox-container">
                            <p>BOISÉ</p>
                            <input type="checkbox" id='wood-arome' />
                            <label htmlFor="wood-arome" className='button'></label>
                        </div>
                    </div>
                    <div className="gustatif">
                        <h2><span>GUSTATIF</span></h2>
                        <h3>Intensité</h3>
                        <div className="olfactif-toggle-container-intensity-taste">
                            <div className="checkbox-container">
                                <p>FAIBLE</p>
                                <input type="checkbox" id='low-intensity-taste' />
                                <label htmlFor="low-intensity-taste" className='button'></label>
                            </div>
                            <div className="checkbox-container">
                                <p>MOYEN</p>
                                <input type="checkbox" id='middle-intensity-taste' />
                                <label htmlFor="middle-intensity-taste" className='button'></label>
                            </div>
                            <div className="checkbox-container">
                                <p>FORT</p>
                                <input type="checkbox" id='high-intensity-taste' />
                                <label htmlFor="high-intensity-taste" className='button'></label>
                            </div>
                        </div>
                        <h3>Saveur</h3>
                        <div className="olfactif-toggle-container-taste">
                            <div className="checkbox-container">
                                <p>ACIDE</p>
                                <input type="checkbox" id='acide-taste' />
                                <label htmlFor="acide-taste" className='button'></label>
                            </div>
                            <div className="checkbox-container">
                                <p>DOUX</p>
                                <input type="checkbox" id='sweet-taste' />
                                <label htmlFor="sweet-taste" className='button'></label>
                            </div>
                            <div className="checkbox-container">
                                <p>TANIQUE</p>
                                <input type="checkbox" id='tannic-taste' />
                                <label htmlFor="tannic-taste" className='button'></label>
                            </div>
                            <div className="checkbox-container">
                                <p>ÉQUILIBRÉ</p>
                                <input type="checkbox" id='balanced-taste' />
                                <label htmlFor="balanced-taste" className='button'></label>
                            </div>
                            <div className="checkbox-container">
                                <p>LONG EN BOUCHE</p>
                                <input type="checkbox" id='long-taste' />
                                <label htmlFor="long-taste" className='button'></label>
                            </div>
                            <div className="form-infos-complementaires">
                                <textarea name="infod-complementaires" id="infos" placeholder='informations complémentaires'>
                                </textarea>
                                <button>submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FicheDeRenseignement