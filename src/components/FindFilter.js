import React, { useState} from "react";
import '../styles/Table.css';
import '../styles/Findfilter.css';
import {PersonalCard} from './PersonalCard.js';


export function FindFilter({b, options,tablefindfilter}){
  const [personcard, setPersoncard] = useState(false);
  const [infoCard,setInfoCard] = useState([]);
  const [foundUsers, setFoundUsers] = useState(b);
  
  const [formInput, setFormInput] = useState({
    Surname: '',  // Фамилия
    Name: '', // Имя
    Parent: '', // отчество
    NumBilet: '', // номер билета
    StatusBilet: '', // статус билета
    Sex: '', // пол
    DateBirth: '', // день рождение
    DateIssue: '', // дата вступления
    PlaceIssue:'', // место вступления
    StatusMember: '', // статус членства
    PlaceYchet: '', // место постановки на учет
    Education: '', // Образовние
    SocialGroup: '', // социальная группа
    SphereActivity: '', // сфера деятельности
    StatusPart:'', // статус в партии
    Deputat: '' // был ли депутатом
  })

    const handleForm = () =>{
      console.log(formInput)
  
      if ( formInput.Name !== '' || formInput.Surname !== '' || formInput.Parent !== '' || formInput.NumBilet !== ''|| formInput.StatusBilet !== '') {
        const results = b.filter((result) => {
         return(result.name.toLowerCase().startsWith(formInput.Name.toLowerCase()) 
            && result.surname.toLowerCase().startsWith(formInput.Surname.toLowerCase())
            && result.parent.toLowerCase().startsWith(formInput.Parent.toLowerCase())
            && result.numBilet.toLowerCase().startsWith(formInput.NumBilet.toLowerCase())
           /* && result.statusBilet == formInput.StatusBilet*/
        )
        });
        setFoundUsers(results);
      } else {
        setFoundUsers(b);
      }
      setFormInput({
        Surname: '',  
        Name: '', 
        Parent: '', 
        NumBilet: '', 
        StatusBilet: '', 
        Sex: '', 
        DateBirth: '', 
        DateIssue: '', 
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

  let filt = foundUsers && foundUsers.length > 0 ? (
    foundUsers.map((user,index) => (
      <tr key={user.id}>
      <td> {index+1}</td>
       <td className="table__surname"><p onClick={()=>{ setPersoncard(!personcard); setInfoCard([user])}} className="table_span__surname">{user.surname}</p></td>
       <td>{user.name}</td>
         <td>{user.parent}</td>
         <td>{user.numBilet}</td>
         <td>{user.dateStart}</td>
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
        educ.push( ked.val)
        continue
        }
    }
    if(key == 'socs'){
      for (let ked of options['socs']){
        socs.push( ked.val)
        continue
        }
    }
    if(key == 'acts'){
      for (let ked of options['acts']){
        acts.push( ked.val)
        continue
        }
    }
    if(key == 'regPlcs'){
      for (let ked of options['regPlcs']){
        regPlcs.push( ked.val)
        continue
        }
    }
    if(key == 'entrPlcs'){
      for (let ked of options['entrPlcs']){
        entrPlcs.push( ked.val)
        continue
        }
    }
    if(key == 'partPoss'){
      for (let ked of options['partPoss']){
        partPoss.push( ked.val)
        continue
        }
    }
    if(key == 'mbrSt'){
      for (let ked of options['mbrSt']){
        mbrSt.push( ked.val)
        continue
        }
    }
    if(key == 'crdSt'){
      for (let ked of options['crdSt']){
        crdSt.push( ked.val)
        continue
        }
    }
  }


  
  return (
    
  <div className="filter">
    <div className="form">
      <div className="form_input_1">
        
        <div className="Button" onClick={()=>{handleForm()}} >
           <button >Найти</button>
        </div>

      <label>Фамилия </label>
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
        <select value={formInput.StatusBilet} onChange={(e) => setFormInput({ ...formInput, StatusBilet: e.target.value })}> 
          <option ></option>
          {crdSt.map((item, index)=>{ return <option value={index+1}>{item}</option>})} 
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Пол</label>
        <select value={formInput.Sex} onChange={(e) => setFormInput({ ...formInput, Sex: e.target.value })}> 
          <option ></option>
          <option value={'Мужской'}>Мужской</option>
          <option value={'Женский'}>Женский</option>
        </select>
        </div>
        
        <div className="form_input_date" >
        <label>Дата рождения</label>
        <input 
          value={formInput.DateBirth}
          onChange={(e) => setFormInput({ ...formInput, DateBirth: e.target.value })} 
          type="date" 
          min="1923-01-01"/>
        </div>

        <div className="form_input_date">
        <label>Дата вступления</label>
        <input 
          value={formInput.DateIssue}
          onChange={(e) => setFormInput({ ...formInput, DateIssue: e.target.value })} 
          type="date" 
          min="2023-01-01"/>
        </div>

        <div className="form_input_combobox">
        <label>Место вступления</label>
        <select value={formInput.PlaceIssue} onChange={(e) => setFormInput({ ...formInput, PlaceIssue: e.target.value })}>
          <option ></option> 
          {entrPlcs.map((item, index)=>{ return <option value={index+1}>{item}</option>})}
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Статус членства</label>
        <select value={formInput.StatusMember} onChange={(e) => setFormInput({ ...formInput, StatusMember: e.target.value })}>
          <option ></option> 
          {mbrSt.map((item, index)=>{ return <option value={index+1}>{item}</option>})}
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Место постановки на учет</label>
        <select value={formInput.PlaceYchet} onChange={(e) => setFormInput({ ...formInput, PlaceYchet: e.target.value })}>
          <option ></option> 
          {regPlcs.map((item, index)=>{ return <option value={index+1}>{item}</option>})}
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Образование</label>
        <select value={formInput.Education} onChange={(e) => setFormInput({ ...formInput, Education: e.target.value })}>
          <option ></option> 
          {educ.map((item, index)=>{ return <option value={index+1}>{item}</option>})}
        </select>
        </div>
      
        <div className="form_input_combobox">
        <label>Социальная категория</label>
        <select value={formInput.SocialGroup} onChange={(e) => setFormInput({ ...formInput, SocialGroup: e.target.value })}>
          <option ></option> 
          {socs.map((item, index)=>{ return <option value={index+1}>{item}</option>})}
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Сфера деятельности</label>
        <select value={formInput.SphereActivity} onChange={(e) => setFormInput({ ...formInput, SphereActivity: e.target.value })}>
          <option ></option> 
          {acts.map((item, index)=>{ return <option value={index+1}>{item}</option>})}
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Статус в партии</label>
        <select value={formInput.StatusPart} onChange={(e) => setFormInput({ ...formInput, StatusPart: e.target.value })}>
          <option ></option> 
          {partPoss.map((item, index)=>{ return <option value={index+1}>{item}</option>})}
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Избирался ли депутатом</label>
        <select value={formInput.Deputat} onChange={(e) => setFormInput({ ...formInput, Deputat: e.target.value })}> 
        <option ></option>
        <option value={'Да'}>Да</option>
        <option value={'Нет'}>Нет</option>
        </select>
        </div>
    </div>

    <div className="table">
    <div className={`OtchetFilter ${(tablefindfilter) ? 'hide' : ''}`}>
          <p>Отчет в Word</p>
          <p>Отчет в Excel</p>
        </div>
    <table className={`tablePOO `}> 
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
       {filt}
    </tbody>
    </table>
    {personcard ? <PersonalCard setPersoncard={setPersoncard} infoCard={infoCard} setinfoCard={setInfoCard}/> : null}
    </div>
  </div>
  )
}