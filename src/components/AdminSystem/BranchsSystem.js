import React, {useState} from 'react'
import '../../styles/Branchs.css'
import '../../styles/Table.css'
import Close from '../../icons/close.png'
import Edit from '../../icons/edit-text.png'
import Arrow from '../../icons/arrow.png'
import Plus from '../../icons/more.png'
import Save from '../../icons/save.png'

export  function BranchsSystem() {
  const [openOtdel, setOpenOtdel] = useState(false);
  const [openRaion, setOpenRaion] = useState(false);
  const [openOblast, setOpenOblast] = useState(false);
  const [openRespublic,setOpenRespublic] = useState(false);
  const [yzels, setYzels] = useState([]);
  const [raionYzels, setRaionYzels] = useState([]);
  const [otdelYzels, setOtdelYzels] = useState([]);
  const [thenOtdelYzels, setThenOtdelYzels] = useState([]);
  const [InputYzel, setInputYzel] = useState({
    parentId: 0,
    nazva: ''
  });
  const [InputEditYzel, setInputEditYzel] = useState({
    id: 0,
    title: ''
  });

  const [openEditYzel, setOpenEditYzel] = useState({
    id:0,
    isOpen: false
  });
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
console.log(InputEditYzel)
  const oblast = yzels.map((item) => { {
    return <li key={item.id} >
           <span onClick={()=>{openCloseYzel('oblasti'); fetchRaionYzel(item.id, item.isEndNode); 
            setLabelYzel(item.title); setInputYzel({...InputYzel, parentId: item.id}); setLabelYzelOblast(' - ' + item.title);
            ar.push({ Id: item.id, nazva: item.title})}}>
            {item.title}
            </span> 
            <span key={item.id} onClick={()=>{setOpenEditYzel({... openEditYzel, id: item.id, isOpen: !openEditYzel.isOpen});}} >
              <img src={Edit} alt='☺' width='11px' style={{display: 'inline', marginLeft: '2%'}}/>
            </span> 
            {(openEditYzel.isOpen && item.id == openEditYzel.id) ? (<span  >
             <span key={item.id} onClick={()=>{fetchEditYzel()}}><img src={Save} alt='☺' width='12px' style={{display: 'inline', marginLeft: '2%'}}/></span> 
              <input className='input_openIditYzel' type='text' placeholder={item.title}
             onChange={e=>setInputEditYzel ({...InputEditYzel, id: item.id, title: e.target.value})}/>
            </span>    ) : null}
            <span onClick={()=>{RemoveYzel(item.title, item.isEndNode, item.id )}}> 
              <img src={Close} alt='X' width='9px' style={{display: 'inline', marginLeft: '2%'}}/>
            </span>
          </li>
   }
  })

  const raion = raionYzels.map((item) => { {
    return <li key={item.id} >
           <span onClick={()=> {openCloseYzel('raion'); fetchOtdelYzel(item.id, item.isEndNode);
            setLabelYzel(item.title); setInputYzel({...InputYzel, parentId: item.id}); setLabelYzelRaion(' - ' + item.title);
            ar.push({ Id: item.id, nazva: item.title}) }}>
            {item.title}
            </span> 
            <span key={item.id} onClick={()=>{setOpenEditYzel({... openEditYzel, id: item.id, isOpen: !openEditYzel.isOpen})}} >
              <img src={Edit} alt='☺' width='11px' style={{display: 'inline', marginLeft: '2%'}}/>
            </span> 
            {(openEditYzel.isOpen && item.id == openEditYzel.id) ? (<span  >
             <span key={item.id} onClick={()=>{fetchEditYzel()}}><img src={Save} alt='☺' width='12px' style={{display: 'inline', marginLeft: '2%'}}/></span> 
              <input className='input_openIditYzel' type='text' placeholder={item.title}
             onChange={e=>setInputEditYzel ({...InputEditYzel, id: item.id, title: e.target.value})}/>
            </span>    ) : null}
            <span onClick={()=>{RemoveYzel(item.title, item.isEndNode, item.id )}}> 
              <img src={Close} alt='X' width='9px' style={{display: 'inline', marginLeft: '2%'}}/>
            </span>
          </li>
   }
  })

  const otdel = otdelYzels.map((item) => { {
    return <li key={item.id} >
           <span onClick={()=> {openCloseYzel('otdel'); fetchThenOtdelYzel(item.id, item.isEndNode);
            setLabelYzel(item.title); setInputYzel({...InputYzel, parentId: item.id}); setLabelYzelOtdel(' - ' + item.title);
            ar.push({ Id: item.id, nazva: item.title}) }}>
            {item.title}
            </span> 
            <span key={item.id} onClick={()=>{setOpenEditYzel({... openEditYzel, id: item.id, isOpen: !openEditYzel.isOpen})}} >
              <img src={Edit} alt='☺' width='11px' style={{display: 'inline', marginLeft: '2%'}}/>
            </span> 
            {(openEditYzel.isOpen && item.id == openEditYzel.id) ? (<span  >
             <span key={item.id} onClick={()=>{fetchEditYzel()}}><img src={Save} alt='☺' width='12px' style={{display: 'inline', marginLeft: '2%'}}/></span> 
              <input className='input_openIditYzel' type='text' placeholder={item.title}
             onChange={e=>setInputEditYzel ({...InputEditYzel, id: item.id, title: e.target.value})}/>
            </span>    ) : null}
            <span onClick={()=>{RemoveYzel(item.title, item.isEndNode, item.id )}}> 
              <img src={Close} alt='X' width='9px' style={{display: 'inline', marginLeft: '2%'}}/>
            </span>
          </li>
   }
  })

  const thenOtdel = thenOtdelYzels.map((item) => { {
    return <li key={item.id} >
           <span onClick={()=> {openCloseYzel('otdel'); fetchThenOtdelYzel(item.id, item.isEndNode);
            setLabelYzel(item.title); setInputYzel({...InputYzel, parentId: item.id}); setLabelYzelOtdel(' - ' + item.title);
            ar.push({ Id: item.id, nazva: item.title}) }}>
            {item.title}
            </span> 
            <span key={item.id} onClick={()=>{setOpenEditYzel({... openEditYzel, id: item.id, isOpen: !openEditYzel.isOpen})}} >
              <img src={Edit} alt='☺' width='11px' style={{display: 'inline', marginLeft: '2%'}}/>
            </span> 
            {(openEditYzel.isOpen && item.id == openEditYzel.id) ? (<span  >
             <span key={item.id} onClick={()=>{fetchEditYzel()}}><img src={Save} alt='☺' width='12px' style={{display: 'inline', marginLeft: '2%'}}/></span> 
              <input className='input_openIditYzel' type='text' placeholder={item.title}
             onChange={e=>setInputEditYzel ({...InputEditYzel, id: item.id, title: e.target.value})}/>
            </span>    ) : null}
            <span onClick={()=>{RemoveYzel(item.title, item.isEndNode, item.id )}}> 
              <img src={Close} alt='X' width='9px' style={{display: 'inline', marginLeft: '2%'}}/>
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

  const RemoveYzel = async(isEndNodeYzel, itemid) =>{
    if(isEndNodeYzel){
      if( window.confirm('Вы точно хотите удалить этот узел?')){
      // setYzels(yzels.filter(tem => tem.title != titleYzel));
       try{
        await fetch(`http://secondsin-001-site1.dtempurl.com/UserPage/DeleteNode?id=${itemid}`, {
        method: 'post',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',  
          },
        }); 
        if(openRespublic) fetchYzel(InputYzel.parentId);
        if(openOblast) fetchRaionYzel(InputYzel.parentId);
        if(openRaion) fetchOtdelYzel(InputYzel.parentId);
       }
       catch(err){
        console.log(err)
       }
       
      }
    } 
    else{
      alert('Узел не пустой')
    }
  }

  const fetchAddYzel = async ()=>{
  
      try{
      await fetch(`http://secondsin-001-site1.dtempurl.com/UserPage/addEndNode/`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',  
      },
      body: JSON.stringify(InputYzel)
     }); 
     if(openRespublic) fetchYzel(InputYzel.parentId)
     if(openOblast) fetchRaionYzel(InputYzel.parentId)
     if(openRaion) fetchOtdelYzel(InputYzel.parentId)
     setInputYzel({...InputYzel, nazva: ''})
     console.log(InputYzel)
    }
    catch(err){
      console.log(err)
     alert('Ошибка: организация не добавлена')
    }
  }
  
  const fetchEditYzel = async ()=>{
    
    try{
    await fetch(`http://secondsin-001-site1.dtempurl.com/UserPage/ChangeNode/`, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',  
    },
    body: JSON.stringify(InputEditYzel)
   }); 
   if(openRespublic) fetchYzel(InputYzel.parentId)
   if(openOblast) fetchRaionYzel(InputYzel.parentId)
   if(openRaion) fetchOtdelYzel(InputYzel.parentId)
   
  // setInputYzel({...InputEditYzel, title: ''})
   console.log(InputEditYzel)
  }
  catch(err){
    console.log(err)
   alert('Ошибка: организация не добавлена')
  }
}
  console.log(ar)

  return (
    <div>
      <div className='branchs'>
        <div>
            {(openRespublic || openOblast || openRaion || openOtdel) ? 
              <span onClick={()=>{
                if(openOtdel){openCloseYzel('raion'); ar.pop(); setInputYzel({...InputYzel, parentId: (ar[ar.length-1].Id)}) }
                else if(openRaion){openCloseYzel('oblasti'); ar.pop(); setInputYzel({...InputYzel, parentId: (ar[ar.length-1].Id)}) }
                else if (openOblast){openCloseYzel('respublic'); ar.pop();setInputYzel({...InputYzel, parentId: (ar[ar.length-1].Id)})}
                else {openCloseYzel('world'); ar.pop();setInputYzel({...InputYzel, parentId: (ar[ar.length-1].Id)})}
                }}>
                <img src={Arrow} alt='←' width='14px' style={{display: 'inline', marginRight: '1%'}}/>
              </span>
              :
              <span onClick={()=>{ openCloseYzel('respublic'); setLabelYzel(startNode.obl);
              ar.push({Id: startNode.oblId, nazva: startNode.obl}); setInputYzel({...InputYzel, parentId: (ar[ar.length-1].Id)}) }}>
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
          <label >Добавить узел в &lt;&lt; <span style={{color: 'brown'}}>{ar[ar.length-1].nazva}</span>  &gt;&gt; </label>
          <input className='input_addYzel'
            type='search'
            value={InputYzel.nazva}
            onChange={e=>setInputYzel({...InputYzel, nazva: e.target.value})}
          />
           <button className='BranchsAdd_button' onClick={()=>{fetchAddYzel() }}>Добавить</button>
        </div>
    </div>
  )
}
