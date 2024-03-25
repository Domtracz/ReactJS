//external,module(seperate folder and module component),inline(below best for little styling)


function Button(){
  
  //inline
  const styles =
  { 
      backgroundColor: "hsl(200, 100%, 50%)",
      color: "white",
      padding: "10px 20px",
      borderRadius: "2px",
      border: "none",
      cursor: "pointer",

  }
  //let count = 0;
  const handleClick = (e) => e.target.textContent = "Ouch!";
/*  
  {
    if(count<3){
      count++;
      console.log(`${name} you clicked me ${count} time/s`);
    }
    else{
      console.log(`${name} stop clicking me`);
    }
  };
  
  const handleClick2 = (name) => console.log(`${name} stop clicking me`)
*/
  return(<button style={styles} onDoubleClick={(e) => handleClick(e)}>Click me!</button>);
}
export default Button