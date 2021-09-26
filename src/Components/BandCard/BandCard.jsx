// import pakages
import React from 'react';
import { useState } from 'react';

// import custom files
import './bandCard.css';

const BandCard = (props) => {
    // destructuring the props object
    const {img, name, formed, genra, city, budget} = props.band;

    // state for handle multiple selection 
    const [selected, setSelected] = useState(false);

    // handle cart calculation
    const handleCard = () =>{
        // make item as a selected after one click
        setSelected(true)
        // update cart data
        const newBandNo = props.bandNo + 1;
        const bandlist = {
            name: name,
            img: img
        }
        // pass data into parent component
        props.handleCardCalculation(newBandNo, budget, bandlist)
    }
    return ( 
        <div className="card">
            {/* image part */}
            <section className="card-img flex items-center justify-center ">
                <img src={img} alt="" className="band-img rounded-full h-36 w-36" />
            </section>

            {/* here i store 5 dynamic data from json file  */}
            <section>
                <h3 className="text-2xl font-bold text-gray-50 ml-1">{name}</h3>
                <div className="underline"></div>
                <h6 className="text-sm ml-1 font-bold text-gray-200"> Since, {formed}</h6>
                <div className="p-3 rounded-md card-details">
                    <h3 className=" font-semibold">Genra: {genra}</h3>
                    <div className="flex ">
                        <h3 className="shadow-xl rounded-lg py-1 px-2 w-3/6 mr-0.5 font-semibold">Origin: <div className="details-underline"></div> {city}</h3>
                        <h3 className="shadow-xl rounded-lg py-1 px-2 w-3/6 font-semibold">Amount: <div className="details-underline"></div>$ {budget}</h3>
                    </div>
                </div>
            </section>

            {/* check items selected or not  */}
            {selected?
            <button className="invite-btn font-semibold"><i className="fas fa-check-circle"></i> Invite</button>
            : 
            <button className="invite-btn font-semibold" onClick={handleCard}><i className="fas fa-check-circle"></i> Invite</button>
            }
        </div>
     );
}
 
export default BandCard;