import React, {useState} from 'react'
import '../styles/Branchs.css'
import '../styles/Table.css'
import { Raions, Novopolotsk, Polotsk, Oblasti } from './FIO.js'

export  function BranchsSystemLog() {
  const [openCity, setOpenCity] = useState(false)
  const [openCity1, setOpenCity1] = useState(false)
  const [openRaion, setOpenRaion] = useState(false)
  const [openOblast, setOpenOblast] = useState(false)
  const [respublic, setRespublic] = useState(false)
  const [oblasti, setOblasti] = useState(false)
  const [raions, setRaions] = useState(false)
  const [city, setCity]  = useState(false)
  const [InputYzel, setInputYzel] = useState('')
  const [LabelYzel, setLabelYzel] = useState('')

  const raion = Raions.map(item => {
    return <li key={item.id} className={(LabelYzel == item.raion && openRaion) ? 'selectedRaion' : 'selectedRaionNull'}
            onClick={()=> {setRaions(!raions); setLabelYzel(item.raion); otdel(item.id); setOpenRaion(!openRaion) } }>
           <span >{item.raion}</span> 
          </li>
  })
  
  const oblast = Oblasti.map(item => {
    return <li key={item.id} className={(LabelYzel == item.oblast && openOblast) ? 'selectedRaion' : 'selectedRaionNull'}
            onClick={()=> {setOblasti(!oblasti); setLabelYzel(item.oblast); otdel(item.id); setOpenOblast(!openOblast) } }>
           <span >{item.oblast}</span> 
          </li>
  })

// открытие отделение соответствуя районам
  const [p, setp] = useState([])
  let otdel = (number)=>{ 
      if (number == 2){
      setp ( Novopolotsk.map(item => {
        return <li key={item.id} className={(LabelYzel == item.city && openCity) ? 'selectedRaion' : 'selectedRaionNull'}
        onClick={()=> { setLabelYzel(item.city); /*otdel(item.id)*/; setOpenCity(!openCity) } }>
        <span> {item.city}</span>
        </li>
        }))
        console.log(number)
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
          <span onClick={()=>{ setRespublic(!respublic); setOblasti(false); setRaions(false); setLabelYzel('Витебская областная организация')}}>Республика Беларусь</span>
        </div> 
        <div className= {respublic ? 'Placemargin1' : 'PlacemarginHide'}>
          <span onClick={()=> { setRaions(false);}} >{oblast}</span>
            <div className={oblasti ? 'Placemargin2' : 'CityHide'}>
              <span onClick={()=> setRaions(!raions)} >{raion}</span>
                <div className={raions ? 'Placemargin3' : 'CityHide'}>
                  <span >{p}</span>
                </div>  
            </div>
        </div>

      </div>
    </div>
  )
}
