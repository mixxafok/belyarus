import React, {useState} from "react";
import '../styles/PersonalCard.css';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

export function PersonalCard( ){
  
  const navigateTo = useNavigate();
  function Exit(){
    if (window.confirm('Вы точно хотите выйти?'))
      navigateTo('/UserPage');
  };

  return (
    <div className="personalCard">
        <header className="Header">
          <div className="Header__nav">
            <p className="Header__nameUser">Темошенко Кирилл Викторович</p> 
            <p className="Header__ruleUser" >Информационный пользователь</p>
          </div>
         
          <div className="Header__text">
           <p className="Header__text_2">Белорусская партия «Белая Русь»</p> 
          </div>

          <div className="Header__exit" onClick={()=> Exit()}>
           Выход 
          </div>
        </header>

        <main>

        </main>
    </div>
  )
}