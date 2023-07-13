import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MenuBurger from '../components/MenuBurger'
import '../styles/FicheDeRenseignement.css'
import { useEffect, useState } from 'react'
import { getAll, postTastes } from '../services'


const initialValues = { 
    color_id : null,
    intensity_id : null,
    terroir_id : null,
    cepage_id : null,
    aromas_id : null,
    flavors_id : null,

    comment : ""
}

const errorMessage = { 
    color_id : "Couleur obligatoire",
    intensity_id : "Intensité obligatoire",
    terroir_id : "Terroir obligatoire",
    cepage_id : "Cepage obligatoire",
    aromas_id : "Arôme obligatoire",
    flavors_id : "Goût obligatoire",
}
console.log(errorMessage.color_id)
const checkform = (formValues) => {

    const keys = Object.keys(formValues)
    let error = null
    keys.forEach( k => {
        if (! formValues[k] && errorMessage[k]) {
            error = errorMessage[k]
        }
    }) 
        return error
    } 
    
const isChecked = (id, value) => {
    return id == value
}


const FicheDeRenseignement = () => {
    const [formValues, setFormValues] = useState(initialValues)
    const { userId } = useParams ()
    const [cepages, setCepages] = useState([])
    const [terroirs, setTerroirs] = useState([])
    const [colors, setColors] = useState([])
    const [intensity, setIntensity] = useState([])
    const [aromas, setAromas] = useState([])
    const [flavors, setFlavors] = useState([])
    const [errorMessage, setErrorMessage] = useState(null);
    

    useEffect (function(){
        getAll("cepages").then(setCepages)
        getAll("terroirs").then(setTerroirs)
        getAll("colors").then(setColors)
        getAll("intensity").then(setIntensity)
        getAll("aromas").then(setAromas)
        getAll("flavors").then(setFlavors)
    }, [])

    
    const onChange = (e) => {

        let value = (e.target.checked || typeof e.target.checked != "boolean") ? e.target.value : false
        setFormValues({
          ...formValues,
          [e.target.name]: value,
        });
    }    
    
    // console.log(formValues);

    const onSubmit = () => {
        
        const error = checkform(formValues)
        if (error) {
            setErrorMessage(error);
            return;
        }
        postTastes({...formValues, userId})
          .then(function (result) {
            // navigate(`ficheDeRenseignement/${result.id}`);
          })
          .catch(function (err) {
            setErrorMessage(err.message);
          });
      };

    return (
        <div className='renseignement-page'>
            <Navbar />
            <MenuBurger />

            <h1>FICHE DE RENSEIGNEMENT</h1>
        
                <div className='color'>
                    <h2><span>Couleur</span></h2>
                        <div className="olfactif-toggle-container-color"> 
                            { colors.map((c) => (
                                <div key={`colors${c.id}`} className='vin-container'>
                                    <p>vin {c.name}</p> 
                                    <div className="checkbox-container">
                                        <input checked= {isChecked(formValues.color_id, c.id)} name='color_id' value={c.id} type="checkbox" id={`check-vin-color-${c.id}`} onChange={onChange} />
                                <label htmlFor={`check-vin-color-${c.id}`} className='button'></label>
                                <div>{errorMessage && <p className="error-message">{errorMessage}</p>}</div> 
                            </div>
                        </div>
                            ))}
                    </div>
                </div>
       
                <div className='intensity'>
                     <h2><span>Intensité</span></h2>
                        <div className="olfactif-toggle-container-intensity"> 
                            { intensity.map((i) => (
                                <div key={`intensity${i.id}`} className='vin-container'>
                                    <p>vin {i.name}</p>
                                    <div className="checkbox-container">
                                            <input checked= {isChecked(formValues.intensity_id, i.id)} name='intensity_id' value={i.id} type="checkbox" id={`check-vin-intensity-${i.id}`} onChange={onChange} />
                                        <label htmlFor={`check-vin-intensity-${i.id}`} className='button'></label>
                                    </div>
                                </div>
                             ))}
                        </div>
                </div>

                <div className='olfactif'>
                     <h2><span>Aromes</span></h2>
                        <div className="olfactif-toggle-container-aromes"> 
                            { aromas.map((a) => (
                                <div key={`aromas${a.id}`} className='vin-container'>
                                    <p>vin {a.name}</p>
                                    <div className="checkbox-container">
                                            <input checked= {isChecked(formValues.aromas_id, a.id)} name='aromas_id' value={a.id} type="checkbox" id={`check-vin-aromas-${a.id}`} onChange={onChange} />
                                        <label htmlFor={`check-vin-aromas-${a.id}`} className='button'></label>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>

                <div className='gustatif'>
                     <h2><span>Saveur</span></h2>
                        <div className="olfactif-toggle-container-aromes"> 
                            { flavors.map((f) => (
                                <div key={`flavors${f.id}`} className='vin-container'>
                                    <p>vin {f.name}</p>
                                    <div className="checkbox-container">
                                            <input checked= {isChecked(formValues.flavors_id, f.id)} name='flavors_id' value={f.id} type="checkbox" id={`check-vin-flavors-${f.id}`} onChange={onChange} />
                                        <label htmlFor={`check-vin-flavors-${f.id}`} className='button'></label>
                                    </div>
                                </div>
                            ))}

                        </div>
                </div>


                <div className="menus-deroulants">
                        <div className='select-cepage'>
                            <label htmlFor="atelier">CHOIX DU CEPAGE</label>
                                <select onChange={onChange} name="cepage_id" required>
                                    <option value="">
                                        Sélection du cépage
                                    </option>
                                        { cepages.map((c) => (
                                    <option value={c.id}>{c.name}</option>
                                
                                    ))}
                                </select>
                </div>

                <div className='select-terroir'>
                            <label htmlFor="atelier">CHOIX DU TERROIR</label>
                                <select onChange={onChange} name="terroir_id" required>
                                    <option value="">
                                        Sélection du terroir
                                    </option>
                                         { terroirs.map((t) => (
                                    <option value={t.id}>{t.name}</option>
                                
                                ))}
                                </select>
                </div>

            </div>
                        <div className="form-infos-complementaires">
                            <textarea name="comment" id="infos" placeholder='informations complémentaires' onChange={onChange}>
                            </textarea>  
                          
                        <button onClick={onSubmit}>submit</button>
                        </div>

        </div>                
    )
}

export default FicheDeRenseignement