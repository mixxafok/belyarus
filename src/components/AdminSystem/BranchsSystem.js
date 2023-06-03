import React, {useState} from 'react'
import '../../styles/Branchs.css'
import '../../styles/Table.css'
import { Raions, Novopolotsk, Polotsk, Oblasti } from '../FIO.js'

export  function BranchsSystem() {
  const [openCity, setOpenCity] = useState(false)
  const [openRaion, setOpenRaion] = useState(false)
  const [openOblast, setOpenOblast] = useState(false)
  const [openRespublic,setOpenRespublic] = useState(false)
  const [respublic, setRespublic] = useState(false)
  const [oblasti, setOblasti] = useState(false)
  const [raions, setRaions] = useState(false)
  const [city, setCity]  = useState(false)
  const [InputYzel, setInputYzel] = useState('')
  const [LabelYzel, setLabelYzel] = useState('')

  //открытие выпадающего списка
  const raion = Raions.map(item => {
    return <li key={item.id} className={(LabelYzel == item.raion && openRaion) ? 'selectedRaion' : 'selectedRaionNull'}
            onClick={()=> { setLabelYzel(item.raion); setOpenRaion(!openRaion) } }>
           <span >{item.raion}</span> 
          </li>
  })
  
  const oblast = Oblasti.map(item => {
    return <li key={item.id} className={(LabelYzel == item.oblast && openOblast) ? 'selectedRaion' : 'selectedRaionNull'}
            onClick={()=> { setLabelYzel(item.oblast);  setOpenOblast(!openOblast) } }>
           <span >{item.oblast}</span> 
          </li>
  })

  const [p, setp] = useState([])
  const otdel =  Novopolotsk.map(item => {
        return <li key={item.id} className={(LabelYzel == item.city && openCity) ? 'selectedRaion' : 'selectedRaionNull'}
        onClick={()=> { setLabelYzel(item.city); /*otdel(item.id)*/; setOpenCity(true) } }>
        <span> {item.city}</span>
        </li>
        })

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
          <span onClick={()=>{setOpenRespublic(!openRespublic); setOpenOblast(false); setOpenRaion(false); setLabelYzel('Витебская областная организация')}}>Республика Беларусь</span>
        </div> 
        <div className= {openRespublic ? 'Placemargin1' : 'PlacemarginHide'}>
          <span>{oblast}</span>
            <div className={openOblast ? 'Placemargin2' : 'CityHide'}>
              <span>{raion}</span>
                <div className={openRaion ? 'Placemargin3' : 'CityHide'}>
                  <span>{otdel}</span>
                </div>  
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
