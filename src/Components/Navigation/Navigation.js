import React from 'react';
import './Nav.css'

const Navigation = ({onRouteChange, isSignedIn}) => {
	if(isSignedIn){


		return(
		<nav onClick={ () => onRouteChange('signout')} style={{display: 'flex' , justifyContent: 'flex-end'}}>
		<p className='theme f3 link dim black underline pa3 pointer'>SignOut</p>
		</nav>
		);



	}


	else{

		return(
		<nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
		<p className=' theme f3 link dim black underline pa3 pointer' onClick={()=> onRouteChange('signin')}>SignIn</p>
		<p className=' theme  f3 link dim black underline pa3 pointer' onClick={()=> onRouteChange('register')}>Register</p>
		</nav>

 
		);

	}
}
export default Navigation;