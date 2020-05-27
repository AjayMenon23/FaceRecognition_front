import React from 'react';
import './FRecognition.css'

const FRecognition = ({imageUrl, box, showImage}) => {

            		let val=box.length;
            		console.log(val) 


return(               	
            	
        <div className="center ma">
            <div className='image-container absolute mt2'>
                { showImage === true && (
                    <img id='inputImage' alt={"I'm waiting for Url please Insert it!"} src={imageUrl} width="400px" height="auto" />
                )
                }
                { showImage === false && (
                    <p className="f3">{'Give it a try!'}</p>
                )
                }
                { 
                	box.map((item, index) => (
                    <div className='bounding-box' 
   						style={{
   							top: item.topRow, 
   							right: item.rightCol, 
   							bottom: item.bottomRow, 
   							left: item.leftCol
   						}} 
   						key={index}>
   					</div>
                	))
            	}


            </div>
        </div>
    );




}
export default FRecognition;