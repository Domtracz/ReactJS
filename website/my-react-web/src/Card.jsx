import profilePic from './assets/Domprofil.jpg'


function Card(){
  return(
    <div className = "card">
      <img className ="card-img" src ={profilePic} alt ="Profile Picture"></img>
      <h2 className = "card-title">Dominik</h2>
      <p className = "card-text">Student at AGH and play video games</p>
    </div>
  );
} 

export default Card