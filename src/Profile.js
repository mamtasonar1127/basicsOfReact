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



export default function Profile(prop){

    //arrow function
    const red = () =>{
        alert("red function called")
    }
    return <div>
      <h1 onClick={red}>{prop.text}</h1>  
    </div>
}