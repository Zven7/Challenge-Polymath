import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer';
import './IncorrectPage.css';


const IncorrectPage = () => {
    return(
        <div>
            <Header />
            <div id='incorrectDir'>
                <img src="https://img.flaticon.com/icons/png/512/30/30946.png" alt="globe and magnifying glass" id='globeGlass'/>
                <h1>Oops! Incorrect Direction!</h1>
            </div>
            <Footer />
        </div>
    )
} 

export default IncorrectPage;