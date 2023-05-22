import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FindFilter } from "../components/FindFilter.js";
import {PersonalCardEdit} from '../components/PersonalCardEdit';
import Icon from '../icons/partIcon.js';
import {Registration} from '../components/Registration.js';
import {EditCard} from '../components/EditCard.js';
import '../styles/OperatorPage.css';
import '../styles/Header.css';
import '../styles/Table.css';
import '../styles/PersonalCardEdit.css';

export function OperatorPage(){
  const [infoCard,setInfoCard] = useState([]) // для персональной карточки
  const [col_1, setcol_1] = useState(false)
  const [col_2, setcol_2] = useState(false)
  const [col_3, setcol_3] = useState(false)
  const [col_4, setcol_4] = useState(false)
  const [col_5, setcol_5] = useState(false)
  const [col_6, setcol_6] = useState(false)
  const [tablehidePOO, setTableHidePOO] = useState(true)
  const [tablefindfilter, setTableFindFilter] = useState(true)
  const [tablehidePause, setTableHidePause] = useState(true)
  const [tablehideNO, setTableHideNO] = useState(true)

  const[personcardEdit, setPersoncardEdit] = useState(false)

  //нажатие на меню
  function col (cols){
    if (cols == 'col1') {
          setcol_1(!col_1); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(false);
          setTableHidePOO(!tablehidePOO);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          fetchPOO();
    }
   else if (cols == 'col2'){
          setcol_1(false); 
          setcol_2(!col_2); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(false);
          setTableHidePOO(true);
          setTableFindFilter(!tablefindfilter);
          setTableHidePause(true);
          setTableHideNO(true);
          fetchPOO(); // подгрузка таблицы РОО
        }
    else if (cols == 'col3'){
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(!col_3); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(!tablehidePause);
          setTableHideNO(true);
          fetchPause();
        
        }
    else if ( cols == 'col4') {
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(!col_4);
          setcol_5(false);
          setcol_6(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(!tablehideNO);
          fetchNO();
        }
    else if ( cols == 'col5') {
      setcol_1(false); 
      setcol_2(false); 
      setcol_3(false); 
      setcol_4(false);
      setcol_5(!col_5);
      setcol_6(false);
      setTableHidePOO(true);
      setTableFindFilter(true);
      setTableHidePause(true);
      setTableHideNO(true);
    }
    else if ( cols == 'col6') {
      setcol_1(false); 
      setcol_2(false); 
      setcol_3(false); 
      setcol_4(false);
      setcol_5(false);
      setcol_6(!col_6);
      setTableHidePOO(true);
      setTableFindFilter(true);
      setTableHidePause(true);
      setTableHideNO(true);
    }
   }

   const navigateTo = useNavigate();
   function Exit(){
     if (window.confirm('Вы точно хотите выйти?'))
       navigateTo('/');
   };
 
//fetch
   const [b,setb] = useState([])

   const fetchPOO = async ()=>{
     const response = await fetch("http://localhost:5140/UserPage/tablePOO/", {
       method: "get",
     });
     let q = await response.json();
     await setb(q);
   };

   const fetchNO = async ()=>{
     const response = await fetch("http://localhost:5140/UserPage/tableNO/", {
       method: "get",
     });
     let q = await response.json();
     await setb(q);
   };

   const fetchPause = async ()=>{
     const response = await fetch("http://localhost:5140/UserPage/tablePause/", {
       method: "get",
     });
     let q = await response.json();
     await setb(q);
   };
//fetch

//вывод таблиц
   let tablePOO = b.map(function(item,index) {
     return <tr key={item.id}>
       <td> {index+1}</td>
        <td className="table__surname"><p  onClick={()=>{ setPersoncardEdit(!personcardEdit); setInfoCard([item]) }} className="table_span__surname">{item.surname}</p></td>
        <td>{item.name}</td>
        <td>{item.parent}</td>
        <td>{item.numBilet}</td>
        <td>{item.dateStart}</td>
        <td>{item.place}</td>
     </tr>
  });
 
  let tableNO = b.map(function(item,index) {
   return <tr key={item.id}>
     <td> {index+1}</td>
      <td className="table__surname"><p onClick={()=>{ setPersoncardEdit(!personcardEdit)}} className="table_span__surname">{item.surname}</p></td>
      <td>{item.name}</td>
      <td>{item.parent}</td>
      <td>{item.dateFinish}</td>
   </tr>
 });
 
 let tablePause = b.map(function(item,index) {
   return <tr key={item.id}>
     <td> {index+1}</td>
      <td className="table__surname"><p onClick={()=>{ setPersoncardEdit(!personcardEdit)}} className="table_span__surname">{item.surname}</p></td>
      <td>{item.name}</td>
        <td>{item.parent}</td>
        <td>{item.numBilet}</td>
        <td>{item.dateStart}</td>
        <td>{item.datePause}</td>
   </tr>
 });
//вывод таблиц

  return (
    <div className="oper_page">
    <header className="header_UserPage">

    <div className="ICON"> <Icon height="20px" width="20px"/></div>

      <div className="Header__text">
       <p className="Header__text_2">Белорусская партия «Белая Русь»</p> 
      </div>

      <div className="Header__nav">
        <p className="Header__nameUser">Карпатов Николай Александрович</p> 
        <p className="Header__ruleUser" >Оператор</p>
        <p className="Header__exit" onClick={()=> Exit()}>Выход  </p>
      </div>
  
    </header>

    <main>
      <div className="spisok">
      <ul className="main__ul">
        <li className="main__li_1"><span className={`main__span ${col_1 ? 'act' : ''}`} 
        onClick={()=>{col('col1')}}>Список членов партии "Белая Русь"</span></li>
        <li className="main__li_2"><span className={`main__span ${col_2 ? 'act' : ''}`} 
        onClick={()=>{col('col2')}}>Поиск и фильтрация</span></li>
        <li className="main__li_3"><span className={`main__span ${col_3 ? 'act' : ''}`} 
        onClick={()=>{col('col3')}}>Список приостановленных членов</span></li>
        <li className="main__li_4"><span className={`main__span ${col_4 ? 'act' : ''}`} 
        onClick={()=>{col('col4')}}>Список снятых с учета</span></li>
        <li className="main__li_5"><span className={`main__span ${col_5 ? 'act' : ''}`} 
        onClick={()=>{col('col5')}}>Зарегистрировать члена партии</span></li>
        <li className="main__li_6"><span className={`main__span__edit ${col_6 ? '' : 'hide'}`} 
        onClick={()=>{col('col6')}}>Режим редактирования <br/>учетной карточки</span></li>
      </ul>
      </div>



    {personcardEdit ? <PersonalCardEdit setPersoncardEdit ={setPersoncardEdit} col={col} infoCard={infoCard} setinfoCard={setInfoCard}/> : null}

    <div className="tables">

    <div className={`Otchet ${(tablehidePOO && tablehidePause && tablehideNO) ? 'hide' : ''}`}>
        <p>Отчет в Word</p>
        <p>Отчет в Excel</p>
      </div>

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
     { (col_2) ? <FindFilter b={b}/> : null}
     { (col_5) ? <Registration/> : null}
     { (col_6) ? <EditCard infoCard={infoCard}/> : null}
     </div>



    </main>
    
  </div>
  )
}