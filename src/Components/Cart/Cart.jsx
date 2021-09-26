// import pakages
import React from 'react';

// import custom files
import Bandlist from '../BandList/Bandlist';
import './cart.css';

const Cart = (props) => {

    return ( 
        <div className="cart-part-align fixed flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-100 mt-6">Event Summary</h1>
            <div className="summery-underline"></div>
            <h6 className="text-2xl font-semibold text-gray-200 mt-6">Total No of Bands: {props.bandNo}</h6>
            <div className="p-7 mt-7 band-list-cart">
                <h1 className="text-2xl font-semibold text-gray-200">List of the selected Bands</h1>
                <div className="list-underline"></div>

                {/* pass list data into bandlist component  */}
                <div className="band-list-items">
                    {
                        props.selectedBand.map((bandlist, index) => <Bandlist key={index} bandname={bandlist.name} bandimg= {bandlist.img}/>)
                    }
                </div>
            </div>
            <h6 className="text-2xl font-semibold text-gray-200 mt-6">Total Expence : $ {props.totalAmount}</h6>
        </div>
     );
}
 
export default Cart;
