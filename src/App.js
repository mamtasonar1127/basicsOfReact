import React from 'react';

import './App.css';
import Profile from  './Profile';
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     this.state={
//       show:true
//     }
//   }
//   render(){
//     return(
//       <div>
//       {
//         this.state.show?
//         <h1>Hide and Show</h1>
//         :null
//       }
//         <button onClick= {() => {this.setState({show:!this.state.show})}}> Toggle me</button>
//       </div>
//     );
//   }
// }

function App(){
  
    return(
      <div className="App">

      <Profile/>
      </div>
    );
  
}

export default App;
