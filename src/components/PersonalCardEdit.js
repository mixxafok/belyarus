import React from "react";
import Avatar from '../img/ava.png';
import '../styles/PersonalCardEdit.css';


export function PersonalCardEdit({setPersoncardEdit,col, infoCard } ){

  let fioMember = infoCard.map((tem) => {
    return (
      // <p>{tem.surname.toUpperCase()} {tem.name} {tem.parent}</p>
       <p>{tem.fio}</p>
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
       <li>Место постановки на учет: {item.place}</li>
       <li>Образование: {item.education}</li>
       <li>Социальная категория: {item.socialGroup}</li>
       <li>Сфера деятельности: {item.sphereActivity}</li>
       <li>Место работы, должность: {item.placeJob}</li>
       <li>Статус в партии: {item.statusPart}</li>
       <li>Избирался ли депутатом: {item.deputat}</li>
       <li>Контактная информация: {item.contact} </li>
    </ul>
  });


  return (
      <main className="PersonalCard_main">
        <div className="div_1">
          <p className="cancel" onClick={()=>setPersoncardEdit()}>X</p>
          <img src={Avatar} className="div_1__Avatar" alt="no img" ></img>
          <div className="div_1__FIO">{fioMember}</div>
        </div>

        <div className="div_2">
          {uli}
         <p className="div_2__edit" onClick={()=>{ setPersoncardEdit(); col('col6');  }}>Редактировать личную карточку</p> 
        </div>

      </main>
  )
}