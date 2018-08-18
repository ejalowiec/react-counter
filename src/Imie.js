import React from 'react';

// const Imie = () => {
//     return(
//         <div class="imie">Eryk</div>
//     )
// }

const Imie = (props) => {
    return(
        <div className="imie">
            {props.imie} {props.nazwisko} {props.wiek} lat
        </div>
    )
}

export default Imie;
