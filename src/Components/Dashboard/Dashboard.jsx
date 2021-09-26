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

    const handleCardCalculation = (band_no, amount, bList) =>{
        setBandNo(band_no);
        setTotalAmount(totalAmount+amount);
        // setBandName(...bandName, bName)
        setSelectedBand(prevArray => [...prevArray, bList])
        // console.log(bandNo)
        // console.log(bandName)
    }

    useEffect(()=>{
        fetch("./band_data.json")
        .then(data => data.json())
        .then(res => setBands(res))
    }, [])
    return ( 
        <div className="page-align">
            <section className="items-part">    
                {/* <header>Hello chandan</header> */}
                <section className="cart-align">
                    {
                        bands.map((band, index) => <BandCard key={index} handleCardCalculation={(bNo, amount, bList)=>handleCardCalculation(bNo, amount, bList)} bandNo = {bandNo} band={band} />)
                    }
                </section>
            </section>
            <section className="cart-part">
                <Cart bandNo = {bandNo} totalAmount = {totalAmount} selectedBand = {selectedBand} />
            </section>
        </div>
     );
}
 
export default Dashboard;
