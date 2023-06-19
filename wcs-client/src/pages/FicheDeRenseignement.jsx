
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
                    <div className="olfactif-toggle-container-intensity">
                        <p>FAIBLE</p>
                        <div className="checkbox-container">
                            <input type="checkbox" id='low-intensity' />
                            <label htmlFor="low-intensity" className='button'></label>
                        </div>
                        <p>MOYEN</p>
                        <div className="checkbox-container">
                            <input type="checkbox" id='middle-intensity' />
                            <label htmlFor="middle-intensity" className='button'></label>
                        </div>
                        <p>FORT</p>
                        <div className="checkbox-container">
                            <input type="checkbox" id='high-intensity' />
                            <label htmlFor="high-intensity" className='button'></label>
                        </div>
                    </div>
                    <h3>Aromes</h3>
                    <div className="olfactif-toggle-container-aromes">
                        <p>FRUITÉ</p>
                        <div className="checkbox-container">
                            <input type="checkbox" id='fruit-arome' />
                            <label htmlFor="fruit-arome" className='button'></label>
                        </div>
                        <p>FLORAL</p>
                        <div className="checkbox-container">
                            <input type="checkbox" id='floral-arome' />
                            <label htmlFor="floral-arome" className='button'></label>
                        </div>
                        <p>EPICÉ</p>
                        <div className="checkbox-container">
                            <input type="checkbox" id='spicy-arome' />
                            <label htmlFor="spicy-arome" className='button'></label>
                        </div>
                        <p>BOISÉ</p>
                        <div className="checkbox-container">
                            <input type="checkbox" id='wood-arome' />
                            <label htmlFor="wood-arome" className='button'></label>
                        </div>
                    </div>
                    <div className="gustatif">
                        <h2><span>GUSTATIF</span></h2>
                        <h3>Intensité</h3>
                        <div className="olfactif-toggle-container-intensity-taste">
                            <p>FAIBLE</p>
                            <div className="checkbox-container">
                                <input type="checkbox" id='low-intensity-taste' />
                                <label htmlFor="low-intensity-taste" className='button'></label>
                            </div>
                            <p>MOYEN</p>
                            <div className="checkbox-container">
                                <input type="checkbox" id='middle-intensity-taste' />
                                <label htmlFor="middle-intensity-taste" className='button'></label>
                            </div>
                            <p>FORT</p>
                            <div className="checkbox-container">
                                <input type="checkbox" id='high-intensity-taste' />
                                <label htmlFor="high-intensity-taste" className='button'></label>
                            </div>
                        </div>
                        <h3>Saveur</h3>
                        <div className="olfactif-toggle-container-taste">
                            <p>ACIDE</p>
                            <div className="checkbox-container">
                                <input type="checkbox" id='acide-taste' />
                                <label htmlFor="acide-taste" className='button'></label>
                            </div>
                            <p>DOUX</p>
                            <div className="checkbox-container">
                                <input type="checkbox" id='sweet-taste' />
                                <label htmlFor="sweet-taste" className='button'></label>
                            </div>
                            <p>TANIQUE</p>
                            <div className="checkbox-container">
                                <input type="checkbox" id='tannic-taste' />
                                <label htmlFor="tannic-taste" className='button'></label>
                            </div>
                            <p>ÉQUILIBRÉ</p>
                            <div className="checkbox-container">
                                <input type="checkbox" id='balanced-taste' />
                                <label htmlFor="balanced-taste" className='button'></label>
                            </div>
                            <p>LONG EN BOUCHE</p>
                            <div className="checkbox-container">
                                <input type="checkbox" id='long-taste' />
                                <label htmlFor="long-taste" className='button'></label>
                            </div>
                            <div className="form-infos-complementaires">
                                <textarea name="infod-complementaires" id="infos" placeholder='informations complémentaires'>
                                </textarea>
                            </div>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FicheDeRenseignement