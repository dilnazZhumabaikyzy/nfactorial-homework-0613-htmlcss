
import { v4 as generateKey } from "uuid";
import logo from "./assets/logo.png";
import { format } from 'date-fns'

import './App.css';


const sourceList = [
  {key:generateKey(),source:'https://source.unsplash.com/gYl-UtwNg_I/1500x1500',title:"HEY"},
  {key:generateKey(),source:'https://source.unsplash.com/rFKUFzjPYiQ/1500x1500', title:"LET'S"},
  {key:generateKey(),source:'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d', title:"GIVE"},
  {key:generateKey(),source:'https://source.unsplash.com/ITjiVXcwVng/1500x1500', title:"ALL"},
  {key:generateKey(),source:'https://source.unsplash.com/3MNzGlQM7qs/1500x1500', title:"YOU CAN"}
]







 const time = format(new Date(), 'dd.MM.yyyy HH:mm') ;


console.log(format(new Date(), 'dd.MM.yyyy HH:mm'));

const imageDivs = sourceList.map((link)=>(
  <div key = {link.key} className = 'imageBlock'>
  <h1>{link.title}</h1>
  </div>
));

function App() {
  return (
    <>
    <div className = "gold">
      <div className = "header">
        <div className = "logoInput">
        <img src ={logo}></img>
        <input type="text" id="uname" name="name"/>
        </div>
        <div className = "timeDate">{time}</div>
        </div>
        
    <div className = "mainWrapper">
       {imageDivs}
    </div> 
    </div>
      
    </>
  );
}

export default App;
