import React from "react";
import Avatar from '../img/ava.png';
import '../styles/PersonalCardSystem.css';


export function PersonalCardEdit({setPersoncardEdit,col, infoCard } ){

  let fioMember = infoCard.map((tem) => {
    return (
      // <p>{tem.surname.toUpperCase()} {tem.name} {tem.parent}</p>
       <p>{tem.surname.toUpperCase()} {tem.name} {tem.parent}</p>
    )
  })

  let uli = infoCard.map((item) => {
    return <ul className="admindiv_2__ul">
       <li>Номер партийного билета: <span className="adminspan1">{item.numBilet}</span> </li>
       <li> <span className="adminspan2">Дата выдачи билета:</span>  {item.dateStart}</li>
       <li> <span className="adminspan2">Статус билета:</span>  {item.statusBilet}</li>
       <li> <span className="adminspan2">Пол:</span>  {item.sex}</li>
       <li> <span className="adminspan2">Дата рождения:</span>  {item.dateBirth}</li>
       <li> <span className="adminspan2">Дата вступления:</span>  {item.dateIssue}</li>
       <li> <span className="adminspan2">Место вступления:</span>  {item.placeIssue}</li>
       <li> <span className="adminspan2">Статус членства:</span>  {item.statusMember}</li>
       <li> <span className="adminspan2">Место постановки на учет:</span>  {item.uchetPlace} </li>
       <li> <span className="adminspan2">Образование: </span> {item.education}</li>
       <li> <span className="adminspan2">Социальная категория:</span>  {item.socialGroup}</li>
       <li> <span className="adminspan2">Сфера деятельности:</span>  {item.sphereActivity}</li>
       <li> <span className="adminspan2">Место работы:</span>  {item.placeJob} </li>
       <li> <span className="adminspan2">Должность:</span>  {item.postJob} </li>
       <li> <span className="adminspan2">Статус в партии:</span>  {item.statusPart}</li>
       <li> <span className="adminspan2">Избирался ли депутатом:</span>  {item.deputat}</li>
       <li> <span className="adminspan2">Адрес проживания:</span>  {item.livingAddress} </li>
       <li> <span className="adminspan2">Номер телефона:</span>  {item.telephoneNumber} </li>
       <li> <span className="adminspan2">Взносы: {item.vznos}</span>  </li>
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
      <p className="admincancel" onClick={()=>setPersoncardEdit()}>X</p>
      <div className="admindiv1_avatar_fio">
        <img src={Avatar} className="admindiv_1__Avatar" alt="no img" ></img>
        <div className="admindiv_1__FIO">{fioMember}</div>
      </div>
      <div className="admindiv_1__bilet" >
        <span onClick={()=>{setPersoncardEdit(); fetchPersonWord(infoCard[0].id) }}>Отчет Word</span>
        <span onClick={()=>{setPersoncardEdit(); fetchPersonExcel(infoCard[0].id) }}>Отчет Excel</span>
        </div>
      </div>
      

    <div className="admindiv_2">
      {uli}
     <div className="admindiv_2__edits" > <span onClick={()=>{ setPersoncardEdit(); col('col6');  }}>Редактировать личную карточку</span></div> 
    </div>

      </main>
  )
}