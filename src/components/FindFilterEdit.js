import React, {useState} from "react";
import '../styles/Table.css';
import '../styles/Findfilter.css';
import {PersonalCardEdit} from './PersonalCardEdit.js';
import { fetchOne, fetchSearchWord, fetchSearchExcel } from "./fetchs";

export function FindFilterEdit({b,tablefindfilter, options, col, infoCard,setInfoCard}){

  const[personcardEdit, setPersoncardEdit] = useState(false);
  const [foundUsers, setFoundUsers] = useState([]);
  const [formInput, setFormInput] = useState({
    Surname: '', 
    Name: '',
    Parent: '',
    NumBilet: '',
    StatusBilet: '',
    Sex: '',
    DateBirthFrom: '',
    DateBirthTo: '',
    DateIssueFrom: '',
    DateIssueTo: '',
    PlaceIssue:'',
    StatusMember: '',
    PlaceYchet: '',
    Education: '',
    SocialGroup: '',
    SphereActivity: '',
    StatusPart:'',
    Deputat: '',
  })

// действие по кнопке Найти
    const handleForm = () =>{
      console.log(formInput)
     if( formInput.Surname !== '' || formInput.Name !== '' || formInput.Parent !== ''
      || formInput.NumBilet !== '' || formInput.StatusBilet !== '' || formInput.Sex !== ''
      || formInput.DateBirthTo !== '' || formInput.DateIssueTo !== '' || formInput.PlaceIssue !== ''
      || formInput.DateBirthFrom !== '' || formInput.DateIssueFrom !== '' || formInput.StatusMember !== ''
      || formInput.Education !== '' || formInput.SocialGroup !== ''|| formInput.SphereActivity !== ''
      || formInput.StatusPart !== '' || formInput.Deputat !== '' )  fetchPost();
     else setFoundUsers(b);
      // if ( formInput.Name !== '' || formInput.Surname !== '' || formInput.Parent !== '' || formInput.NumBilet !== ''|| formInput.StatusBilet !== '') {
      //   const results = b.filter((result) => {
      //    return(result.name.toLowerCase().startsWith(formInput.Name.toLowerCase()) 
      //       && result.surname.toLowerCase().startsWith(formInput.Surname.toLowerCase())
      //       && result.parent.toLowerCase().startsWith(formInput.Parent.toLowerCase())
      //       && result.numBilet.toLowerCase().startsWith(formInput.NumBilet.toLowerCase())
      //      /* && result.statusBilet == formInput.StatusBilet*/
      //   )
      //   });
      //   setFoundUsers(results);
      // } else {
      //   setFoundUsers(b);
      // }
      setFormInput({
        Surname: '', 
        Name: '',
        Parent: '',
        NumBilet: '',
        StatusBilet: '',
        Sex: '',
        DateBirthFrom: '',
        DateBirthTo: '',
        DateIssueFrom: '',
        DateIssueTo: '',
        PlaceIssue:'',
        StatusMember: '',
        PlaceYchet: '',
        Education: '',
        SocialGroup: '',
        SphereActivity: '',
        StatusPart:'',
        Deputat: ''
      })
  
    }

// post для поиска
    const fetchPost = async () => {
      try{
        const responce = await fetch('http://secondsin-001-site1.dtempurl.com/UserPage/Search/', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8',  
          },
          body: JSON.stringify(formInput)
        })
        let q = await responce.json();
        await setFoundUsers(q);
       console.log([q])
      }
      catch(err){
        console.log(err);
      }
    };


  let filt = foundUsers && foundUsers.length > 0 ? (
    foundUsers.map((user,index) => (
      <tr key={user.id}>
      <td> {index+1}</td>
       <td className="table__surname"><p onClick={()=>{fetchOne(user.id, {setInfoCard}); setPersoncardEdit(!personcardEdit);}} className="table_span__surname">{user.surname}</p></td>
       <td>{user.name}</td>
       <td>{user.parent}</td>
       <td>{user.numBilet}</td>
       <td>{user.dateIssue}</td>
       <td>{user.place}</td>
    </tr>
    ))
  ) : (
    <h1>Результаты не найдены!</h1>
  )


//обработка options
    const educ = [];
    const socs = [];
    const acts = [];
    const regPlcs = [];
    const entrPlcs = [];
    const partPoss = [];
    const mbrSt = [];
    const crdSt = [];
    for (let key in options){
      if(key == 'edus'){
        for (let ked of options['edus']){
          educ.push( ked)
          continue
          }
      }
      if(key == 'socs'){
        for (let ked of options['socs']){
          socs.push( ked)
          continue
          }
      }
      if(key == 'acts'){
        for (let ked of options['acts']){
          acts.push( ked)
          continue
          }
      }
      if(key == 'regPlcs'){
        for (let ked of options['regPlcs']){
          regPlcs.push( ked)
          continue
          }
      }
      if(key == 'entrPlcs'){
        for (let ked of options['entrPlcs']){
          entrPlcs.push( ked)
          continue
          }
      }
      if(key == 'partPoss'){
        for (let ked of options['partPoss']){
          partPoss.push( ked)
          continue
          }
      }
      if(key == 'mbrSt'){
        for (let ked of options['mbrSt']){
          mbrSt.push( ked)
          continue
          }
      }
      if(key == 'crdSt'){
        for (let ked of options['crdSt']){
          crdSt.push( ked)
          continue
          }
      }
    }
  //обработка options


  return (
    
  <div className="filter">

    <div className="form">
      <div className="form_input_1">

        <div className="Button" onClick={()=>handleForm()}>
           <button >Найти</button>
        </div>

      <label>Фамилия</label>
        <input
          type="search"
          onChange={(e) => setFormInput({ ...formInput, Surname: e.target.value })}
          value={formInput.Surname }
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input_1">
        <label>Имя</label>
        <input
          type="search"
          onChange={(e) => setFormInput({ ...formInput, Name: e.target.value })}
          value={formInput.Name }
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input_1">
        <label>Отчество</label>
        <input
          type="search"
          onChange={(e) => setFormInput({ ...formInput, Parent: e.target.value })}
          value={formInput.Parent }
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input_1">
        <label>Номер билета</label>
        <input
          type="search"
          onChange={(e) => setFormInput({ ...formInput, NumBilet: e.target.value })}
          value={formInput.NumBilet }
          className="input"
          placeholder=""
        />
        </div>
        
        <div className="form_input_combobox">
        <label>Статус билета</label>
        <select  className="select" value={formInput.StatusBilet} onChange={(e) => setFormInput({ ...formInput, StatusBilet: e.target.value })}> 
          <option  ></option>
          {crdSt.map((item)=>{ return <option value={item.id}>{item.val}</option>})} 
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Пол</label>
        <select className="select" value={formInput.Sex} onChange={(e) => setFormInput({ ...formInput, Sex: e.target.value })}> 
          <option  ></option>
          <option value={true}>Мужской</option>
          <option value={false}>Женский</option>
        </select>
        </div>
        
        <div className="form_input_date" >
          <label>Дата рождения</label>
          <div className="form_input_date_1">
            <span>От:</span>
            <input 
              value={formInput.DateBirthFrom} 
              onChange={(e) => setFormInput({ ...formInput, DateBirthFrom: e.target.value })} 
              type="date" 
              min="1923-01-01"/>
          </div> 
          <div className="form_input_date_1">
          <span>До:</span>
            <input 
              value={formInput.DateBirthTo} 
              onChange={(e) => setFormInput({ ...formInput, DateBirthTo: e.target.value })} 
              type="date" 
              min="1923-01-01"/>
          </div>
        </div>

        <div className="form_input_date">
          <label>Дата вступления</label>
          <div className="form_input_date_1">
            <span>От: </span>
            <input 
              value={formInput.DateIssueFrom}
              onChange={(e) => setFormInput({ ...formInput, DateIssueFrom: e.target.value })} 
              type="date" 
              min="2023-01-01"/>
          </div>
          <div className="form_input_date_1">
            <span>До:</span>
            <input 
              value={formInput.DateIssueTo}
              onChange={(e) => setFormInput({ ...formInput, DateIssueTo: e.target.value })} 
              type="date" 
              min="2023-01-01"/>
          </div>
        </div>

        <div className="form_input_combobox">
        <label>Место вступления</label>
        <select className="select" value={formInput.PlaceIssue} onChange={(e) => setFormInput({ ...formInput, PlaceIssue: e.target.value })}>
          <option  ></option> 
          {entrPlcs.map((item)=>{ return <option value={item.id}>{item.val}</option>})} 
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Статус членства</label>
        <select className="select" value={formInput.StatusMember} onChange={(e) => setFormInput({ ...formInput, StatusMember: e.target.value })}>
          <option  ></option> 
          {mbrSt.map((item)=>{ return <option value={item.id}>{item.val}</option>})} 
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Место постановки на учет</label>
        <select className="select" value={formInput.PlaceYchet} onChange={(e) => setFormInput({ ...formInput, PlaceYchet: e.target.value })}>
          <option  ></option> 
          {regPlcs.map((item)=>{ return <option value={item.id}>{item.val}</option>})} 
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Образование</label>
        <select className="select" value={formInput.Education} onChange={(e) => setFormInput({ ...formInput, Education: e.target.value })}>
          <option ></option> 
          {educ.map((item)=>{ return <option value={item.id}>{item.val}</option>})} 
        </select>
        </div>
      
        <div className="form_input_combobox">
        <label>Социальная категория</label>
        <select className="select" value={formInput.SocialGroup} onChange={(e) => setFormInput({ ...formInput, SocialGroup: e.target.value })}>
          <option  ></option> 
          {socs.map((item)=>{ return <option value={item.id}>{item.val}</option>})} 
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Сфера деятельности</label>
        <select className="select" value={formInput.SphereActivity} onChange={(e) => setFormInput({ ...formInput, SphereActivity: e.target.value })}>
          <option  ></option> 
          {acts.map((item)=>{ return <option value={item.id}>{item.val}</option>})} 
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Статус в партии</label>
        <select className="select" value={formInput.StatusPart} onChange={(e) => setFormInput({ ...formInput, StatusPart: e.target.value })}>
          <option  ></option> 
          {partPoss.map((item)=>{ return <option value={item.id}>{item.val}</option>})} 
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Избирался ли депутатом</label>
        <select className="select" value={formInput.Deputat} onChange={(e) => setFormInput({ ...formInput, Deputat: e.target.value })}> 
          <option  ></option>
          <option value={true}>Да</option>
          <option value={false}>Нет</option>
        </select>
        </div>
    </div>

    <div className="table">
    <div className={`OtchetFilter ${(tablefindfilter) ? 'hide' : ''}`}>
            <p onClick={()=>fetchSearchWord()}>Отчет в Word</p>
            <p onClick={()=>fetchSearchExcel()}>Отчет в Excel</p>
        </div>
    <table className={`tablePOO `}> 
    <thead>
       <tr>
          <td>№</td>
          <td>Фамилия</td>
          <td>Имя</td>
          <td>Отчество</td>
          <td>Номер билета</td>
          <td>Дата вступления</td>
          <td>Место постановки на учет</td>
       </tr>
    </thead>
    <tbody>
       {filt}
    </tbody>
    </table>
    {personcardEdit ? <PersonalCardEdit setPersoncardEdit={setPersoncardEdit} col={col} infoCard={infoCard}/> : null}
    </div>
  </div>
  )
}