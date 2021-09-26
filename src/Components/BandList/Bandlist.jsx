// import pakages
import React from 'react';

const Bandlist = (props) => {
    return ( 
        <div className="flex items-center mt-3 bg-gray-300 rounded-full w-4/5 mx-auto">
        <img src={props.bandimg} alt="" className="w-10 h-10 rounded-full"/>
        <div className="ml-2 text-xl font-semibold ">{props.bandname}</div>
        </div>
     );
}
 
export default Bandlist;