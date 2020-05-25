import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import photo from './photo.png';


const Logo = () => {
	return( 
			<div className='ma5 mt0 display'>
			 
			<Tilt className="Tilt br3 shadow-3" options={{ max : 45}} style={{ height: 170, width: 170 }} >
			 <div className="Tilt-inner pa3"> <img style={{paddingTop:'8px'}} alt='logo' src={photo}/></div>
			</Tilt>	</div>
		);
}
export default Logo; 