//import Header from "./Header"
//import Footer from "./Footer";
//import Food from "./Food";

//import Card from "./Card";

//import Button from "./Button";

import Student from "./Student";


function App() {
  return(
    <>
    <Student name="Dominik" age = {21} isStudent={true}/>
    <Student name="Patrick" age = {22} isStudent={true}/>
    <Student name="Dawid" age = {22} isStudent={false}/>
    <Student name="Daniel" age = {24} isStudent={false}/>
    <Student/>
    </>
  );
}


export default App
