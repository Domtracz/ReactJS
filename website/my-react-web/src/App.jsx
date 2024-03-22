//import Header from "./Header"
//import Footer from "./Footer";
//import Food from "./Food";

//import Card from "./Card";

//import Button from "./Button";

//import Student from "./Student";

//import UserGreeting from "./UserGreeting";

import List from "./List";

function App() {
  const fruits =[{id: 1, name:"apple", calories: 95},
              {id: 2, name:"orange", calories: 45}, 
              {id: 3, name:"banana", calories: 105}, 
              {id: 4, name:"coconut", calories: 159},
              {id: 5, name:"pineapple", calories: 37}];

  const vegetables =[{id: 1, name:"potatoes", calories: 110},
              {id: 2, name:"celery", calories: 15}, 
              {id: 3, name:"carrots", calories: 25}, 
              {id: 4, name:"corn", calories: 6},
              {id: 5, name:"broccoli", calories: 50}];
  return(
    <>
      {fruits.length>0 && <List items={fruits} category = "Fruits"/> }
      {vegetables.length > 0 && <List items={vegetables} category = "Vegetables"/> }
      <List/>
    </>
  );
}


export default App
