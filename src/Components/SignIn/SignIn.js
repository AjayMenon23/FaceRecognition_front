import React from 'react';
import './SignIn.css'
import Tilt from 'react-tilt'

class SignIn extends React.Component{

	constructor(props){
		super();
		this.state = {
			signInEmail: '',
			signInPassword:''
		}
	}

	onEmailChange=(event) =>{
		this.setState({signInEmail: event.target.value});


	}

	onPasswordChange=(event) =>{
		this.setState({signInPassword: event.target.value});

	}

	onSubmitSignIn = () =>{
		fetch('https://fathomless-bayou-90603.herokuapp.com/signin',{
			method: 'post',
			headers: {
			'Accept': 'application/json',
			'Content-Type' : 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password:this.state.signInPassword
			}),

		})
		.then((response) => response.json())
		.then(user =>{
		
			//console.log(data)
			if(user.id){
				this.props.loadUser(user)
		 		this.props.onRouteChange('home');	
			}
			
		});

		

	}
	

	onEmailChange=(event) =>{
		this.setState({signInEmail: event.target.value});

	}

	render(){
		const {onRouteChange} = this.props;
		return(
				<article className="  br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-10 center">
				<Tilt className="Tilt br3 shadow-3">
				<main className="pa4 sign black-80">

				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6 " htmlFor="email-address">Email</label>
				        <input 
				        onChange={this.onEmailChange}
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        onChange={this.onPasswordChange}
				        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
				      </div>
				     
				    </fieldset>
				    <div className="center">
				      <input onClick={this.onSubmitSignIn} 
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer 
				      f6 dib" type
				      ="submit" value="Sign in"/>
				      </div>
				  {
				  /* </div>		    <div className="lh-copy center mt3">
				    //   <input onClick={()=>onRouteChange('register')} 
				    //   className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer 
				    //   f6 dib" type="submit" value="Register"/>
				  
				    // </div>}*/
				}
				</main>
				</Tilt>
				</article>
			
		);






	}


	

	}
export default SignIn;