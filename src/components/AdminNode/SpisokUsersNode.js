import React, { useState } from 'react'
import '../../styles/SpisokUsersSystem.css'
import Up from '../../icons/up.png'
import Close from '../../icons/close.png'


export  function SpisokUsersNode({col, setInfoRegUser}) {

  const [seletedLi3, setSelectedLi3] = useState(true)
  const [seletedLi4, setSelectedLi4] = useState(true)
  const [tablehideUsers, setTableHideUsers] = useState(true)
  const [Users, setUsers] = useState([]) 
  const setSelectedLi = (selectLi) =>
  {

    if(selectLi == 'li3'){
      setSelectedLi3(true);
      setSelectedLi4(!seletedLi4);
      setTableHideUsers(!tablehideUsers);
      fetchGetOperators();
    }
    if(selectLi == 'li4'){
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
        <td>{item.parent}</td>
        <td> {item.node}</td>
        <td>{item.lastLoginDate}</td>
        <td onClick={()=>{RemoveUser(item.id )}}><span><img className='spisokUser_img_close' src={Close} alt='X' width='14px'/></span></td>
    </tr>
  });

  const RemoveUser = async(itemid) =>{

    if(window.confirm('Вы точно хотите удалить этого пользователя?')){
      try{
      const responce = await fetch(`http://partiyabase.by:5000/UserPage/DeleteRegUser?id=${itemid}`, {
      method: "get"
      });
      if(seletedLi3) fetchGetOperators();
      if(seletedLi4) fetchGetInfoUsers();
     // console.log(Users)
    }
    catch(err){
      console.log(err)
    }
    }
    
  }


const fetchGetOperators = async () =>{
  setUsers([]);
  try{
    const responce = await fetch('http://partiyabase.by:5000/UserPage/GetOperators/', {
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
    const responce = await fetch('http://partiyabase.by:5000/UserPage/GetInfoUsers/', {
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
              <td>Подконтрольный узел</td>
              <td>Последняя дата входа</td>
              <td>&nbsp;&nbsp;</td>
           </tr>
        </thead>
        <tbody>
           {tableUsers}
        </tbody>
     </table>
    </div>
  )
}
