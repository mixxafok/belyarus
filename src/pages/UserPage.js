import React from "react";
import '../styles/UserPage.css';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

export default function UserPage(){

  const navigateTo = useNavigate();
  function Exit(){
    if (window.confirm('Вы точно хотите выйти?'))
      navigateTo('/');
      
  }
  return (
      <div className="user_page">
        <header className="Header">
          <div className="Header__nav">
            <p className="Header__nameUser">Темошенко Кирилл Викторович</p> 
            <p className="Header__ruleUser">Информационный пользователь</p>
          </div>
         
          <div className="Header__text">
           <p className="Header__text_2">Белорусская партия «Белая Русь»</p> 
          </div>

          <div className="Header__exit" onClick={()=> Exit()}>
           Выход 
          </div>
        </header>

        <main>
          <ul className="main__ul">
            <li className="main__li_1"><span>Список членов РОО "Белая Русь"</span></li>
            <li className="main__li_2"><span>Поиск и фильтрация</span></li>
            <li className="main__li_3"><span>Список снятых с учета</span></li>
          </ul>
        
        {/*Сформировать отчет в Word*/} 
        {/*Сформировать отчет в Excel*/} 
        </main>

        <footer></footer>
        
      </div>
  )

}