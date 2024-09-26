import React from "react"; //importo React nel Componente

import './homepage.styles.scss' //importo il foglio di stile associato

import {categories} from '../shop-data' //importo l'array di oggetti "categories"

import SingleCategory from "../components/single-category.component"; //importo il componente

//creo il Functional Component
const Homepage = () => {
    return(
        <div className="homepage">

            {/* stampo le categorie */}
            {categories.map((el) => (
                //inserisco il componente SingleCategory a cui passo come chiave di lettura key=id e prendo i valori tramite lo spread-operator
                <SingleCategory key={el.id} {...el}/>
            ))}
        </div>
    );
};

export default Homepage