import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FindFilterEdit } from "../components/FindFilterEdit.js";
import {PersonalCardEdit} from '../components/PersonalCardEdit';
import Icon from '../icons/partIcon.js';
import question from '../icons/question.png';
import {Registration} from '../components/Registration.js';
import {EditCard} from '../components/EditCard.js';
import {EditCardBranch} from '../components/EditCardBranch.js';
import { Branchs } from "../components/Branchs.js";
import '../styles/AdminNodePage.css';
import '../styles/Header.css';
import '../styles/Table.css';
import '../styles/PersonalCardEdit.css';


export function AdminNodePage(){
  const [infoCard,setInfoCard] = useState([]) // для персональной карточки
  const [col_1, setcol_1] = useState(false)
  const [col_2, setcol_2] = useState(false)
  const [col_3, setcol_3] = useState(false)
  const [col_4, setcol_4] = useState(false)
  const [col_5, setcol_5] = useState(false)
  const [col_6, setcol_6] = useState(false)
  const [col_7, setcol_7] = useState(false)
  const [col_8, setcol_8] = useState(false)
  const [tablehidePOO, setTableHidePOO] = useState(true)
  const [tablefindfilter, setTableFindFilter] = useState(true)
  const [tablehidePause, setTableHidePause] = useState(true)
  const [tablehideNO, setTableHideNO] = useState(true)
  const [tablehideBranch, setTableHideBranch] = useState(true)

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
          setcol_7(false);
          setcol_8(false);
          setTableHidePOO(!tablehidePOO);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          fetchPOO();
    }
   else if (cols == 'col2'){
          setcol_1(false); 
          setcol_2(!col_2); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(false);
          setcol_7(false);
          setcol_8(false);
          setTableHidePOO(true);
          setTableFindFilter(!tablefindfilter);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          fetchPOO();
          fetchOptions();
          // подгрузка таблицы РОО
        }
    else if (cols == 'col3'){
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(!col_3); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(false);
          setcol_7(false);
          setcol_8(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(!tablehidePause);
          setTableHideNO(true);
          setTableHideBranch(true);
          fetchPause();
        
        }
    else if ( cols == 'col4') {
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(!col_4);
          setcol_5(false);
          setcol_6(false);
          setcol_7(false);
          setcol_8(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(!tablehideNO);
          setTableHideBranch(true);
          fetchNO();
        }
    else if ( cols == 'col5') {
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(!col_5);
          setcol_6(false);
          setcol_7(false);
          setcol_8(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          fetchOptions();
    }
    else if ( cols == 'col7') {
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(false);
          setcol_7(!col_7);
          setcol_8(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(!tablehideBranch);
          fetchBranch();
}
    else if ( cols == 'col8') {
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(false);
          setcol_7(false);
          setcol_8(!col_8);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          fetchBranch();
}
    else if ( cols == 'col6') {
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(!col_6);
          setcol_7(false);
          setcol_8(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          fetchOptions();

    }
   }

   const navigateTo = useNavigate();
   function Exit(){
     if (window.confirm('Вы точно хотите выйти?'))
       navigateTo('/');
   };
 
//fetch
   const [b,setb] = useState([])
   const [options, setOptions] = useState([]);

   const fetchPOO = async ()=>{
    try{
     const response = await fetch("http://localhost:5059/UserPage/tablePOO/", {
       method: "get",
      "content-type" : "application/json; charset=utf-8"
     });
     let q = await response.json();
     await setb(q);
    }
    catch(err){
      console.log(err)
    }
   };

   const fetchNO = async ()=>{
     const response = await fetch("http://localhost:5059/UserPage/tableNO/", {
       method: "get",
     });
     let q = await response.json();
     await setb(q);
   };

   const fetchPause = async ()=>{
     const response = await fetch("http://localhost:5059/UserPage/tablePause/", {
       method: "get",
     });
     let q = await response.json();
     await setb(q);
   };

   const fetchBranch = async ()=>{
    const response = await fetch("http://localhost:5059/UserPage/tablePOO/", {
      method: "get",
    });
    let q = await response.json();
    await setb(q);
  };

   const fetchOne = async (itemid)=>{
    const response = await fetch(`http://localhost:5059/UserPage/GetOne?id=${itemid}`, {
      method: "get",
    });
    let q = await response.json();
    await setInfoCard([q]);
  };

  const fetchOptions = async ()=>{
    const response = await fetch("http://localhost:5059/UserPage/GetOptions/", {
      method: "get",
    });
    let q = await response.json();
    await setOptions(q);
  };
//fetch


//вывод таблиц
   let tablePOO = b.map(function(item,index) {
     return <tr key={item.id}>
       <td> {index+1}</td>
        <td className="table__surname"><p  onClick={()=>{ fetchOne(item.id); setPersoncardEdit(!personcardEdit); }} className="table_span__surname">{item.surname}</p></td>
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
      <td className="table__surname"><p onClick={()=>{ fetchOne(item.id); setPersoncardEdit(!personcardEdit)}} className="table_span__surname">{item.surname}</p></td>
      <td>{item.name}</td>
      <td>{item.parent}</td>
      <td>{item.dateFinish}</td>
   </tr>
 });
 
 let tablePause = b.map(function(item,index) {
   return <tr key={item.id}>
     <td> {index+1}</td>
      <td className="table__surname"><p onClick={()=>{ fetchOne(item.id); setPersoncardEdit(!personcardEdit)}} className="table_span__surname">{item.surname}</p></td>
      <td>{item.name}</td>
        <td>{item.parent}</td>
        <td>{item.numBilet}</td>
        <td>{item.dateStart}</td>
        <td>{item.datePause}</td>
   </tr>
 });

let chec = true;

 let tableBranch = b.map(function(item,index) {
  return <tr key={item.id}>
    <td> {index+1}</td>
     <td className="table__surname"><p onClick={()=>{ fetchOne(item.id); setPersoncardEdit(!personcardEdit)}} className="table_span__surname">{item.surname}</p></td>
     <td>{item.name}</td>
       <td>{item.parent}</td>
       <td>{item.dateStart}</td>
       <td><input type="checkbox" name="name1" checked={chec}  /*onChange={this.toggleChange} */ /></td>
       <td><input type="checkbox" name="name1" checked={chec}  /*onChange={this.toggleChange} */ /></td>
  </tr>
});
//вывод таблиц

  return (
    <div className="adminNode_page">
    
    <header className="header_UserPage">
      <div className="ICON">
        <Icon height="20px" width="20px"/>
      </div>
      <div className="Header__text">
       <p className="Header__text_2">Белорусская партия «Белая Русь»</p> 
      </div>
      <div className="Header__nav">
        <p className="Header__nameUser">Котиков Алексей Геннадьевич</p> 
        <p className="Header__ruleUser" >Администратор узла &nbsp; <img className="spravka" src={question} alt="" width="13px" /></p>
        <p className="Header__exit" onClick={()=> Exit()}>Выход  </p>
      </div>
    </header>

    <main>
      <div className="spisok">
      <ul className="main__ul">
        <li className="main__li_1"><span className={`main__span ${col_1 ? 'act' : ''}`} 
        onClick={()=>{col('col1')}}>Список членов партии <br/> "Белая Русь"</span></li>
        <li className="main__li_2"><span className={`main__span ${col_2 ? 'act' : ''}`} 
        onClick={()=>{col('col2')}}>Поиск и фильтрация</span></li>
        <li className="main__li_3"><span className={`main__span ${col_3 ? 'act' : ''}`} 
        onClick={()=>{col('col3')}}>Список <br/> приостановленных <br/> членов партии</span></li>
        <li className="main__li_4"><span className={`main__span ${col_4 ? 'act' : ''}`} 
        onClick={()=>{col('col4')}}>Список снятых с учета</span></li>
        <li className="main__li_5"><span className={`main__span ${col_5 ? 'act' : ''}`} 
        onClick={()=>{col('col5')}}>Зарегистрировать <br/> члена партии</span></li>
        <li className="main__li_7"><span className={`main__span ${col_7 ? 'act' : ''}`} 
        onClick={()=>{col('col7')}}>Список пользователей <br/>своей ветки</span></li>
        <li className="main__li_8"><span className={`main__span ${col_8 ? 'act' : ''}`} 
        onClick={()=>{col('col8')}}>Дерево организаций</span></li>
        <li className="main__li_6"><span className={`main__span__edit ${col_6 ? '' : 'hide'}`} 
        onClick={()=>{col('col6')}}>Режим редактирования <br/>учетной карточки</span></li>
      </ul>
      </div>



    {personcardEdit ? <PersonalCardEdit setPersoncardEdit ={setPersoncardEdit} col={col} infoCard={infoCard} /> : null}

    <div className="tables">
    
    <div className={`Otchet ${(tablehidePOO && tablehidePause && tablehideNO ) ? 'hide' : ''}`}>
        <p>Отчет в Word</p>
        <p>Отчет в Excel</p>
      </div>

      <div className={`OtchetBranch ${(tablehideBranch ) ? 'hide' : ''}`}>
          <div className="adminnode__Button" onClick={()=> {}}>
            <button >Сохранить</button>
          </div>
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

     <table className={`tablePOO ${tablehideBranch ? 'hide' : ''}`}> 
        <thead>
           <tr>
              <td>Номер</td>
              <td>Фамилия</td>
              <td>Имя</td>
              <td>Отчество</td>
              <td>Последняя дата входа</td>
              <td>Оплата взносов</td>
              <td>Права оператора</td>
           </tr>
        </thead>
        <tbody>
           {tableBranch}
        </tbody>
     </table>

     { (col_2) ? <FindFilterEdit b={b} options={options} col={col} infoCard={infoCard} setInfoCard={setInfoCard}/> : null}
     { (col_5) ? <Registration options={options}/> : null}
     {/* { (col_6) ? <EditCard infoCard={infoCard} options={options} /> : null} */}
     { (col_6) ? <EditCardBranch infoCard={infoCard} options={options} /> : null}
     { (col_8) ? <Branchs /> : null}
     </div>

    </main>
    
  </div>
  )
}