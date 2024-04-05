/*
useEffect() = React Hook that tells React DOSOMW CODE WHEN (pick one):
              This component re-renders
              this component mounts
              The state of a value

useEffect(function,[dependancies])
1. useEffect(() => {})          Runs after every re-render
2. useEffect(() => {}, [])      Runs only on mount
3. useEffect(() => {}, [value]) Runs on mount +when value changes

Uses
#1 Event Listeners
#2 DOM manipulation
#3 Subscribtions(real-time updates)
#4 Fetching Data From an API
#5 Clean up When a component unmounts
*/

import React,{useState, useEffect} from "react";


function UseEffectMethod(){
/*
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(()=> {
    document.title = `Count: ${count} ${color}`;
  },[count,color])

  function addCount(){
    setCount(c=>c+1);
  }

  function subtractCount(){
    setCount(c=>c-1);
  }

  function changeColor(){
    setColor(c => c === "green" ? "red":"green");
  }

  return(<>
  <p style={{color: color}}>Count: {count}</p>
  <button onClick={addCount}>Add</button>
  <button onClick={subtractCount}>Subtract</button><br/>
  <button onClick={changeColor}>Change Color</button>
  </>)
  */

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

  }

  useEffect(() =>{
    window.addEventListener("resize",handleResize);
    console.log("EVENT LISTENER ADDED");

    return() => {
      window.removeEventListener("resize",handleResize);
      console.log("event listener removed");
    }
},[]);

useEffect(()=>{document.title = `Size: ${width} x ${height}`;
},[width,height]);

 return(<>
 <p>Window Width: {width}px</p>
 <p>Window Height: {height}px</p>
 </>);
}

export default UseEffectMethod