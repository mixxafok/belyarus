import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FindFilterEdit } from "../components/FindFilterEdit.js";
import {PersonalCardEdit} from '../components/PersonalCardEdit.js';
import Icon from '../icons/partIcon.js';
import question from '../icons/question.png';
import {Registration} from '../components/Registration.js';
import {EditCard} from '../components/Operator/EditCard.js';
import Up from '../icons/up.png';
import Repeat from '../icons/repeat.png';
import Search from '../icons/search.png';
import '../styles/OperatorPage.css';
import '../styles/Header.css';
import '../styles/Table.css';
import '../styles/PersonalCardSystem.css';
import '../styles/mediaOper.css';
import { fetchPOO, fetchPause, fetchNO, fetchOptions, fetchSparvka, fetchOne,
  fetchPOOWord, fetchPausedWord, fetchNOWord, fetchPOOExcel,fetchPausedExcel, fetchNOExcel } from "../components/fetchs.js";

export function OperatorPage(){ 
  const [b,setb] = useState([])
  const [options, setOptions] = useState([]);

  const [infoCard,setInfoCard] = useState([]) // для персональной карточки
  const [col_1, setcol_1] = useState(false)
  const [col_2, setcol_2] = useState(false)
  const [col_3, setcol_3] = useState(false)
  const [col_4, setcol_4] = useState(false)
  const [col_5, setcol_5] = useState(false)
  const [col_6, setcol_6] = useState(false)
  const [col_7, setcol_7] = useState(false)
  const [tablehidePOO, setTableHidePOO] = useState(true)
  const [tablefindfilter, setTableFindFilter] = useState(true)
  const [tablehidePause, setTableHidePause] = useState(true)
  const [tablehideNO, setTableHideNO] = useState(true)
  const [tablehideBranch, setTableHideBranch] = useState(true)

  const[personcardEdit, setPersoncardEdit] = useState(false)
  const[inputSearch, setInputSearch] = useState('')
  const[inputDate, setInputDate] = useState({
    VznosMonth:'',
    VznosYear:''
  })
  const[foundUsers, setFoundUsers] = useState(b)
  const [a,seta] = useState(JSON.parse(localStorage.getItem("LoginPassword")) )
  const [labelYzelVznos, setLabelYzelVznos] = useState({
    nodeId: a.id,
    nazva: a.name
  })
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
          setTableHidePOO(!tablehidePOO);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          fetchPOO({setb});
    }
   else if (cols == 'col2'){
          setcol_1(false); 
          setcol_2(!col_2); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(false);
          setcol_7(false);
          setTableHidePOO(true);
          setTableFindFilter(!tablefindfilter);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          fetchPOO({setb});// подгрузка таблицы РОО
          fetchOptions({setOptions});
          
        }
    else if (cols == 'col3'){
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(!col_3); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(false);
          setcol_7(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(!tablehidePause);
          setTableHideNO(true);
          setTableHideBranch(true);
          fetchPause({setb});
        
        }
    else if ( cols == 'col4') {
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(!col_4);
          setcol_5(false);
          setcol_6(false);
          setcol_7(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(!tablehideNO);
          setTableHideBranch(true);
          fetchNO({setb});
        }
    else if ( cols == 'col5') {
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(!col_5);
          setcol_6(false);
          setcol_7(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          fetchOptions({setOptions});
    }
    else if ( cols == 'col7') {
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(false);
          setcol_7(!col_7);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(!tablehideBranch);

}
    else if ( cols == 'col6') {
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(!col_6);
          setcol_7(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          fetchOptions({setOptions});
    }
   }

   const navigateTo = useNavigate();
   function Exit(){
    if (window.confirm('Вы точно хотите выйти?')){
      navigateTo('/');
      localStorage.clear()
     }
   };
 
   
//вывод таблиц
   let tablePOO = b.map(function(item,index) {
     return <tr key={item.id}>
       <td> {index+1}</td>
        <td className="table__surname"><p  onClick={()=>{ fetchOne(item.id, {setInfoCard}); setPersoncardEdit(!personcardEdit); }} className="table_span__surname">{item.surname}</p></td>
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
      <td className="table__surname"><p onClick={()=>{ fetchOne(item.id, {setInfoCard}); setPersoncardEdit(!personcardEdit)}} className="table_span__surname">{item.surname}</p></td>
      <td>{item.name}</td>
      <td>{item.parent}</td>
      <td>{item.dateFinish}</td>
   </tr>
 });
 
 let tablePause = b.map(function(item,index) {
   return <tr key={item.id}>
     <td> {index+1}</td>
      <td className="table__surname"><p onClick={()=>{ fetchOne(item.id, {setInfoCard}); setPersoncardEdit(!personcardEdit)}} className="table_span__surname">{item.surname}</p></td>
      <td>{item.name}</td>
        <td>{item.parent}</td>
        <td>{item.numBilet}</td>
        <td>{item.dateStart}</td>
        <td>{item.datePause}</td>
   </tr>
 });

 let chec = true;
 let tableBranch = foundUsers.sort((a,b)=>a.surname.localeCompare(b.surname)).map(function(item,index) {
  return <tr key={item.id}>
    <td> {index+1}</td>
     <td className="table__surname"><p onClick={()=>{ fetchOne(item.id, {setInfoCard}); setPersoncardEdit(!personcardEdit)}} className="table_span__surname">{item.surname}</p></td>
     <td>{item.name}</td>
       <td>{item.parent}</td>
       <td><input type="checkbox" name="name1" checked={chec}  /*onChange={this.toggleChange} */ /></td>
  </tr>
});
//вывод таблиц


const getInputSearch = () =>{
  console.log(inputSearch)

  if ( inputSearch !== '' ) {
    const results = b.filter((result) => {
     return(result.surname.toLowerCase().startsWith(inputSearch.toLowerCase()) 
    )
    });
    setFoundUsers(results);
  } else {
    setFoundUsers(b);
  }
  setInputSearch('')
}

  return (
    <div className="oper_page">
      <header className="header_UserPage">

      <div className="ICON"> <Icon height="20px" width="20px"/></div>

      <div className="Header__text">
       <p className="Header__text_2">Белорусская партия «Белая Русь»</p> 
      </div>

      <div className="Header__nav">
        <p className="Header__nameUser">{a.surname + ' ' + a.name + ' ' + a.parent }</p> 
        <p className="Header__ruleUser" >{a.role} &nbsp;<span onClick={()=>fetchSparvka()}><img className="spravka" src={question} alt="?" width="13px"  /></span> </p>
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
        onClick={()=>{col('col7')}}>Уплата Взносов</span></li>
        <li className="main__li_6"><span className={`main__span__edit ${col_6 ? '' : 'hide'}`} 
        onClick={()=>{col('col6')}}>Режим редактирования <br/>учетной карточки</span></li>
      </ul>
      </div>


    {personcardEdit ? <PersonalCardEdit setPersoncardEdit ={setPersoncardEdit} col={col} infoCard={infoCard} /> : null}

    <div className="tables" id="start_table">

    <div className={` ${(tablehidePOO  ) ? 'OtchetHide' : 'Otchet'}`}>
        <p onClick={()=>fetchPOOWord()}>Отчет в Word</p>
        <p onClick={()=>fetchPOOExcel()}>Отчет в Excel</p>
      </div>
      <div className={` ${( tablehidePause  ) ? 'OtchetHide' : 'Otchet'}`}>
        <p onClick={()=>fetchPausedWord()}>Отчет в Word</p>
        <p onClick={()=>fetchPausedExcel()}>Отчет в Excel</p>
      </div>
      <div className={` ${( tablehideNO ) ? 'OtchetHide' : 'Otchet'}`}>
        <p onClick={()=>fetchNOWord()}>Отчет в Word</p>
        <p onClick={()=>fetchNOExcel()}>Отчет в Excel</p>
      </div>

      {!tablehideBranch ? <p className="span_YzelVznos">{labelYzelVznos.nazva}{labelYzelVznos.nodeId}</p> : null}
      <div className={` ${(tablehideBranch ) ? 'OtchetBranchHide' : 'OtchetBranch'}`}>
      <span className="otchetbranch_img_repeat"  onClick={()=> setFoundUsers(b)}><img src={Repeat} alt='☺'/></span>
          <div className="adminnode__Button" onClick={()=> {}}>
            <button >Сохранить</button>
          </div>
          <div className="otchetbranch_input__search_icon" onClick={()=>{getInputSearch()}}><img src={Search} alt='о'/></div>
          <div className="otchetbranch_input">
            <input
          type='search'
          value={inputSearch}
          onChange={e=>setInputSearch( e.target.value)}
          placeholder="Введите фамилию"
          />
            {/* <DatePicker 
          // className="datepicker"
          defaultvalue={inputDate}
          onChange={value=>setInputDate(value)}
          valueFormat={{ month: "long" , year: "numeric" }}
          calendarProps={{ views: ["year", "decade", "century"] }}
          /> */}
            <select className='month' value={inputDate.VznosMonth} onChange={(e) => setInputDate({ ...inputDate, VznosMonth: e.target.value })}>
             <option value='' disabled selected>Месяц</option> 
             <option value={1}>Январь</option>
             <option value={2}>Февраль</option>
             <option value={3}>Март</option>
             <option value={4}>Апрель</option>
             <option value={5}>Май</option>
             <option value={6}>Июнь</option>
             <option value={7}>Июль</option>
             <option value={8}>Август</option>
             <option value={9}>Сентябрь</option>
             <option value={10}>Октябрь</option>
             <option value={11}>Ноябрь</option>
             <option value={12}>Декабрь</option>
            </select>
            <select className='year' value={inputDate.VznosYear} onChange={(e) => setInputDate({ ...inputDate, VznosYear: e.target.value })}>
              <option value='' disabled selected>год</option> 
             <option value={2023}>2023</option>
             <option value={2024}>2024</option>
            </select>
          </div>
          <div className="otchetbranch_word">
            <p>Отчет в Word</p>
            <p>Отчет в Excel</p>
          </div>
      </div>

      <table className={`tablePOO ${tablehidePOO ? 'hide' : ''}`}> 
      <a href='#start_table' className="start_fixed"><img src={Up} alt='↑' width='20px'/></a>
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
     <a href='#start_table' className="start_fixed"><img src={Up} alt='↑' width='20px'/></a>
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
     <a href='#start_table' className="start_fixed"><img src={Up} alt='↑' width='20px'/></a>
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
     <a href='#start_table' className="start_fixed"><img src={Up} alt='↑' width='20px'/></a>
        <thead>
           <tr>
              <td>Номер</td>
              <td>Фамилия</td>
              <td>Имя</td>
              <td>Отчество</td>
              <td>Оплата взносов</td>
           </tr>
        </thead>
        <tbody>
           {tableBranch}
        </tbody>
     </table>

     { (col_2) ? <FindFilterEdit b={b} options={options} col={col} infoCard={infoCard} setInfoCard={setInfoCard}/> : null}
     { (col_5) ? <Registration options={options}/> : null}
     { (col_6) ? <EditCard infoCard={infoCard} options={options} /> : null}
     </div>

    </main>
    
  </div>
  )
}