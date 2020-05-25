import React from 'react';
import './form.css'




const ImageLinkForm=({onInputChange, onSubmit, image})=>{

	return(

		<div>
		<p className='f2 center'>
			{'This tool will help you detect faces in any picture!!'}
		</p>

		<div className='center' >
			<div className='form pa4 br3 w-60 shadow-5 center'>
				<input type='text' className='f3 pa2 w-90 center' onChange= { onInputChange } />
				<button className='but   w-30 center grow f4 link ph3 pv2 dib white bg-light-purple' 
				onClick={onSubmit}>
				Detect</button>
			</div>
		</div>	


		</div>



		);

}








export default ImageLinkForm;