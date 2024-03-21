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

  return(<button style={styles}>Click me!</button>);
}
export default Button