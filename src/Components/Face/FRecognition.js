import React from 'react';
import './FRecognition.css'

const FRecognition =({imageUrl, box})=>{
	return(

			<div className="center">
				 <div className='absolute mt3'>
				 <img id='inputImage' src={imageUrl} alt="" width='500px' height='auto'/>
				 <div className='boundingBox' style={{left: box.leftCol, top:box.topRow, right:box.rightCol, bottom:box.bottomRow}}>
				 </div>
				 </div> 
			</div>
		);





	}
export default FRecognition;