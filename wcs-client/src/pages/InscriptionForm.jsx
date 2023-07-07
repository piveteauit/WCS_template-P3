import { useState } from 'react';
import Navbar from '../components/Navbar';
import MenuBurger from '../components/MenuBurger';
import '../styles/InscriptionForm.css';
import { postUser } from '../services';
import { useNavigate } from 'react-router-dom';

const InscriptionForm = () => {

    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")
    const [formValues, setFormValues] = useState({
        firstname : "",
        lastname : "",
        age : "",
        phone : "",
        email : "",
        atelier : "",
        date : "",
    })
        const onChange = (e) => {


            setFormValues({
                ...formValues,
                [e.target.name] : e.target.value
            })

    }

        const onSubmit = (e) => {
            e.preventDefault()
            postUser(formValues)
            .then( function(result){
                navigate(`ficheDeRenseignement/${result.id}`)
            })
            .catch( function(err){
                alert(err.message)
            })

        }
    
    return (
        <div className='inscription-page'>
            <Navbar />
            <MenuBurger />

            <h1>Inscription</h1>
            <form onSubmit={onSubmit} className='inscription-form'>
                <label htmlFor='last-name'>Nom</label>
                <input onChange={onChange}   type='text' name='lastname' id='last-name' placeholder='Entrez votre nom...' />
                
                <label htmlFor='first-name'>Prénom</label>
                <input onChange={onChange} type='text' name='firstname' id='first-name' placeholder='Entrez votre prénom...' />
                
                <label htmlFor='age'>Age</label>
                <input onChange={onChange}  type='number' name='age' id='age' min='18' placeholder='Entrez votre âge...' />

                <label htmlFor='phone'>Numéro de téléphone</label>
                <input onChange={onChange} type='tel' name='phone' id='phone' placeholder='Entrez votre numéro de téléphone...' />

                <label htmlFor='email'>Adresse mail</label>
                <input onChange={onChange} type='email' name='email' id='email' placeholder='Entrez votre adresse mail...' />
                
                <label htmlFor='atelier'>Choix de l'atelier</label>
                <select onChange={onChange} name='atelier' id='atelier' required>
                    <option value=''  disabled hidden>Sélection de l'atelier</option>
                    <option value='création'>Atelier Création</option>
                    <option value='dégustation'>Atelier Dégustation</option>
                </select>

                <label htmlFor='date'>Date d'atelier préférée</label>
                <input onChange={onChange} type='date' name='date' id='date' />
                
                {/* CHAMPS MOT DE PASSE DESACTIVE */}
               {/*  <label htmlFor='password'>Mot de passe</label>
                <input type='password' name='password' id='password' placeholder='Choisissez votre mot de passe' onChange={handlePassword} value={password} required/>
                <p className='password-msg'>{errorMessage}</p>
                
                <label htmlFor='same-password'>Confirmation mot de passe</label>
                <input type='password' name='password' id='same-password' placeholder='Choisissez votre mot de passe' onChange={handleSamePassword} value={samePassword} required/>
                <p className={samePassword === password ? "same-pwd" : "password-msg"}>Erreur : les mots de passe sont différents</p> */}
                <button type='submit'>Valider l'inscription</button>
            </form>
        </div>
        
    )
}

export default InscriptionForm;