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
      {ExpTitle.map((ele,index)=>{
      return(
        <li key={index}>
        <div class="divflex">
          <span>{ExpTitle.title}</span>
          <span>{ExpTitle.amount}</span>
          <span>{ExpTitle.date}</span>
          <span>Remove</span>
        </div>
        </li>
      )
      })}
      <h1>2023</h1>
    </div>
  );
}
