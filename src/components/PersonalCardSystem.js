import React from "react";
import Avatar from '../img/ava.png';
import '../styles/PersonalCardEdit.css';


export function PersonalCardSystem({setPersoncardEdit,col, infoCard } ){

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
       <li>Образование: {item.education}</li>
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

  const fetchBilet = async (id) =>{
    try{
      const responce = await fetch(`http://localhost:5059/api/Otchet/GetUserCard?id=${id}`,{
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
  const fetchPersonWord = async (id) =>{
    try{
    const responce = await fetch(`http://localhost:5059/api/Otchet/GetPersonWord?id=${id}`,{
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
    const responce = await fetch(`http://localhost:5059/api/Otchet/GetPersonExel?id=${id}`,{
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

  return (
      <main className="PersonalCard_main">
        <div className="div_1">
          <p className="cancel" onClick={()=>setPersoncardEdit()}>X</p>
          <img src={Avatar} className="div_1__Avatar" alt="no img" ></img>
          <div className="div_1__FIO">{fioMember}</div>
          <div className="div_1__bilet" >
            <span onClick={()=>{setPersoncardEdit(); fetchBilet(infoCard[0].id) }}>Сформировать билет</span>
            <span onClick={()=>{setPersoncardEdit(); fetchPersonWord(infoCard[0].id) }}>Отчет Word</span>
            <span onClick={()=>{setPersoncardEdit(); fetchPersonExcel(infoCard[0].id) }}>Отчет Excel</span>
            </div>
        </div>

        <div className="div_2">
        {/* <span className="" onClick={()=>{ setPersoncardEdit(); col('col6');  }}>Сформировать билет</span>  */}
          {uli}
         <div className="div_2__edits" > <span onClick={()=>{ setPersoncardEdit(); col('col6');  }}>Редактировать личную карточку</span></div> 
        </div>

      </main>
  )
}