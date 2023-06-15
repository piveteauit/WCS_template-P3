import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='newsletter-container'>
                <label htmlFor='newsletter-signup'>S'abonner à la newsletter</label>
                <input type='email' name='newsletter-email' id='newsletter-email' placeholder='Entrez votre adresse mail'/>
                <button type='submit'>S'abonner</button>
            </div>
            <div className='contact-info-container'>
                <p>Inovin</p>
                <p>01.02.03.04.05</p>
                <p>contact@inovin.fr</p>
            </div>
        </div>
    )
}

export default Footer;