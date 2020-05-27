import React from 'react';
//import './FRecognition.css'

const FaceCount = ({box}) => {
	
            		let val=box.length;
            		console.log("inside facecount"+val) 

            	
            	
return(
	     
       val != 0 ?
        <div className="center mt2">
             <p className="f2">{`Number of faces identified is ${val}`}</p>

        </div>
        :
        <div className="center mt2">
             <p className="f2">{`No faces identified..`}</p>

        </div>


    );




}
export default FaceCount;