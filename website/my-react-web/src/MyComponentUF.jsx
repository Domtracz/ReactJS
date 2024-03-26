/*
Updater function = a function passed as an argument to setState() usually
                  ex. setYear(y => y + 1)
                  allow for safe updates based on previous state
                  Used with multiple state updates ad asychronus functions
                  good practice to use update functions
                  c = previous  state
*/

import React,{useState} from "react"

function MyComponentUF(){

  const[count,setCount] = useState(0);
  
  function increment(){
    setCount(c=>c+1);
  }

  function decrement(){
    setCount(c=>c-1);
  }

  function reset(){
    setCount(0);
  }

return(<></>)
}

export default MyComponentUF