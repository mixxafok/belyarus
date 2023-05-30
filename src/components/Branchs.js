import React, {useState} from 'react'
import '../styles/Branchs.css'
import '../styles/Table.css'
import { Raions, Novopolotsk, Polotsk } from './FIO.js'

export  function Branchs() {
  const [openRaion, setOpenRaion] = useState(false)
  const [oblasti, setOblasti] = useState(false)
  const [raions, setRaions] = useState(false)
  const [city, setCity]  = useState(false)
  const [InputYzel, setInputYzel] = useState('')
  const [LabelYzel, setLabelYzel] = useState('')

  let raion = Raions.map(item => {
    return <li key={item.id} className={(LabelYzel == item.raion && openRaion) ? 'selectedRaion' : 'selectedRaionNull'}
            onClick={()=> {setRaions(!raions); setLabelYzel(item.raion); otdel(item.id); setOpenRaion(!openRaion) } }>
           <span >{item.raion}</span> 
          </li>
  })
  
// открытие отделение соответствуя районам
  const [p, setp] = useState([])
  let otdel = (number)=>{ 
      if (number == 2){
      setp ( Novopolotsk.map(item => {
        return <li key={item.id} onClick={()=> {setCity(!city);}}> {item.raion}</li>
        }))
        console.log(number)
      }
     else if (number == 3){
       setp ( Polotsk.map(item => {
        return <li key={item.id} onClick={()=> {setCity(!city);}}> {item.raion}</li>
        }))
        console.log(p)
      }
      else {
        setp(null)
      }
  }




/*  const regPlcs = [];
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
*/
/*
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
*/

  return (
    <div>
        {/* Республика Беларусь &gt; Минский район &gt; Молодечно &gt; Отделение Воложино 7 */}
      <div className='branchs'>
        <div>
          <span onClick={()=>{ setOblasti(!oblasti); setLabelYzel('Витебская областная организация')}}>Витебская областная организация</span>
        </div> 
        <div className= {oblasti ? 'Placemargin1' : 'PlacemarginHide'}>
          <ul >{raion}</ul>
            <div className='Placemargin2'>
              <span className={raions ? null : 'CityHide'} >{p}</span>
            </div>  
        </div>
        </div>

        <div className='branchs_input'>
          <label >Добавить узел в &lt;&lt; <span style={{color: 'brown'}}>{LabelYzel}</span>  &gt;&gt; </label>
          <input className='input_addYzel'
            type='search'
            value={InputYzel}
            onChange={e=>setInputYzel(e.target.value)}
          />
        </div>
    </div>
  )
}
