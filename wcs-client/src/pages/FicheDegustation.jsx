import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MenuBurger from '../components/MenuBurger'
import '../styles/FicheDegustation.css'
import React, { useState, useEffect } from 'react';
import { getAll } from '../services'


const initialValues = {
    color_id: null,
    intensity_id: null,
    terroir_id: null,
    cepage_id: null,
    aromas_id: null,
    flavors_id: null,
    tastingSheet_id: null,

}

const errorMessage = {
    color_id: "Couleur obligatoire",
    intensity_id: "Intensité obligatoire",
    terroir_id: "Terroir obligatoire",
    cepage_id: "cepage obligatoire",
    aromas_id: "Arôme obligatoire",
    flavors_id: "Goût obligatoire",
    tastingSheet_id: "Note obligatoire"
}

const checkform = (formValues) => {

    const keys = Object.keys(formValues)
    let error = {}
    keys.forEach(j => {
        if (!formValues[j] && errorMessage[j]) {
            error[j] = errorMessage[j]
        }
    })
    return error
}

const isChecked = (id, value) => {
    return id == value
}


const FicheDegustation = () => {
    const [formValues, setFormValues] = useState(initialValues)
    const { userId } = useParams()
    const [cepages, setCepages] = useState([])
    const [terroirs, setTerroirs] = useState([])
    const [colors, setColors] = useState([])
    const [intensity, setIntensity] = useState([])
    const [aromas, setAromas] = useState([])
    const [flavors, setFlavors] = useState([])
    const [errorMessage, setErrorMessage] = useState({});
    const [tastingSheet, setTastingSheet] = useState([]);

    useEffect(function () {
        getAll("cepages").then(setCepages)
        getAll("terroirs").then(setTerroirs)
        getAll("colors").then(setColors)
        getAll("intensity").then(setIntensity)
        getAll("aromas").then(setAromas)
        getAll("flavors").then(setFlavors)
        getAll("tastingSheet").then(setTastingSheet)
    }, [])

    const onChange = (el) => {

        let value = (el.target.type != "checkbox" || el.target.checked || typeof el.target.checked != "boolean") ? el.target.value : false
        setFormValues({
            ...formValues,
            [el.target.name]: value,
        });
    }



    // const onSubmit = () => {

    //     const error = checkform(formValues)
    //     if (error) {
    //         setErrorMessage(error);
    //         return;
    //     }
    //     postTastes({ ...formValues, userId })
    //         .then(function (result) {
    //     // navigate(`ficheDeRenseignement/${result.id}`);
    //     console.log(result)
    // })
    //     .catch(function (err) {
    //             setErrorMessage(err.message);
    //         })
    //     };



    return (
        <div className='renseignement-page'>
            <Navbar />
            <MenuBurger />

            <form className='renseignement-container'>

                <h1>FICHE DE DEGUSTATION</h1>

                <div className='color'>
                    <h2><span>Couleur</span></h2>
                    <div className="olfactif-toggle-container-color">
                        {colors.map((c) => (
                            <div key={`colors${c.id}`} className='vin-container'>
                                <p>vin {c.name}</p>
                                <div className="checkbox-container">
                                    <input checked={isChecked(formValues.color_id, c.id)} name='color_id' value={c.id} type="checkbox" id={`check-vin-color-${c.id}`} onChange={onChange} />
                                    <label htmlFor={`check-vin-color-${c.id}`} className='button'></label>
                                </div>
                            </div>
                        ))}
                        <div>{errorMessage && <p className="error-message">{errorMessage.color_id}</p>}</div>
                    </div>
                </div>

                <div className='intensity'>
                    <h2><span>Intensité</span></h2>
                    <div className="olfactif-toggle-container-intensity">
                        {intensity.map((i) => (
                            <div key={`intensity${i.id}`} className='vin-container'>
                                <p>vin {i.name}</p>
                                <div className="checkbox-container">
                                    <input checked={isChecked(formValues.intensity_id, i.id)} name='intensity_id' value={i.id} type="checkbox" id={`check-vin-intensity-${i.id}`} onChange={onChange} />
                                    <label htmlFor={`check-vin-intensity-${i.id}`} className='button'></label>
                                </div>
                            </div>
                        ))}
                        <div>{errorMessage && <p className="error-message">{errorMessage.intensity_id}</p>}</div>
                    </div>
                </div>

                <div className='olfactif'>
                    <h2><span>Aromes</span></h2>
                    <div className="olfactif-toggle-container-aromes">
                        {aromas.map((a) => (
                            <div key={`aromas${a.id}`} className='vin-container'>
                                <p>vin {a.name}</p>
                                <div className="checkbox-container">
                                    <input checked={isChecked(formValues.aromas_id, a.id)} name='aromas_id' value={a.id} type="checkbox" id={`check-vin-aromas-${a.id}`} onChange={onChange} />
                                    <label htmlFor={`check-vin-aromas-${a.id}`} className='button'></label>
                                </div>
                            </div>
                        ))}
                        <div>{errorMessage && <p className="error-message">{errorMessage.aromas_id}</p>}</div>
                    </div>
                </div>

                <div className='gustatif'>
                    <h2><span>Saveur</span></h2>
                    <div className="olfactif-toggle-container-aromes">
                        {flavors.map((f) => (
                            <div key={`flavors${f.id}`} className='vin-container'>
                                <p>vin {f.name}</p>
                                <div className="checkbox-container">
                                    <input checked={isChecked(formValues.flavors_id, f.id)} name='flavors_id' value={f.id} type="checkbox" id={`check-vin-flavors-${f.id}`} onChange={onChange} />
                                    <label htmlFor={`check-vin-flavors-${f.id}`} className='button'></label>
                                </div>
                            </div>
                        ))}
                        <div>{errorMessage && <p className="error-message">{errorMessage.flavors_id}</p>}</div>

                    </div>
                </div>


                <div className="menus-deroulants">
                    <div className='select-cepage'>
                        <label htmlFor="atelier">CHOIX DU CEPAGE</label>
                        <select onChange={onChange} name="cepage_id" required>
                            <option value="">
                                Sélection du cépage
                            </option>
                            {cepages.map((c) => (
                                <option key={`cepages${c.id}`} value={c.id}>{c.name}</option>

                            ))}
                        </select>
                    </div>

                    <div className='select-terroir'>
                        <label htmlFor="atelier">CHOIX DU TERROIR</label>
                        <select onChange={onChange} name="terroir_id" required>
                            <option value="">
                                Sélection du terroir
                            </option>
                            {terroirs.map((t) => (
                                <option key={`terroir${t.id}`} value={t.id}>{t.name}</option>

                            ))}
                        </select>
                    </div>

                </div>

                <div className='note-container'>
                    <p>Merci de noter sur 10 votre appréciation du vin</p>
                    <p className='note-finale'>Note&nbsp;<input type='number' name='tastingSheet_id' id='note-finale-input' min="0" max="10" onChange={onChange} required />
                        
                        <span>&nbsp; /10</span></p>
                </div>

                <button type='submit'>Valider</button>
            </form>

        </div>
    )
};

export default FicheDegustation;
