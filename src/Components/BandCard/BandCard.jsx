// import pakages
import React from 'react';
import { useState } from 'react/cjs/react.development';

// import custom files
import './bandCard.css';

const BandCard = (props) => {
    const {img, name, formed, genra, city, budget} = props.band;
    const [selected, setSelected] = useState(false)
    const handleCard = () =>{
        setSelected(true)
        const newBandNo = props.bandNo + 1;
        const bandlist = {
            name: name,
            img: img
        }
        props.handleCardCalculation(newBandNo, budget, bandlist)
    }
    return ( 
        <div className="card">
            <section className="card-img flex items-center justify-center ">
                <img src={img} alt="" className="band-img rounded-full h-36 w-36" />
            </section>
            <section>
                <h3 className="text-2xl font-bold text-gray-50 ml-1">{name}</h3>
                <div className="underline"></div>
                <h6 className="text-sm ml-1 font-bold text-gray-200"> Since, {formed}</h6>
                <div className="p-3 rounded-md card-details">
                    <h3 className=" font-semibold">Genra: {genra}</h3>
                    {/* <hr className="bg-rad-100" /> */}
                    <div className="flex ">
                        <h3 className="shadow-xl rounded-lg py-1 px-2 w-3/6 mr-0.5 font-semibold">Origin: <div className="details-underline"></div> {city}</h3>
                        <h3 className="shadow-xl rounded-lg py-1 px-2 w-3/6 font-semibold">Amount: <div className="details-underline"></div> {budget}</h3>
                    </div>
                </div>
            </section>
            {selected?
            <button className="invite-btn font-semibold"><i class="fas fa-check-circle"></i> Invite</button>
            : 
            <button className="invite-btn font-semibold" onClick={handleCard}><i class="fas fa-check-circle"></i> Invite</button>
            }
        </div>
     );
}
 
export default BandCard;