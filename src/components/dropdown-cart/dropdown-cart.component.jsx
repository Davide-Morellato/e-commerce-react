import React from "react";
import { useNavigate } from "react-router-dom"; //per la navigazione tra pagine
import SingleItem from '../single-item/single-item.component' //importo il componente SingleItem
import './dropdown-cart.styles.scss';
import { Button } from "../../styled-components/button"; //importo lo style-components
import { useSelector } from "react-redux"; //importo il selettore
import { selectCartProducts } from "../../redux/cart/cart.selectors"; //importo la funzione per il selettore dei prodotti nel carrello

const DropdownCart = () => {

    //salvo in una variabile l'HOOK useNavigate
    const navigate = useNavigate();

    const products = useSelector(selectCartProducts)

    return(
        <div className="dropdown-cart">
            <div className="cart_items">

                {/* controllo
                    SE la lunghezza dell'array dei prodotti è > 0,
                        ALLORA mappa l'array e identifica i singoli prodotti in base l'id
                    ALTRIMENTI stampa il messaggio: Carrello Vuoto */}
                {
                    products.length > 0
                    ?
                    products.map(singleProduct => {
                        <SingleItem key={singleProduct.id}{...singleProduct}/>
                    })
                    :
                    (
                        <span className="empty_mex"> CARRELLO VUOTO </span>
                    )
                }
            </div>
            {/* aggiungo l'evento al click di navigazione per il checkout
                NB -> /checkout dichiarata in App.js*/}
            {/* inserisco lo styled-components al posto del tag HTML button */}
            <Button onClick={() => navigate('/checkout')}> CASSA </Button>
        </div>
    )
}

export default DropdownCart