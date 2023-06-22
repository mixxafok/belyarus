import React, { useState } from 'react'
import '../../styles/SpisokUsersSystem.css'
import Up from '../../icons/up.png'


export  function SpisokUsersSystem({col, setInfoRegUser}) {

  const [seletedLi1, setSelectedLi1] = useState(true)
  const [seletedLi2, setSelectedLi2] = useState(true)
  const [seletedLi3, setSelectedLi3] = useState(true)
  const [seletedLi4, setSelectedLi4] = useState(true)
  const [tablehideUsers, setTableHideUsers] = useState(true)
  const [Users, setUsers] = useState([]) 
  const setSelectedLi = (selectLi) =>
  {
    if(selectLi == 'li1'){
      setSelectedLi1(true);
      setSelectedLi2(!seletedLi2);
      setSelectedLi3(!seletedLi3);
      setSelectedLi4(!seletedLi4);
      setTableHideUsers(!tablehideUsers);
      fetchGetAdminsSystem();
    }
    if(selectLi == 'li2'){
      setSelectedLi1(!seletedLi1);
      setSelectedLi2(true);
      setSelectedLi3(!seletedLi3);
      setSelectedLi4(!seletedLi4);
      setTableHideUsers(!tablehideUsers);
      fetchGetAdminsYzels();
    }
    if(selectLi == 'li3'){
      setSelectedLi1(!seletedLi1);
      setSelectedLi2(!seletedLi2);
      setSelectedLi3(true);
      setSelectedLi4(!seletedLi4);
      setTableHideUsers(!tablehideUsers);
      fetchGetOperators();
    }
    if(selectLi == 'li4'){
      setSelectedLi1(!seletedLi1);
      setSelectedLi2(!seletedLi2);
      setSelectedLi3(!seletedLi3);
      setSelectedLi4(true);
      setTableHideUsers(!tablehideUsers);
      fetchGetInfoUsers();
    }
  }

  let tableUsers = Users.sort((a,b)=>a.surname.localeCompare(b.surname)).map(function(item,index) {
    return <tr key={item.id}>
      <td> {index+1}</td>
        <td className="table__surname"><p onClick={()=>{col('col11'); setInfoRegUser(item); }} className="table_span__surname">{item.surname}</p></td>
        <td>{item.name}</td>
        <td>{item.patronymic}</td>
        <td> {item.node}</td>
        <td>{item.lastdate}</td>
    </tr>
  });


const fetchGetAdminsSystem = async () =>{
  setUsers([]);
  try{
    const responce = await fetch('http://secondsin-001-site1.dtempurl.com/UserPage/GetSystemAdmins/', {
    method: "get"
    });
    const q = await responce.json()
    setUsers(q);
   // console.log(Users)
  }
  catch(err){
    console.log(err)
  }
}
const fetchGetAdminsYzels = async () =>{
  setUsers([]);
  try{
    const responce = await fetch('http://secondsin-001-site1.dtempurl.com/UserPage/GetNodeAdmins/', {
    method: "get"
    });
    const q = await responce.json()
    setUsers(q);
   // console.log(Users)
  }
  catch(err){
    console.log(err)
  }
}
const fetchGetOperators = async () =>{
  setUsers([]);
  try{
    const responce = await fetch('http://secondsin-001-site1.dtempurl.com/UserPage/GetOperators/', {
    method: "get"
    });
    const q = await responce.json()
    setUsers(q);
   // console.log(Users)
  }
  catch(err){
   console.log(err)
  }
}
const fetchGetInfoUsers = async () =>{
  setUsers([]);
  try{
    const responce = await fetch('http://secondsin-001-site1.dtempurl.com/UserPage/GetInfoUsers/', {
    method: "get"
    });
    const q = await responce.json()
    setUsers(q);
   // console.log(Users)
  }
  catch(err){
    console.log(err)
  }
}

  return (
    <div className='SpisokUsersSystem'>
      <ul className='ul_SpisokUsers'>
        <li className={seletedLi1 ? '' : 'ul_SpisilUsers__li_Hide'}><span onClick={()=>setSelectedLi('li1')}>Администраторы системы</span></li>
        <li className={seletedLi2 ? '' : 'ul_SpisilUsers__li_Hide'}><span onClick={()=>setSelectedLi('li2')}>Администраторы узлов</span></li>
        <li className={seletedLi3 ? '' : 'ul_SpisilUsers__li_Hide'}><span onClick={()=>setSelectedLi('li3')}>Операторы</span></li>
        <li className={seletedLi4 ? '' : 'ul_SpisilUsers__li_Hide'}><span onClick={()=>setSelectedLi('li4')}>Информационные пользователи</span></li>
      </ul>

      <table className={` ${tablehideUsers ? 'ul_SpisilUsers__li_Hide' : 'tableUsers'}`}> 
     <a href='#start_table' className="start_fixed"><img src={Up} alt='↑' width='20px'/></a>
        <thead>
           <tr>
              <td>Номер</td>
              <td>Фамилия</td>
              <td>Имя</td>
              <td>Отчество</td>
              <td >Подконтрольный узел</td>
              <td>Последняя дата входа</td>
           </tr>
        </thead>
        <tbody>
           {tableUsers}
        </tbody>
     </table>
    </div>
  )
}
