import React, { useState } from 'react'
import '../styles/Spravochik.css'

export  function Spravochnik({options}) {

  const [placeissue, setPlaceissue] = useState(true)
  const [placeychet, setPlaceychet] = useState(true)
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

  const s = regPlcs.map(item =>{ return (<span className='PlaceIssue'>{item}<br/></span>)})
  const s1 = entrPlcs.map(item =>{ return (<span className='PlaceIssue'>{item}<br/></span>)})

  return (
    <div>
      <div className='spavochnik'>
       <div><span onClick={()=> setPlaceissue(!placeissue)}>Место вступления</span></div> 
         <div className='Placemargin'><span className={placeissue ? 'PlaceIssueHide' : null}>{s}</span></div> 
       <div><span onClick={()=> setPlaceychet(!placeychet)}>Место постановки на учет</span></div> 
         <div className='Placemargin'><span className={placeychet ? 'PlaceYchetHide' : null}>{s1}</span></div> 
      </div>
    </div>
  )
}
