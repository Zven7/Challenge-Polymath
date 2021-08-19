import { Link } from 'react-router-dom';
import './CreateAct.css';


export default function CreateAct() {
    return (
        <Link id='actButtonFF' to='/addrestaurant'>
            <button id='actButton' type='button'>
                Create Restaurant
            </button>
        </Link>
    )
}

