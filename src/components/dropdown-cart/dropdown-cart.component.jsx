import React from "react";
import { useNavigate } from "react-router-dom"; //per la navigazione tra pagine
import SingleItem from '../single-item/single-item.component' //importo il componente SingleItem
import './dropdown-cart.styles.scss';

const DropdownCart = () => {

    //salvo in una variabile l'HOOK useNavigate
    const navigate = useNavigate();

    return(
        <div className="dropdown-cart">
            <div className="cart_items">
                <SingleItem />
              {/* <span className="empty_mex"> CARRELLO VUOTO </span> */}
            </div>
            {/* aggiungo l'evento al click di navigazione per il checkout
                NB -> /checkout dichiarata in App.js*/}
            <button onClick={() => navigate('/checkout')}> CASSA </button>
        </div>
    )
}

export default DropdownCart