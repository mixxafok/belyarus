import React, {useState} from 'react'
import '../../styles/Branchs.css'
import '../../styles/Table.css'
import Arrow from '../../icons/arrow.png'
import Plus from '../../icons/more.png'


export  function BranchsSystemLog({formInput, setFormInput}) {
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
      fetchYzel(3002, false)
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
            setLabelYzel(item.title); setLabelYzelOblast(' - ' + item.title); ar.push({ Id: item.id, nazva: item.title});
            setFormInput({...formInput, nodeId: (ar[ar.length-1].Id), Yzel: (ar[ar.length-1].nazva)})}}>
            {item.title}
            </span> 
          </li>
   }
  })

  const raion = raionYzels.map((item) => { {
    return <li key={item.id} >
           <span onClick={()=> {openCloseYzel('raion'); fetchOtdelYzel(item.id, item.isEndNode);
            setLabelYzel(item.title); setLabelYzelRaion(' - ' + item.title); ar.push({ Id: item.id, nazva: item.title});
            setFormInput({...formInput, nodeId: (ar[ar.length-1].Id), Yzel: (ar[ar.length-1].nazva)}) }}>
            {item.title}
            </span> 
          </li>
   }
  })

  const otdel = otdelYzels.map((item) => { {
    return <li key={item.id} >
           <span onClick={()=> {openCloseYzel('otdel'); fetchThenOtdelYzel(item.id, item.isEndNode);
            setLabelYzel(item.title); setLabelYzelOtdel(' - ' + item.title); ar.push({ Id: item.id, nazva: item.title});
            setFormInput({...formInput, nodeId: (ar[ar.length-1].Id), Yzel: (ar[ar.length-1].nazva)}) }}>
            {item.title}
            </span> 
          </li>
   }
  })

  const thenOtdel = thenOtdelYzels.map((item) => { {
    return <li key={item.id} >
           <span onClick={()=> {openCloseYzel('otdel'); fetchThenOtdelYzel(item.id, item.isEndNode);
            setLabelYzel(item.title); setLabelYzelOtdel(' - ' + item.title); ar.push({ Id: item.id, nazva: item.title});
            setFormInput({...formInput, nodeId: (ar[ar.length-1].Id), Yzel: (ar[ar.length-1].nazva)}) }}>
            {item.title}
            </span> 
          </li>
   }
  })
  
  const fetchYzel = async (itemid, itemisEndNode)=>{
    if(!itemisEndNode){
      try{
     const response = await fetch(`http://secondsin-001-site1.dtempurl.com/UserPage/getChildrens?id=${itemid}`, {
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
     const response = await fetch(`http://secondsin-001-site1.dtempurl.com/UserPage/getChildrens?id=${itemid}`, {
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
     const response = await fetch(`http://secondsin-001-site1.dtempurl.com/UserPage/getChildrens?id=${itemid}`, {
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
     const response = await fetch(`http://secondsin-001-site1.dtempurl.com/UserPage/getChildrens?id=${itemid}`, {
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

  return (
    <div>
      <div className='branchs'>
        <div>
            {(openRespublic || openOblast || openRaion || openOtdel) ? 
              <span onClick={()=>{
                if(openOtdel){openCloseYzel('raion'); ar.pop(); setFormInput({...formInput, nodeId: (ar[ar.length-1].Id), Yzel: (ar[ar.length-1].nazva)}) }
                else if(openRaion){openCloseYzel('oblasti'); ar.pop(); setFormInput({...formInput, nodeId: (ar[ar.length-1].Id), Yzel: (ar[ar.length-1].nazva)}) }
                else if (openOblast){openCloseYzel('respublic'); ar.pop();setFormInput({...formInput, nodeId: (ar[ar.length-1].Id), Yzel: (ar[ar.length-1].nazva)})}
                else {openCloseYzel('world'); ar.pop();setFormInput({...formInput, nodeId: (ar[ar.length-1].Id), Yzel: (ar[ar.length-1].nazva)})}
                }}>
                <img src={Arrow} alt='←' width='14px' style={{display: 'inline', marginRight: '1%'}}/>
              </span>
              :
              <span onClick={()=>{ openCloseYzel('respublic'); setLabelYzel('Республика Беларусь');
              ar.push({Id: 3002, nazva: 'Республика Беларусь'});
              setFormInput({...formInput, nodeId: (ar[ar.length-1].Id), Yzel: (ar[ar.length-1].nazva)}) }}>
                <img src={Plus} alt='+' width='14px' style={{display: 'inline', marginRight: '1%'}}/>
              </span>
            }
            
          <span className='branchs__span__cursor_default'> Республика Беларусь</span> 
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
      
    </div>
  )
}
