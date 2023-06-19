import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AtelierCrea.css'

const AtelierCrea = () => {
    return (
        <div className='atelier-crea-page'>
            <Navbar />
            <h1>Atelier Création</h1>
            <p>Atelier <span className='inovin'>INOVIN</span> pour créer votre propre vin personnalisé.

                Notre atelier <span className='inovin'>INOVIN</span> est unique en son genre : vous apprendrez à créer votre propre vin en sélectionnant les arômes et les saveurs que vous préférez.

                Vous pourrez ensuite enregistrer la composition de votre vin dans notre base de données pour le reproduire à tout moment.
                Vous pourrez également présenter votre vin à notre concours. </p>

                <p>Alors, prêts à créer votre propre vin ?

                L'atelier se réalise par groupe de 5 à 10 personnes.

                Après réservation nous prenons contact avec vous pour définir d'une date.

                A très vite !!!

            </p>

            <h2><span>Programme</span></h2>
            <ul className='programme-atelier'>
                <li>Accueil des participants</li>
                <li>
                    45 minutes : présentation et dégustation des quatre mono-cépages soigneusement sélectionnés par nos experts en vin, dans le but de comprendre les différences de goût, d'arôme et de couleur pour chaque variété de raisin
                </li>
                <li>
                    45 minutes : atelier d'assemblage de vin personnalisé, où vous pouvez mélanger les cépages selon vos préférences. Vous serez assisté tout au long du processus par nos experts.
                </li>
                <li>
                    15 minutes : étape finale du processus de fabrication du vin: le bouchage et le scellage de la bouteille que vous pourrez emporter avec vous en tant que souvenir unique de votre expérience.
                </li>
                <li>
                    15 minutes : pour finir, un moment d'échange et de partage où vous serez invités à expliquer votre approche de création de votre assemblage, un moment où vous recevrez aussi la fiche technique de votre vin ainsi que l'enregistrement de votre recette dans notre base de données. 
                </li>
            </ul>
            <p>
                Nous nous engageons à vous offrir une expérience inoubliable, enrichissante et divertissante lors de cet atelier de deux heures "Crée ton vin <span className='inovin'>INOVIN</span>". Nous vous invitons à vous inscrire dès maintenant pour vivre ce moment unique dans le monde du vin.
            </p>
            <button className='inscription-btn'>S'inscrire</button>
            <Footer />
        </div>
    )
}

export default AtelierCrea;