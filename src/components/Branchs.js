import React, {useState} from 'react'
import '../styles/Branchs.css'

export  function Branchs({options}) {

  const [oblasti, setOblasti] = useState(false)
  const [raions, setRaions] = useState(false)
  const [city, setCity]  = useState(false)

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

  return (
    <div>
        Республика Беларусь &gt; Минский район &gt; Молодечно &gt; Отделение Воложино 7
      <div className='branchs'>
        <div>
          <span onClick={()=> setOblasti(!oblasti)}>Республика Беларусь</span>
        </div> 
        <div className='Placemargin1'>
          <span className={oblasti ? null : 'OblastiHide'} onClick={()=> setRaions(!raions)}>Области</span>
        </div>
        <div className='Placemargin2'>
          <span className={raions ? null : 'CityHide'} onClick={()=> setCity(!city)}>города</span>
        </div>  
      </div>
    </div>
  )
}
