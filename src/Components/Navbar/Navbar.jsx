// import pakages
import React from 'react';

// import custom files
import './navbar.css';

const Navbar = () => {
    return ( 
        <div className="navbar h-25 flex justify-between items-center">
            <section>
                <h1 className="text-gray-100 font-bold text-4xl">Bongo BD Concert</h1>
                <div className="nav-title-underline"></div>
                <h3 className="text-md font-semibold text-gray-300 mt-1 italic">HERE'S TO THE NIGHTS THAT TURNED INTO MORNINGS, AND THE FRIENDS TURNED INTO FAMILY</h3>
            </section>
            <section>
                <div>
                    <h3 className="bg-gray-200 text-xl py-2 pl-4 rounded-full font-semibold">Total Budget <span className="nav-budget-amount  px-4 rounded-full text-gray-100 font-semibold text-xl">$ 1500000</span></h3>
                </div>
            </section>
        </div>
     );
}
 
export default Navbar;