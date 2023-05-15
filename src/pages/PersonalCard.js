import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Avatar from '../img/ava.png';
import {fio} from '../components/FIO.js';
import '../styles/PersonalCard.css';
import '../styles/Header.css';

export function PersonalCard({setPersoncard} ){


  let uli = fio.filter((tem) => {return tem.id == 1 }).map((item) => {
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
       <li>Контактная информация: {item.contact}</li>
    </ul>
  });


  return (
      <main className="PersonalCard_main">
        <div className="div_1">
          <p className="cancel" onClick={()=>setPersoncard()}>X</p>
          <img src={Avatar} className="div_1__Avatar" alt="no img" width='23.3mm' height='31mm'></img>
          <div className="div_1__FIO">ТЕМОШЕНКО Кирилл Викторович</div>
        </div>

        <div className="div_2">
          {uli}
        </div>

      </main>
  )
}