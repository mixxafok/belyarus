import React, {useState} from 'react'
import '../../styles/Branchs.css'
import '../../styles/Table.css'
import Close from '../../icons/close.png'
import Edit from '../../icons/edit-text.png'
import Arrow from '../../icons/arrow.png'
import Plus from '../../icons/more.png'

export  function BranchsSystemLog({formInput, setFormInput}) {
  const [openRaion, setOpenRaion] = useState(false)
  const [openOblast, setOpenOblast] = useState(false)
  const [openRespublic,setOpenRespublic] = useState(false)
  const [yzels, setYzels] = useState([])
  const [raionYzels, setRaionYzels] = useState([])
  const [otdelYzels, setOtdelYzels] = useState([])
  const [InputYzel, setInputYzel] = useState({
    parentId: 0,
    title: ''
  })
  const [LabelYzel, setLabelYzel] = useState('')
  const [openEditYzel, setOpenEditYzel] = useState(false)

  const [LabelYzelOblast,setLabelYzelOblast] = useState('') 
  const [LabelYzelRaion,setLabelYzelRaion] = useState('')


  function openCloseYzel (open) {
    if(open == 'world'){
      setOpenRespublic(false)
      setOpenOblast(false)
      setOpenRaion(false)
      setLabelYzel('')
      setFormInput({...formInput, Yzel: ''});
    }
    if(open == 'respublic'){
      setOpenRespublic(!openRespublic)
      setOpenOblast(false)
      setOpenRaion(false)
      fetchYzel(1,false)
      setLabelYzelOblast('')
    }
    if(open == 'oblasti'){
      setOpenRespublic(false)
      setOpenOblast(!openOblast)
      setOpenRaion(false)
      setLabelYzelRaion('')
    }
    if(open == 'raion'){
      setOpenRespublic(false)
      setOpenOblast(false)
      setOpenRaion(!openRaion)
    }
  }

  //открытие выпадающего списка

  const oblast = yzels.map((item) => { {
    return <li key={item.id} className={ LabelYzel == item.title ? 'selectedRaion' : 'selectedRaionNull'}>
           <span onClick={()=>{openCloseYzel('oblasti'); fetchRaionYzel(item.id, item.isEndNode);
            setFormInput({...formInput, Yzel: item.title}); setLabelYzelOblast(' - ' + item.title)}}>
            {item.title}
            </span> 

          </li>
   }
  })

  const raion = raionYzels.map((item) => { {
    return <li key={item.id} className={ LabelYzel == item.title ? 'selectedRaion' : 'selectedRaionNull'}>
           <span onClick={()=> {openCloseYzel('raion'); fetchOtdelYzel(item.id, item.isEndNode);
            setFormInput({...formInput, Yzel: item.title}); setLabelYzelRaion(' - ' + item.title) }}>
            {item.title}
            </span> 

          </li>
   }
  })
  const otdel = otdelYzels.map((item) => { {
    return <li key={item.id} className={ LabelYzel == item.title ? 'selectedRaion' : 'selectedRaionNull'}>
           <span onClick={()=> {setFormInput({...formInput, Yzel: item.title}); }}>
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
    return setYzels([]);
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
     await setRaionYzels(q);
     // console.log(q[0].isEndNode)
    }
    catch(err){
      console.log(err)
      setRaionYzels([]);
    }
   }
   else{
    return setRaionYzels([]);
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
     await setOtdelYzels(q);
     // console.log(q[0].isEndNode)
   
    }
    catch(err){
      console.log(err)
      setOtdelYzels([]);
    }
   }
   else{
    return setOtdelYzels([]);
   }
  }

  const RemoveYzel = (titleYzel, isEndNodeYzel) =>{
    if(isEndNodeYzel){
      if( window.confirm('Вы точно хотите удалить этот узел?')){
       setYzels(yzels.filter(tem => tem.title != titleYzel));
       }
    } 
    else{alert('Узел не пустой')}
  }

  const fetchAddYzel = async ()=>{
      try{
      await fetch(`http://secondsin-001-site1.dtempurl.com/UserPage/addNode/`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8',  
      },
      body: JSON.stringify(InputYzel)
     }); 
     
     fetchYzel(InputYzel.parentId)
    }
    catch(err){
      console.log(err)
     alert('Ошибка: организация не добавлена')
    }
  }

  const handleForm = ()=>{
    fetchAddYzel();
    setInputYzel({...InputYzel, title: ''})
    console.log(InputYzel)
  } 



  return (
    <div>
      <div className='branchs'>
        <div>
            {(openRespublic || openOblast || openRaion) ? 
              <span onClick={()=>{
                if(openRaion){openCloseYzel('oblasti')}
                else if (openOblast){openCloseYzel('respublic')}
                else {openCloseYzel('world')}
                }}>
                <img src={Arrow} alt='←' width='14px' style={{display: 'inline', marginRight: '1%'}}/>
              </span>
              :
              <span onClick={()=>{ openCloseYzel('respublic'); setFormInput({...formInput, Yzel: 'Республика Беларусь'}); }}>
                <img src={Plus} alt='+' width='14px' style={{display: 'inline', marginRight: '1%'}}/>
              </span>
            }
            
          <span className='branchs__span__cursor_default' /*className={( LabelYzel == 'Республика Беларусь') ? 'selectedRaion' : 'selectedRaionNull'}*/>Республика Беларусь</span> 
          <span className='branchs__span__cursor_default'> {LabelYzelOblast}</span> 
          <span className='branchs__span__cursor_default'> {LabelYzelRaion}</span> 
        </div> 
        <div className='Placemargin1'>
          <span className= {openRespublic ? 'Placemargin1' : 'PlacemarginHide'}>{oblast}</span>
          <span className= {openOblast ? 'Placemargin1' : 'PlacemarginHide'}>{raion}</span>
          <span className= {openRaion ? 'Placemargin1' : 'PlacemarginHide'}>{otdel}</span>
        </div>
      </div>
    
    </div>
  )
}
