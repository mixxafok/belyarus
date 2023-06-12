import React, { useState } from 'react'
import '../../styles/SpisokUsersSystem.css'
import { uzels } from '../FIO'
import Up from '../../icons/up.png'


export  function SpisokUsersSystem({col}) {

  const [seletedLi1, setSelectedLi1] = useState(true)
  const [seletedLi2, setSelectedLi2] = useState(true)
  const [seletedLi3, setSelectedLi3] = useState(true)
  const [seletedLi4, setSelectedLi4] = useState(true)
  const [tablehideUsers, setTableHideUsers] = useState(true)

  const setSelectedLi = (selectLi) =>
  {
    if(selectLi == 'li1'){
      setSelectedLi1(true);
      setSelectedLi2(!seletedLi2);
      setSelectedLi3(!seletedLi3);
      setSelectedLi4(!seletedLi4);
      setTableHideUsers(!tablehideUsers)
    }
    if(selectLi == 'li2'){
      setSelectedLi1(!seletedLi1);
      setSelectedLi2(true);
      setSelectedLi3(!seletedLi3);
      setSelectedLi4(!seletedLi4);
      setTableHideUsers(!tablehideUsers)
    }
    if(selectLi == 'li3'){
      setSelectedLi1(!seletedLi1);
      setSelectedLi2(!seletedLi2);
      setSelectedLi3(true);
      setSelectedLi4(!seletedLi4);
      setTableHideUsers(!tablehideUsers)
    }
    if(selectLi == 'li4'){
      setSelectedLi1(!seletedLi1);
      setSelectedLi2(!seletedLi2);
      setSelectedLi3(!seletedLi3);
      setSelectedLi4(true);
      setTableHideUsers(!tablehideUsers)
    }
  }

  let tableUsers = uzels.sort((a,b)=>a.surname.localeCompare(b.surname)).map(function(item,index) {
    return <tr key={item.id}>
      <td> {index+1}</td>
        <td className="table__surname"><p onClick={()=>{col('col11') }} className="table_span__surname">{item.surname}</p></td>
        <td>{item.name}</td>
        <td>{item.parent}</td>
        <td> {item.yzel}</td>
        <td>{item.lastdate}</td>
    </tr>
  });

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
              <td>Подконтрольный узел</td>
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
