import React, {useState} from 'react'
import '../styles/Branchs.css'
import '../styles/Table.css'
import {fio} from '../components/FIO'

export  function Branchs({options}) {
  const [tablehidePOO, setTableHidePOO] = useState(true)
  const [oblasti, setOblasti] = useState(false)
  const [raions, setRaions] = useState(false)
  const [city, setCity]  = useState(false)
  const [b, setb] = useState([])

  const regPlcs = [];
  const entrPlcs = [];
  for (let key in options){
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
  }

  const fetchPOO = async ()=>{
    try{
     const response = await fetch("http://localhost:5059/UserPage/tablePOO/", {
       method: "get",
      "content-type" : "application/json; charset=utf-8"
     });
     let q = await response.json();
     await setb(q);
    }
    catch(err){
      console.log(err)
    }
   };

  let tablePOO = fio.sort((a,b)=>a.surname.localeCompare(b.surname)).map(function(item,index) {
    return <tr key={item.id}>
      <td> {index+1}</td>
       <td className="table__surname"><p  onClick={()=>{/* fetchOne(item.id); setPersoncardEdit(!personcardEdit);*/ }} className="table_span__surname">{item.surname}</p></td>
       <td>{item.name}</td>
       <td>{item.parent}</td>
       <td>{item.numBilet}</td>
       <td>{item.dateStart}</td>
       <td>{item.place}</td>
    </tr>
 })

  return (
    <div>
        {/* Республика Беларусь &gt; Минский район &gt; Молодечно &gt; Отделение Воложино 7 */}
      <div className='branchs'>
        <div>
          <span onClick={()=> setOblasti(!oblasti)}>Республика Беларусь</span>
        </div> 
        <div className='Placemargin1'>
          <span className={oblasti ? null : 'OblastiHide'} onClick={()=> setRaions(!raions)}>Области</span>
        </div>
        <div className='Placemargin2'>
          <span className={raions ? null : 'CityHide'} onClick={()=> {setCity(!city); setTableHidePOO(!tablehidePOO); fetchPOO()}}>города</span>
        </div>  
      </div>

      <table className={`tablePOO ${tablehidePOO ? 'hide' : ''}`}> 
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
          {tablePOO}
        </tbody>
      </table>
    </div>
  )
}
