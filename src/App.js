import logo from './logo.svg';
import './App.css';
import React from 'react';
import reactDom from 'react-dom';

class App extends React.Component {

  constructor(props){
    super(props);
    console.log(props.module.getBuildInformation());
    this.state = {
      image : undefined,
    }
  }

  handleChange = event => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
    let imgElement = document.getElementById('imageSrc')
    let mat = this.props.module.imread(imgElement);
    console.log(mat);
    this.props.module.imshow('canvasOutput', mat);
    
  }

  render(){
    return (
        <div className="App">
          <img id="imageSrc" alt="No Image"  src={this.state.file}/>
          <div className="caption">
            imageSrc
            <input type="file" id="fileInput" name="file" onChange={this.handleChange}/>
          </div>
          <div className="something">
            <canvas id="canvasOutput" ></canvas>
          </div>
        </div>
    );
  }
}

// function App(props) {
//   console.log(props.module.getBuildInformation());
//   return (
//       <div className="App">
//         <img id="imageSrc" alt="No Image" />
//         <div class="caption">
//           imageSrc
//           <input type="file" id="fileInput" name="file" />
//         </div>
//       </div>
    
//   );
// }


export default App;
