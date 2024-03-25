// click event = An interaction when a user clicks on a specific element
//               We can respond to clickss by passing a callback to the Onclick handler.
function ProfilePicture(){
  
  const imageUrl ='./src/assets/Domprofil.jpg';

  const handleClick = (e) => e.target.style.display ="none";

  return(<img onClick = {(e) => handleClick(e)} src ={imageUrl}></img>);
}
export default ProfilePicture