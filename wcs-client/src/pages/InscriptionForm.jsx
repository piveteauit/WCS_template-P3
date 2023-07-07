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
        mail : "",
        atelier : "",
        date : "",
        password: "",
        samepassword:"",
    })


    const handlePassword = (newPassword) => {
        // let newPassword = e.target.value;
        // setPassword(newPassword);

        //REGEX RULES FOR A VALID & STRONG PASSWORD 
        let lCase = /[a-z]/g; // check for lowercase letters
        let uCase = /[A-Z]/g; // check for uppercase letters
        let numCase = /[0-9]/g; // check for numbers
        let speCase = /\W|_/g; // check for special characters

        // REGEX TESTS 
        if(newPassword.length === 0) {
            setErrorMessage("");
        } else if(!newPassword.match(lCase)) {
            setErrorMessage("Le mot de passe doit contenir des lettres miniscules");
        } else if (!newPassword.match(uCase)) {
            setErrorMessage("Le mot de passe doit contenir des lettre majuscules");
        } else if (!newPassword.match(numCase)) {
            setErrorMessage("Le mot de passe doit contenir un chiffre");
        } else if (!newPassword.match(speCase)) {
            setErrorMessage("Le mot de passe doit contenir un caractère spécial");
        } else if (newPassword.length < 8) {
            setErrorMessage("Le mot de passe doit avoir au moins 8 caractères")
        } else {
            setErrorMessage("");
        }
    }
    
    // const handleSamePassword = (e) => {
    //     setSamePassword(e.target.value);
    // }

    const onChange = (e) => {

             setFormValues({
                ...formValues,
                [e.target.name] : e.target.value
            })

            if (e.target.name == "password") {
                handlePassword(e.target.value)
            }
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
                <input onChange={onChange} type='email' name='mail' id='email' placeholder='Entrez votre adresse mail...' />
                
                <label htmlFor='atelier'>Choix de l'atelier</label>
                <select onChange={onChange} name='atelier' id='atelier' required>
                    <option value=''  disabled hidden>Sélection de l'atelier</option>
                    <option value='création'>Atelier Création</option>
                    <option value='dégustation'>Atelier Dégustation</option>
                </select>

                <label htmlFor='date'>Date d'atelier préférée</label>
                <input onChange={onChange} type='date' name='date' id='date' />
                
                {/* CHAMPS MOT DE PASSE DESACTIVE */}
                <label htmlFor='password'>Mot de passe</label>
                <input type='password' name='password' id='password' placeholder='Choisissez votre mot de passe' onChange={onChange} value={formValues.password} required/>
                <p className='password-msg'>{errorMessage}</p>
                
                <label htmlFor='same-password'>Confirmation mot de passe</label>
                <input type='password' name='samepassword' id='same-password' placeholder='Choisissez votre mot de passe' onChange={onChange} value={formValues.samepassword} required/>
                <p className={formValues.samepassword === formValues.password ? "same-pwd" : "password-msg"}>Erreur : les mots de passe sont différents</p>
                <button type='submit'>Valider l'inscription</button>
            </form>
        </div>
        
    )
}

export default InscriptionForm;