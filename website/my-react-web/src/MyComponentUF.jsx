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

  /*const[count,setCount] = useState(0);
  
  function increment(){
    setCount(c=>c+1);
  }

  function decrement(){
    setCount(c=>c-1);
  }

  function reset(){
    setCount(0);
  }
  */
const [car, setCar] =useState({year: 2014, 
                              make: "Volkswagon", 
                              model: "Passat",});

function handleYearChange(event){
setCar(c =>({...c, year:event.target.value}));
}

function handleMakeChange(event){
  setCar(c =>({...c, make:event.target.value}));
}

function handleModelChange(event){
  setCar(c =>({...c, model:event.target.value}));
}
return(<div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}/> <br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/> <br/>
        <input type="text" value={car.model} on onChange={handleModelChange}/> <br/>
       </div>)
}

export default MyComponentUF