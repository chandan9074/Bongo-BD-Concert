// import pakages
import React, { useEffect, useState } from 'react';

//import custom file
import "./dashboard.css";
import BandCard from '../BandCard/BandCard';
import Cart from '../Cart/Cart';

const Dashboard = () => {
    const [bands , setBands] = useState([]);
    const [bandNo, setBandNo] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [selectedBand, setSelectedBand] = useState([])

    // get data from bandcart component and updata the state 
    const handleCardCalculation = (band_no, amount, bList) =>{
        setBandNo(band_no);
        setTotalAmount(totalAmount+amount);
        setSelectedBand(prevArray => [...prevArray, bList])
    }

    // fetch data from custom json file
    useEffect(()=>{
        fetch("./band_data.json")
        .then(data => data.json())
        .then(res => setBands(res))
    }, [])
    return ( 
        <div className="page-align">
            <section className="items-part">    
                {/* call and pass data into bandcard component  */}
                <section className="cart-align">
                    {
                        bands.map((band, index) => <BandCard key={index} handleCardCalculation={(bNo, amount, bList)=>handleCardCalculation(bNo, amount, bList)} bandNo = {bandNo} band={band} />)
                    }
                </section>
            </section>
            {/* call and pass data into cart component  */}
            <section className="cart-part">
                <Cart bandNo = {bandNo} totalAmount = {totalAmount} selectedBand = {selectedBand} />
            </section>
        </div>
     );
}
 
export default Dashboard;
