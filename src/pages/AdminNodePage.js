import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FindFilterEdit } from "../components/FindFilterEdit.js";
import {PersonalCardEdit} from '../components/PersonalCardEdit';
import Icon from '../icons/partIcon.js';
import question from '../icons/question.png';
import {Registration} from '../components/Registration.js';
import {EditCardNode} from '../components/AdminNode/EditCardNode.js';
import { Branchs } from "../components/AdminNode/Branchs.js";
import { BranchsSystemVznos } from "../components/AdminSystem/BranchsSystemVznos.js";
import { SpisokUsersNode } from "../components/AdminNode/SpisokUsersNode.js";
import { LogPassUserNodeEdit} from "../components/AdminNode/LogPassUserNodeEdit.js"
import { LogPassUserNode } from "../components/AdminNode/LogPassUserNode.js";
import Up from '../icons/up.png';
import Repeat from '../icons/repeat.png';
import Search  from '../icons/search.png';
import '../styles/AdminNodePage.css';
import '../styles/Header.css';
import '../styles/Table.css';
import '../styles/PersonalCardSystem.css';
import '../styles/mediaAdminNode.css';
import { fetchPOO, fetchPause, fetchNO, fetchSparvka, fetchOne, fetchOptions, fetchCurrentVznosi,
  fetchPOOWord, fetchPausedWord, fetchNOWord, fetchPOOExcel,fetchPausedExcel, fetchNOExcel } from "../components/fetchs.js";


export function AdminNodePage(){
  const [infoCard,setInfoCard] = useState([]) // для персональной карточки
  const [infoRegUser, setInfoRegUser] = useState([]) // для изменения данных пользователя LogPass
  const [col_1, setcol_1] = useState(false)
  const [col_2, setcol_2] = useState(false)
  const [col_3, setcol_3] = useState(false)
  const [col_4, setcol_4] = useState(false)
  const [col_5, setcol_5] = useState(false)
  const [col_6, setcol_6] = useState(false)
  const [col_7, setcol_7] = useState(false)
  const [col_8, setcol_8] = useState(false)
  const [col_9, setcol_9] = useState(false)
  const [col_10, setcol_10] = useState(false)
  const [col_11, setcol_11] = useState(false)
  const [col_0, setcol_0] = useState(false)
  const [hideLi, setHideLi] = useState(true)
  const [tablehidePOO, setTableHidePOO] = useState(true)
  const [tablefindfilter, setTableFindFilter] = useState(true)
  const [tablehidePause, setTableHidePause] = useState(true)
  const [tablehideNO, setTableHideNO] = useState(true)
  const [tablehideBranch, setTableHideBranch] = useState(true)
  const [b,setb] = useState([])
  const [options, setOptions] = useState([]);
  const[personcardEdit, setPersoncardEdit] = useState(false)
  const[inputSearch, setInputSearch] = useState('')
  const[inputDate, setInputDate] = useState({
    VznosMonth:'',
    VznosYear:''
  })
  const[foundUsers, setFoundUsers] = useState(b)
  const [a,seta] = useState(JSON.parse(localStorage.getItem("LoginPassword")) )
  const [selectYzelVznos, setSelectYzelVznos] = useState(false)
  const [openBranchVznos, setOpenBranchVznos] =useState(false)
  const [labelYzelVznos, setLabelYzelVznos] = useState({
    nodeId: 0,
    nazva: ''
  })

  //нажатие на меню
  function col (cols){
    if (cols == 'col0') {
      setcol_0(!col_0);
      setcol_1(false); 
      setcol_2(false); 
      setcol_3(false); 
      setcol_4(false);
      setcol_5(false);
      setcol_6(false);
      setcol_7(false);
      setcol_8(false);
      setcol_9(false);
      setHideLi(!hideLi);
      setTableHidePOO(true);
      setTableFindFilter(true);
      setTableHidePause(true);
      setTableHideNO(true);
      setTableHideBranch(true);
      setSelectYzelVznos(false);
    //  fetchPOO({setb});
}
   else if (cols == 'col1') {
      
          setcol_1(!col_1); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(false);
          setcol_7(false);
          setcol_8(false);
          setcol_9(false);
          setcol_10(false);
          setcol_11(false);
          setTableHidePOO(!tablehidePOO);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          setSelectYzelVznos(false);
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
          setcol_8(false);
          setcol_9(false);
          setcol_10(false);
          setcol_11(false);
          setTableHidePOO(true);
          setTableFindFilter(!tablefindfilter);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          setSelectYzelVznos(false);
          fetchPOO({setb});
          fetchOptions({setOptions});
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
          setcol_9(false);
          setcol_10(false);
          setcol_11(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(!tablehidePause);
          setTableHideNO(true);
          setTableHideBranch(true);
          setSelectYzelVznos(false);
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
          setcol_8(false);
          setcol_9(false);
          setcol_10(false);
          setcol_11(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(!tablehideNO);
          setTableHideBranch(true);
          setSelectYzelVznos(false);
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
          setcol_8(false);
          setcol_9(false);
          setcol_10(false);
          setcol_11(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          setSelectYzelVznos(false);
          fetchOptions({setOptions});
    }
    else if ( cols == 'col6') {
      setcol_0(false);
      setcol_1(false); 
      setcol_2(false); 
      setcol_3(false); 
      setcol_4(false);
      setcol_5(false);
      setcol_6(!col_6);
      setcol_7(false);
      setcol_8(false);
      setcol_10(false);
      setcol_11(false);
      setTableHidePOO(true);
      setTableFindFilter(true);
      setTableHidePause(true);
      setTableHideNO(true);
      setTableHideBranch(true);
      setSelectYzelVznos(false);
      fetchOptions({setOptions});
}
    else if ( cols == 'col7') {
      setcol_0(false);
      setcol_1(false); 
      setcol_2(false); 
      setcol_3(false); 
      setcol_4(false);
      setcol_5(false);
      setcol_6(false);
      setcol_7(!col_7);
      setcol_8(false);
      setcol_9(false);
      setcol_10(false);
      setcol_11(false);
      setTableHidePOO(true);
      setTableFindFilter(true);
      setTableHidePause(true);
      setTableHideNO(true); 
      setTableHideBranch(true);
      setOpenBranchVznos(true);
      setSelectYzelVznos(!selectYzelVznos);
    //  fetchYzelRespublic();
      setLabelYzelVznos({...labelYzelVznos, nodeId: 0, nazva: ''});
  }
    else if (cols == 'col7a'){
           
  //  fetchBranch({setb});
      fetchCurrentVznosi({setFoundUsers, setInputDate, inputDate});
      setTableHideBranch(!tablehideBranch);
      setOpenBranchVznos(false);
  }
    else if ( cols == 'col8') {
      setcol_0(false);
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(false);
          setcol_7(false);
          setcol_8(!col_8);
          setcol_9(false);
          setcol_10(false);
          setcol_11(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          setSelectYzelVznos(false);
        //  fetchBranch({setb});
}
    else if ( cols == 'col9') {
      setcol_0(false);
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(false);
          setcol_7(false);
          setcol_8(false);
          setcol_9(!col_9);
          setcol_10(false);
          setcol_11(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          setSelectYzelVznos(false);
          fetchOptions({setOptions});
    }
    else if ( cols == 'col10') {
      setcol_0(false);
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(false);
          setcol_7(false);
          setcol_8(false);
          setcol_9(false);
          setcol_10(!col_10);
          setcol_11(false);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          setSelectYzelVznos(false);
          fetchOptions({setOptions});
    }
    else if ( cols == 'col11') {
      setcol_0(false);
          setcol_1(false); 
          setcol_2(false); 
          setcol_3(false); 
          setcol_4(false);
          setcol_5(false);
          setcol_6(false);
          setcol_7(false);
          setcol_8(false);
          setcol_9(false);
          setcol_10(false);
          setcol_11(!col_11);
          setTableHidePOO(true);
          setTableFindFilter(true);
          setTableHidePause(true);
          setTableHideNO(true);
          setTableHideBranch(true);
          setSelectYzelVznos(false);
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
        <td>{item.dateIssue}</td>
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
        <td>{item.dateIssue}</td>
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
       <td><input type="checkbox" name="name1" /*checked={chec}  onChange={this.toggleChange} */ /></td>
  </tr>
});
//вывод таблиц


const getInputSearch = () =>{
  
  if ( inputSearch != '' ) {
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

const fetchPostCurrentVznosi = async() =>{
  try{
     const response = await fetch('http://secondsin-001-site1.dtempurl.com/UserPage/GetContributions/',{
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',  
    },
    body:JSON.stringify({month: inputDate.VznosMonth, year: inputDate.VznosYear, nodeId: labelYzelVznos.nodeId}) 
  });
  const q = await response.json();
  setFoundUsers(q.users);
//  setInputDate({...inputDate, VznosMonth: q.period.month, VznosYear: q.period.year});
  console.log(foundUsers)
  }
 catch(err){
  console.log(err);
  alert('Выберите другую дату. Данных за данный период нет')
 }
}


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
        <p className="Header__nameUser">{a.surname + ' ' + a.name + ' ' + a.parent }</p> 
        <p className="Header__ruleUser" >{a.role} &nbsp;<span onClick={()=>fetchSparvka()}><img className="spravka" src={question} alt="?" width="13px" /></span></p>
        <p className="Header__exit" onClick={()=> Exit()}>Выход  </p>
      </div>
    </header>

    <main>
      <div className="spisok">
      <ul className="main__ul">
      <li className="main__li_0"><span className={`main__span ${col_0 ? 'act' : ''}`} 
        onClick={()=>{col('col0')}}>Моя ветка</span></li>
        <div className={hideLi ? 'hide' : null}>
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
        </div>
        <li className="main__li_7"><span className={`main__span ${col_7 ? 'act' : ''}`} 
        onClick={()=>{col('col7')}}>Уплата взносов</span></li>
        <li className="main__li_8"><span className={`main__span ${col_8 ? 'act' : ''}`} 
        onClick={()=>{col('col8')}}>Дерево организаций</span></li>
        <li className="main__li_9"><span className={`main__span ${col_9 ? 'act' : ''}`} 
        onClick={()=>{col('col9')}}>Список пользователей системы</span></li>
        <li className="main__li_10"><span className={`main__span ${col_10 ? 'act' : ''}`} 
        onClick={()=>{col('col10')}}>Зарегистрировать <br/> пользователя</span></li>
        <li className="main__li_11"><span className={`main__span__edit ${col_11 ? '' : 'hide'}`} 
        onClick={()=>{col('col11')}}>Режим редактирования <br/>учетной карточки</span></li>
        <li className="main__li_6"><span className={`main__span__edit ${col_6 ? '' : 'hide'}`} 
        onClick={()=>{col('col6')}}>Режим редактирования <br/>учетной карточки</span></li>
      </ul>
      </div>



    {personcardEdit ? <PersonalCardEdit setPersoncardEdit ={setPersoncardEdit} col={col} infoCard={infoCard} /> : null}

    <div className="tables" id="start_table">
    
    <div className={`Otchet ${(tablehidePOO  ) ? 'hide' : ''}`}>
        <p onClick={()=>fetchPOOWord()}>Отчет в Word</p>
        <p onClick={()=>fetchPOOExcel()}>Отчет в Excel</p>
      </div>
      <div className={`Otchet ${( tablehidePause  ) ? 'hide' : ''}`}>
        <p onClick={()=>fetchPausedWord()}>Отчет в Word</p>
        <p onClick={()=>fetchPausedExcel()}>Отчет в Excel</p>
      </div>
      <div className={`Otchet ${( tablehideNO ) ? 'hide' : ''}`}>
        <p onClick={()=>fetchNOWord()}>Отчет в Word</p>
        <p onClick={()=>fetchNOExcel()}>Отчет в Excel</p>
      </div>

      {!tablehideBranch ? <p className="span_YzelVznos">{labelYzelVznos.nazva}{labelYzelVznos.nodeId}</p> : null}
      <div className={`OtchetBranch ${(tablehideBranch ) ? 'hide' : ''}`}>
      <span style={{marginRight: '1%', marginTop: '3px', cursor:'pointer'}} onClick={()=>{ setFoundUsers(b); fetchPostCurrentVznosi();}}><img src={Repeat} alt='☺' width='20px'/></span>
          <div className="adminnode__Button" onClick={()=> {alert('add feunction')}}>
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
     {/* { (col_6) ? <EditCard infoCard={infoCard} options={options} /> : null} */}
     { (col_6) ? <EditCardNode infoCard={infoCard} options={options} /> : null}
     { (col_8) ? <Branchs /> : null}
     { (col_9) ? <SpisokUsersNode col={col} infoRegUser={infoRegUser} setInfoRegUser={setInfoRegUser}/> : null}
     { (col_10) ? <LogPassUserNode /> : null}
     { (col_11) ? <LogPassUserNodeEdit  infoRegUser={infoRegUser} setInfoRegUser={setInfoRegUser}/> : null}
     { (openBranchVznos && selectYzelVznos) ? <BranchsSystemVznos col={col} 
     labelYzelVznos={labelYzelVznos} setLabelYzelVznos={setLabelYzelVznos}/> : null}
     </div>

    </main>
    
  </div>
  )
}