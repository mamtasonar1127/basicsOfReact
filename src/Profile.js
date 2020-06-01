import React from 'react'
// Class component 
// class Profile extends React.Component{

//     render()
//     {

//         return (
//             <div>
//                 <h1>Profile Component</h1>
//             </div>

//         )
         
//     }
// }

// export default Profile;

//Fuction Component

// export default function Profile(prop){

//     //arrow function
//     const red = () =>{
//         alert("red function called")
//     }
//     return <div>
//       <h1 onClick={red}>{prop.text}</h1>  
//     </div>
// }

//Props with functional components. 

// export default function Profile(prop){
//     return(
//         <div>
//             <h1>{prop.text.name}</h1>
//         </div>
//     )
// }

//Props with class components.
// export default class Profile extends React.Component{
//     render()
//     {
//         return(
//             <div>
//                 <h1>{this.props.text.name}</h1>
//             </div>
//         )
//     }
// }   

//State Example

export default class Profile  extends React.Component{
    
    constructor()
    {
        super()
        this.state={
            name:'mamta',
            email:'mamta@gmail.com',
            count:0
        }
    }
    
    updateState(){
        this.setState({
           name: 'Sonar' ,
           count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
            <h1>Count {this.state.count}</h1>
            <h1>Email {this.state.email}</h1>
            <button onClick={()=>{this.updateState()}}>Update name</button>
            </div>
        )
    }
}
