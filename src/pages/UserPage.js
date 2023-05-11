import React, { useState } from "react";
import '../styles/UserPage.css';
import '../styles/Header.css';
import '../styles/Table.css';
import { useNavigate } from 'react-router-dom';
import {fio} from '../components/FIO.js';
import { FindFilter } from "../components/Filter.js";

export default function UserPage(){
  const [col_1, setcol_1] = useState(false)
  const [col_2, setcol_2] = useState(false)
  const [col_3, setcol_3] = useState(false)
  const [col_4, setcol_4] = useState(false)
  const [tablehidePOO, setTableHidePOO] = useState(true)
  const [tablefindfilter, setTableFindFilter] = useState(true)
  const [tablehidePause, setTableHidePause] = useState(true)
  const [tablehideNO, setTableHideNO] = useState(true)

 function col (cols){
  if (cols == 'col1') {
        setcol_1(!col_1); 
        setcol_2(false); 
        setcol_3(false); 
        setcol_4(false);
        setTableHidePOO(!tablehidePOO);
        setTableFindFilter(true);
        setTableHidePause(true);
        setTableHideNO(true);
  }
 else if (cols == 'col2'){
        setcol_1(false); 
        setcol_2(!col_2); 
        setcol_3(false); 
        setcol_4(false);
        setTableHidePOO(true);
        setTableFindFilter(!tablefindfilter);
        setTableHidePause(true);
        setTableHideNO(true);
      }
  else if (cols == 'col3'){
        setcol_1(false); 
        setcol_2(false); 
        setcol_3(!col_3); 
        setcol_4(false);
        setTableHidePOO(true);
        setTableFindFilter(true);
        setTableHidePause(!tablehidePause);
        setTableHideNO(true);
      
      }
 else if ( cols == 'col4') {
        setcol_1(false); 
        setcol_2(false); 
        setcol_3(false); 
        setcol_4(!col_4);
        setTableHidePOO(true);
        setTableFindFilter(true);
        setTableHidePause(true);
        setTableHideNO(!tablehideNO);
      }
 }

  const navigateTo = useNavigate();
  function Exit(){
    if (window.confirm('Вы точно хотите выйти?'))
      navigateTo('/');
  };

  let tablePOO = fio.map(function(item,index) {
    return <tr key={item.id}>
      <td> {index+1}</td>
       <td className="table__surname"><span className="table_span__surname">{item.surname}</span></td>
       <td>{item.name}</td>
       <td>{item.parent}</td>
       <td>{item.numBilet}</td>
       <td>{item.dateStart}</td>
       <td>{item.place}</td>
    </tr>
 });

 let tableNO = fio.map(function(item,index) {
  return <tr key={item.id}>
    <td> {index+1}</td>
     <td className="table__surname"><span className="table_span__surname">{item.surname}</span></td>
     <td>{item.name}</td>
     <td>{item.parent}</td>
     <td>{item.dateFinish}</td>
  </tr>
});

let tablePause = fio.map(function(item,index) {
  return <tr key={item.id}>
    <td> {index+1}</td>
     <td className="table__surname"><span className="table_span__surname">{item.surname}</span></td>
     <td>{item.name}</td>
       <td>{item.parent}</td>
       <td>{item.numBilet}</td>
       <td>{item.dateStart}</td>
       <td>{item.datePause}</td>
  </tr>
});

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
            <li className="main__li_1"><span className={`main__span ${col_1 ? 'act' : ''}`} 
            onClick={()=>{col('col1')}}>Список членов РОО "Белая Русь"</span></li>
            <li className="main__li_2"><span className={`main__span ${col_2 ? 'act' : ''}`} 
            onClick={()=>{col('col2')}}>Поиск и фильтрация</span></li>
            <li className="main__li_2"><span className={`main__span ${col_3 ? 'act' : ''}`} 
            onClick={()=>{col('col3')}}>Список приостанвленных членов</span></li>
            <li className="main__li_3"><span className={`main__span ${col_4 ? 'act' : ''}`} 
            onClick={()=>{col('col4')}}>Список снятых с учета</span></li>
          </ul>

          <table className={`tablePOO ${tablehidePOO ? 'hide' : ''}`}> 
      <thead>
         <tr>
            <td>Номер</td>
            <td>Фамилия</td>
            <td>Имя</td>
            <td>Отчество</td>
            <td>Номер билета</td>
            <td>Дата вступления</td>
            <td>Место постановки на учет</td>
         </tr>
      </thead>
      <tbody>
         {tablePOO}
      </tbody>
   </table>

   <table className={`tablePOO ${tablehidePause ? 'hide' : ''}`}> 
      <thead>
         <tr>
            <td>Номер</td>
            <td>Фамилия</td>
            <td>Имя</td>
            <td>Отчество</td>
            <td>Номер билета</td>
            <td>Дата вступления</td>
            <td>Дата приостановления</td>
         </tr>
      </thead>
      <tbody>
         {tablePause}
      </tbody>
   </table>


   <table className={`tablePOO ${tablehideNO ? 'hide' : ''}`}> 
      <thead>
         <tr>
            <td>Номер</td>
            <td>Фамилия</td>
            <td>Имя</td>
            <td>Отчество</td>
            <td>Дата снятия с учета</td>
         </tr>
      </thead>
      <tbody>
         {tableNO}
      </tbody>
   </table>
        {/*Сформировать отчет в Word*/} 
        {/*Сформировать отчет в Excel*/} 

  { (col_2) ? <FindFilter/> : null}

        </main>


        <footer></footer>
        
      </div>
  )

}