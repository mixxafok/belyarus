import React, {useState} from 'react'
import '../../styles/Branchs.css'
import '../../styles/Table.css'
import Close from '../../icons/close.png'
import Edit from '../../icons/edit-text.png'
import Arrow from '../../icons/arrow.png'
import Plus from '../../icons/more.png'
import Save from '../../icons/save.png'

export  function BranchsSystemVznos({col, labelYzelVznos, setLabelYzelVznos}) {
  const [openOtdel, setOpenOtdel] = useState(false);
  const [openRaion, setOpenRaion] = useState(false);
  const [openOblast, setOpenOblast] = useState(false);
  const [openRespublic,setOpenRespublic] = useState(false);
  const [yzels, setYzels] = useState([]);
  const [raionYzels, setRaionYzels] = useState([]);
  const [otdelYzels, setOtdelYzels] = useState([]);
  const [thenOtdelYzels, setThenOtdelYzels] = useState([]);
  const [LabelYzel, setLabelYzel] = useState('');
  const [LabelYzelOblast,setLabelYzelOblast] = useState('') ;
  const [LabelYzelRaion,setLabelYzelRaion] = useState('');
  const [LabelYzelOtdel,setLabelYzelOtdel] = useState('');
  //console.log(respublic[0].id)

  const [ar,setAr] = useState([{
    Id: 0,
    nazva: ''
  }]);

  const startNode = JSON.parse(localStorage.getItem('LoginPassword'))

  function openCloseYzel (open) {
    if(open == 'world'){
      setOpenRespublic(false)
      setOpenOblast(false)
      setOpenRaion(false)
      setOpenOtdel(false)
      setLabelYzel('')
    }
    if(open == 'respublic'){
      setOpenRespublic(!openRespublic)
      setOpenOblast(false)
      setOpenRaion(false)
      setOpenOtdel(false)
      fetchYzel(startNode.oblId, false)
      setLabelYzelOblast('')
    }
    if(open == 'oblasti'){
      setOpenRespublic(false)
      setOpenOblast(!openOblast)
      setOpenRaion(false)
      setOpenOtdel(false)
      setLabelYzelRaion('')
    }
    if(open == 'raion'){
      setOpenRespublic(false)
      setOpenOblast(false)
      setOpenRaion(!openRaion)
      setOpenOtdel(false)
      setLabelYzelOtdel('')
    }
    if(open == 'otdel'){
      setOpenRespublic(false)
      setOpenOblast(false)
      setOpenRaion(false)
      setOpenOtdel(!openOtdel);
    }
    
  }

  //открытие выпадающего списка

  const oblast = yzels.map((item) => { {
    return <li key={item.id} >
           <span onClick={()=>{openCloseYzel('oblasti'); fetchRaionYzel(item.id, item.isEndNode); 
            setLabelYzelVznos({...labelYzelVznos, nodeId: item.id, nazva: item.title}); 
            setLabelYzelOblast(' - ' + item.title); ar.push({ Id: item.id, nazva: item.title});
            }}>
            {item.title}
            </span> 
          </li>
   }
  })

  const raion = raionYzels.map((item) => { {
    return <li key={item.id} >
           <span onClick={()=> {openCloseYzel('raion'); fetchOtdelYzel(item.id, item.isEndNode);
            setLabelYzelVznos({...labelYzelVznos, nodeId: item.id, nazva: item.title}); 
            setLabelYzelRaion(' - ' + item.title); ar.push({ Id: item.id, nazva: item.title});
             }}>
            {item.title}
            </span> 
          </li>
   }
  })

  const otdel = otdelYzels.map((item) => { {
    return <li key={item.id} >
           <span onClick={()=> {openCloseYzel('otdel'); fetchThenOtdelYzel(item.id, item.isEndNode);
            setLabelYzelVznos({...labelYzelVznos, nodeId: item.id, nazva: item.title});
            setLabelYzelOtdel(' - ' + item.title); ar.push({ Id: item.id, nazva: item.title});
             }}>
            {item.title}
            </span> 
          </li>
   }
  })

  const thenOtdel = thenOtdelYzels.map((item) => { {
    return <li key={item.id} >
           <span onClick={()=> {openCloseYzel('otdel'); fetchThenOtdelYzel(item.id, item.isEndNode);
            setLabelYzelVznos({...labelYzelVznos, nodeId: item.id, nazva: item.title}); 
            setLabelYzelOtdel(' - ' + item.title); ar.push({ Id: item.id, nazva: item.title});
             }}>
            {item.title}
            </span> 
          </li>
   }
  })


  const fetchYzel = async (itemid, itemisEndNode)=>{
    if(!itemisEndNode){
      try{
     const response = await fetch(`http://partiyabase.by:5000/UserPage/getChildrens?id=${itemid}`, {
       method: "get",
      "content-type" : "application/json; charset=utf-8"
     });
     let q = await response.json();
      await setYzels(q);
     // console.log(q[0].isEndNode)
    }
    catch(err){
      console.log(err)
      setYzels([]);
    }
   }
   else{
    console.log('else');
    setYzels([]);
   }
  }

  const fetchRaionYzel = async (itemid, itemisEndNode)=>{
    if(!itemisEndNode){
      try{
     const response = await fetch(`http://partiyabase.by:5000/UserPage/getChildrens?id=${itemid}`, {
       method: "get",
      "content-type" : "application/json; charset=utf-8"
     });
     let q = await response.json();
      setRaionYzels(q);
     // console.log(q[0].isEndNode)
    }
    catch(err){
      console.log(err)
      setRaionYzels([]);
    }
   }
   else{
     console.log('else');
     setRaionYzels([]);
   }
  }

  const fetchOtdelYzel = async (itemid, itemisEndNode)=>{
    if(!itemisEndNode){
      try{
     const response = await fetch(`http://partiyabase.by:5000/UserPage/getChildrens?id=${itemid}`, {
       method: "get",
      "content-type" : "application/json; charset=utf-8"
     });
     let q = await response.json();
       setOtdelYzels(q);
     // console.log(q[0].isEndNode)
    }
    catch(err){
      console.log(err)
      setOtdelYzels([]);
    }
   }
   else{
      console.log('else');
     setOtdelYzels([]);
   }
  }

  const fetchThenOtdelYzel = async (itemid, itemisEndNode)=>{
    if(!itemisEndNode){
      try{
     const response = await fetch(`http://partiyabase.by:5000/UserPage/getChildrens?id=${itemid}`, {
       method: "get",
      "content-type" : "application/json; charset=utf-8"
     });
     let q = await response.json();
     setThenOtdelYzels(q);
     // console.log(q[0].isEndNode)
    }
    catch(err){
      console.log(err)
      setThenOtdelYzels([]);
    }
   }
   else{
      console.log('else');
      setThenOtdelYzels([]);
   }
  }

//console.log(labelYzelVznos)
  return (
    <div>
      <div className='branchs'>
        <div>
            {(openRespublic || openOblast || openRaion || openOtdel) ? 
              <span onClick={()=>{
                if(openOtdel){openCloseYzel('raion'); ar.pop(); setLabelYzelVznos({...labelYzelVznos, nodeId: ar[ar.length-1].Id, nazva: ar[ar.length-1].nazva}); }
                else if(openRaion){openCloseYzel('oblasti'); ar.pop(); setLabelYzelVznos({...labelYzelVznos, nodeId: ar[ar.length-1].Id, nazva: ar[ar.length-1].nazva});  }
                else if (openOblast){openCloseYzel('respublic'); ar.pop(); setLabelYzelVznos({...labelYzelVznos, nodeId: ar[ar.length-1].Id, nazva: ar[ar.length-1].nazva});}
                else {openCloseYzel('world'); ar.pop(); setLabelYzelVznos({...labelYzelVznos, nodeId: ar[ar.length-1].Id, nazva: ar[ar.length-1].nazva});}}}>
                <img src={Arrow} alt='←' width='14px' style={{display: 'inline', marginRight: '1%'}}/>
              </span>
              :
              <span onClick={()=>{ openCloseYzel('respublic'); setLabelYzel(startNode.obl);
              ar.push({Id: startNode.oblId, nazva: startNode.obl}); setLabelYzelVznos({...labelYzelVznos, nodeId: ar[ar.length-1].Id, nazva: ar[ar.length-1].nazva});
               }}>
                <img src={Plus} alt='+' width='14px' style={{display: 'inline', marginRight: '1%'}}/>
              </span>
            }
            
          <span className='branchs__span__cursor_default'> {startNode.obl}</span> 
          <span className='branchs__span__cursor_default'> {LabelYzelOblast}</span> 
          <span className='branchs__span__cursor_default'> {LabelYzelRaion}</span> 
          <span className='branchs__span__cursor_default'> {LabelYzelOtdel}</span> 
        </div> 
        <div className='Placemargin1'>
          <span className= {openRespublic ? 'Placemargin1' : 'PlacemarginHide'}>{oblast}</span>
          <span className= {openOblast ? 'Placemargin1' : 'PlacemarginHide'}>{raion}</span>
          <span className= {openRaion ? 'Placemargin1' : 'PlacemarginHide'}>{otdel}</span>
          <span className= {openOtdel ? 'Placemargin1' : 'PlacemarginHide'}>{thenOtdel}</span>
        </div>
      </div>
      
      <div className='branchs_input'>
          <label >Выбран узел &lt;&lt; <span style={{color: 'brown'}}>{ar[ar.length-1].nazva}</span>  &gt;&gt; </label>
          {/* <input className='input_addYzel'
            type='search'
            value={InputYzel.nazva}
            onChange={e=>setInputYzel({...InputYzel, nazva: e.target.value})}
          /> */}
          <button className='BranchsAdd_button' onClick={()=>{(labelYzelVznos.nodeId == 0) ? alert("Узел не выбран") : col('col7a') }}>
              Открыть
          </button>
        </div>
    </div>
  )
}
