import React from "react";
import Avatar from '../img/ava.png';
import '../styles/PersonalCardSystem.css';


export function PersonalCard({setPersoncard, infoCard, setInfoCard} ){

  let fioMember = infoCard.map((tem) => {
    return (
      <p>{tem.surname.toUpperCase()} {tem.name} {tem.parent}</p>
    )
  })

  let uli = infoCard.map((item) => {
    return <ul className="div_2__ul">
       <li>Номер партийного билета: <span className="span1">{item.numBilet}</span> </li>
       <li>Дата выдачи билета: {item.dateStart}</li>
       <li>Статус билета: {item.statusBilet}</li>
       <li>Пол: {item.sex}</li>
       <li>Дата рождения: {item.dateBirth}</li>
       <li>Дата вступления: {item.dateStart}</li>
       <li>Место вступления: {item.placeIssue}</li>
       <li>Статус членства: {item.statusMember}</li>
       <li>Место постановки на учет: {item.uchetPlace}</li>
       <li>Образование: {item.educarion}</li>
       <li>Социальная категория: {item.socialGroup}</li>
       <li>Сфера деятельности: {item.sphereActivity}</li>
       <li>Место работы: {item.placeJob} </li>
       <li>Должность: {item.postJob} </li>
       <li>Статус в партии: {item.statusPart}</li>
       <li>Избирался ли депутатом: {item.deputat}</li>
       <li>Адрес проживания: {item.livingAddress} </li>
       <li>Номер телефона: {item.telephoneNumber} </li>
       <li>Взносы:  </li>
    </ul>
  });

  const fetchPersonWord = async (id) =>{
    try{
    const responce = await fetch(`http://secondsin-001-site1.dtempurl.com/api/Otchet/GetPersonWord?id=${id}`,{
      method: 'get'
    })
    await alert('Файл успешно скачан')
  }
    catch(err){
      console.log(err);
      alert('Не удалось скачать файл')
    }
   //console.log(id)
  }
  const fetchPersonExcel = async (id) =>{
    try{
    const responce = await fetch(`http://secondsin-001-site1.dtempurl.com/api/Otchet/GetPersonExel?id=${id}`,{
      method: 'get'
    })
   await alert('Файл успешно скачан')
    }
    catch(err){
      console.log(err);
      alert('Не удалось скачать файл')
    }
  }

  return (
    <main className="adminPersonalCard_main">
    <div className="admindiv_1">
      <p className="admincancel" onClick={()=>setPersoncard()}>X</p>
      <div className="admindiv1_avatar_fio">
        <img src={Avatar} className="admindiv_1__Avatar" alt="no img" ></img>
        <div className="admindiv_1__FIO">{fioMember}</div>
      </div>
      <div className="admindiv_1__bilet" >
        <span onClick={()=>{setPersoncard(); fetchPersonWord(infoCard[0].id) }}>Отчет Word</span>
        <span onClick={()=>{setPersoncard(); fetchPersonExcel(infoCard[0].id) }}>Отчет Excel</span>
        </div>
      </div>
      

    <div className="admindiv_2">
    {/* <span className="" onClick={()=>{ setPersoncardEdit(); col('col6');  }}>Сформировать билет</span>  */}
      {uli}
    </div>

      </main>
  )
}