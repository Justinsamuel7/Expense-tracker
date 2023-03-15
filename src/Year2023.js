import React,{useState} from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';


export default function Year2023() {

  let [ExpTitle, setExpTitle] = useState([
    {
      title : "boots",
      amount : "5000",
      date : "3456"
    },
  ])

  return (
    
    <div>
      <br/>
      <h3>2023</h3>
      <br/>
      <div>
      {ExpTitle.map((ele,index)=>{
      return(
        <div class="divflex" key={index}>
          <span>{ele.title}</span>
          <span>{ele.amount}</span>
          <span>{ele.date}</span>
          <span>Remove</span>
        </div>
      )
      })}

      <br/>
      </div>

      <div>
      <input type="text" placeholder="Title" onChange={}/>
      <input type="Number"/>
      <input type="date"/>
      <button >Add</button>

      </div>

    </div>
  );
}
