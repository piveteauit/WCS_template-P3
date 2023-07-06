import { useState } from 'react';
import Navbar from '../components/Navbar';
import MenuBurger from '../components/MenuBurger';
import '../styles/InscriptionForm.css';

const InscriptionForm = () => {

    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState("")
    const [samePassword, setSamePassword] = useState('')

    const handlePassword = (e) => {
        let newPassword = e.target.value;
        setPassword(newPassword);
        
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

    const handleSamePassword = (e) => {
        setSamePassword(e.target.value);
    }

    return (
        <div className='inscription-page'>
            <Navbar />
            <MenuBurger />

            <h1>Inscription</h1>
            <form className='inscription-form'>
                <label htmlFor='last-name'>Nom</label>
                <input type='text' name='last-name' id='last-name' placeholder='Entrez votre nom...' />
                
                <label htmlFor='first-name'>Prénom</label>
                <input type='text' name='first-name' id='first-name' placeholder='Entrez votre prénom...' />
                
                <label htmlFor='age'>Age</label>
                <input type='number' name='age' id='age' min='18' placeholder='Entrez votre âge...' />

                <label htmlFor='phone'>Numéro de téléphone</label>
                <input type='tel' name='phone' id='phone' placeholder='Entrez votre numéro de téléphone...' />

                <label htmlFor='email'>Adresse mail</label>
                <input type='email' name='email' id='email' placeholder='Entrez votre adresse mail...' />
                
                <label htmlFor='atelier'>Choix de l'atelier</label>
                <select name='atelier' id='atelier' required>
                    <option value='' selected disabled hidden>Sélection de l'atelier</option>
                    <option value='création'>Atelier Création</option>
                    <option value='dégustation'>Atelier Dégustation</option>
                </select>

                <label htmlFor='date'>Date d'atelier préférée</label>
                <input type='date' name='date' id='date' />
                
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