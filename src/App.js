import React,{Component} from 'react';
// import './App.css';
import Navigation from './Components/Navigation/Navigation';
import './App.css';
import 'tachyons';
import Clarifai from 'clarifai';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLink/ImageLinkForm';
import Particles from 'react-particles-js';
import FRecognition from './Components/Face/FRecognition';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';



const initialState={
     input : '',
      imageUrl : '',
      box:{}, 
      route: 'signin',
      isSignedIn: false,
      user:{
            id:'',
            name: '',
            email :'',
            joined: '' 
      }

}



const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component{

  constructor(){
    super();
    this.state = {
      input : '',
      imageUrl : '',
      box:{}, 
      route: 'signin',
      isSignedIn: false,
      user:{
            id:'',
            name: '',
            email :'',
            joined: '' 
      }
    }
  }

  loadUser = (data) =>{
    this.setState({
      user:{
            id:   data.id,
            name: data.name,
            email :data.email,
            joined: data.joined 


    }})
  }

  // componentDidMount(){
  //   fetch('http://localhost:3000/').then(response=> response.json().then(console.log))

  // }


  onInputChange =(event) =>{
    //nsole.log(event.target.value);
    this.setState({input : event.target.value})
  }


  calculateFaceLocation =(data)=>{
    const testing= data.outputs;
    console.log(testing);
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiFace) ;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(height +"and "+width);
    return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
    } 

  }


  displayFaceBox = (box)=>{
    //console.log(box)
    this.setState({box : box });
  }

  //"a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg"

  onSubmit = ()=> {
    this.setState({imageUrl: this.state.input});
      fetch('https://fathomless-bayou-90603.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://fathomless-bayou-90603.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            // .then(response => response.json())
            // .then(count => {
            //   this.setState(Object.assign(this.state.user, { entries: count}))
            // })
            // .catch(console.log)

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

 // console.log('{this.imageUrl.state}');
    // app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(response =>
    //  
    //  .catch(err => console.log(err));
      // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
     

  


  onRouteChange =(route)=>{

    if(route === 'signout'){
      this.setState(initialState);
    }

    else if( route === 'home'){
      this.setState({isSignedIn : true});

    }

    this.setState({route : route});

  }

  render() {
    return(

             <div className="App">
             <Particles className='particles'
              params={particlesOptions}
              />

               <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
              {


                this.state.route === 'home'?
                 <div>
                      <Logo/>
                      <ImageLinkForm 
                        onInputChange={this.onInputChange} 
                        onSubmit={ this.onSubmit}
                       /> 
                            
                     <FRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
                </div>

                :
                (   this.state.route === 'signin'?
                    <SignIn loadUser={ this.loadUser}  onRouteChange={this.onRouteChange}/>
                   :
                    <Register loadUser={ this.loadUser} onRouteChange={this.onRouteChange}/>
                  )   
               
      
              }

              </div>
     

      );
  }
}




export default App;
