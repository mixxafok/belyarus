import React, {useState} from 'react';
import '../styles/Registration.css';
import Ava from '../img/ava.png';


export function Registration ({options}){
  const [selectedFile, setSelectedFile] = useState(null); //выбранная картика
  const [selectedFileload, setSelectedFileload] = useState(null); // выбранная картинка для отправки
 // const [uploaded, setUploaded] = useState([]); // ответ от fetch
  let formData = new FormData();

  //обработка options
  const educ = [];
  const socs = [];
  const acts = [];
  const regPlcs = [];
  const entrPlcs = [];
  const partPoss = [];
  const mbrSt = [];
  const crdSt = [];
  for (let key in options){

    if(key == 'edus'){
      for (let ked of options['edus']){
        educ.push( ked)
        continue
        }
    }
    if(key == 'socs'){
      for (let ked of options['socs']){
        socs.push( ked)
        continue
        }
    }
    if(key == 'acts'){
      for (let ked of options['acts']){
        acts.push( ked)
        continue
        }
    }
    if(key == 'regPlcs'){
      for (let ked of options['regPlcs']){
        regPlcs.push( ked)
        continue
        }
    }
    if(key == 'entrPlcs'){
      for (let ked of options['entrPlcs']){
        entrPlcs.push( ked)
        continue
        }
    }
    if(key == 'partPoss'){
      for (let ked of options['partPoss']){
        partPoss.push( ked)
        continue
        }
    }
    if(key == 'mbrSt'){
      for (let ked of options['mbrSt']){
        mbrSt.push( ked)
        continue
        }
    }
    if(key == 'crdSt'){
      for (let ked of options['crdSt']){
        crdSt.push( ked)
        continue
        }
    }
  }
//обработка options

  const [formInput, setFormInput] = useState({
    Surname: '', 
    Name: '',
    Parent: '',
    NumBilet: 0,
    DateIssue: '',
    StatusBilet: '',
    StatusMember: '',
    Sex: '',
    DateBirth: '',
    PlaceIssue:'',
    Education: '',
    SocialGroup: '',
    SphereActivity: '',
    PlaceJob: '',
    PostJob: '',
    StatusPart:'',
    Deputat: '',
    RegistrationAddress:'',
    LivingAddress:'',
    TelephoneNumber:'',
    Place: '' ,
    file: null
  })




const handleForm = () =>{
   console.log(formInput); 
   if( formInput.Surname !== '' && formInput.Name !== '' && formInput.Parent !== ''
   && formInput.NumBilet !== '' && formInput.StatusBilet !== '' && formInput.Sex !== ''
   && formInput.DateBirth !== '' && formInput.DateIssue !== '' && formInput.PlaceIssue !== ''
   && formInput.StatusMember !== '' && formInput.Education !== '' && formInput.SocialGroup !== ''
   && formInput.SphereActivity !== '' && formInput.StatusPart !== '' && formInput.Deputat !== '' && selectedFileload )
   {
    handleUpload(); 
    console.log(formInput)
    setFormInput({
       Surname: '', 
       Name: '',
       Parent: '',
       NumBilet: 0,
       DateIssue: '',
       StatusBilet: '',
       StatusMember: '',
       Sex: '',
       DateBirth: '',
       PlaceIssue:'',
       Education: '',
       SocialGroup: '',
       SphereActivity: '',
       PlaceJob: '',
       PostJob: '',
       StatusPart:'',
       Deputat: '',
       RegistrationAddress:'',
       LivingAddress:'',
       TelephoneNumber:'',
       Place: '' ,
       file: null
     });
   } 
  else {
    alert('Не все поля заполнены')
  }
}

//запрос fetch POST
// const fetchRegistration = async ()=>{
//   try{
//     const response = await fetch("http://secondsin-001-site1.dtempurl.com/UserPage/addCard/", {
//       method: 'post',
//       headers: {
//         'Accept': 'application/json',
//       'Content-Type': 'application/json;charset=utf-8',

//       },
//       body: JSON.stringify(formInput)
//     });

//     let q = await response.json();
//     await console.log(JSON.stringify(q));
//     alert('Член партии зарегистрирован')
//   }
//   catch(err){
//     console.log(err) 
//    }
// };//запрос fetch POST




  const handleChange = (event) => {
    console.log(event.target.files);
    setSelectedFileload(event.target.files[0]); // записать картинку
    setSelectedFile(URL.createObjectURL(event.target.files[0]))
  }

 const handleUpload = async () =>{

    formData.append('file', selectedFileload);
    formData.append('Name', formInput.Name);
    formData.append('Surname', formInput.Surname);
    formData.append('Parent', formInput.Parent);
    formData.append('DateBirth', formInput.DateBirth);
    formData.append('DateIssue', formInput.DateIssue);
    formData.append('Sex', formInput.Sex);
    formData.append('Education', formInput.Education);
    formData.append('SocialGroup', formInput.SocialGroup);
    formData.append('SphereActivity', formInput.SphereActivity);
    formData.append('StatusBilet', formInput.StatusBilet);
    formData.append('StatusPart', formInput.StatusPart);
    formData.append('StatusMember', formInput.StatusMember);
    formData.append('TelephoneNumber', formInput.TelephoneNumber);
    formData.append('LivingAddress', formInput.LivingAddress);
    formData.append('RegistrationAddress', formInput.RegistrationAddress);
    formData.append('PlaceIssue', formInput.PlaceIssue);
    formData.append('Place', formInput.Place);
    formData.append('PlaceJob', formInput.PlaceJob);
    formData.append('PostJob', formInput.PostJob);
    formData.append('NumBilet', formInput.NumBilet);

   const res = await fetch('http://partiyabase.by:5000/UserPage/addCard/',{
    method: "post",
    body: formData,
   })
   const data = await res.json()
  //  for (var key of formData.entries()) {
  //   console.log(key[0] + ', ' + key[1]);
  //   }
  };


  return (
    <div className='registration'>

          <div className="reg__Button" onClick={()=>{ handleForm();}}>
            <button >Сохранить</button>
          </div>
        <container className="Img_Fio">
          <div className='reg__form_input_img'>
            <img src={selectedFile} alt='' width='23.3mm' height='31mm' className='reg__img'></img>
              <input type="file" onChange={handleChange} name='uploadFile' className='file' accept='image/*,.png,.jpg' />
            {/* <button onClick={handleUpload}>upload</button> */}
          </div>

        <container className="Img_Fio_SexBirthday">
         <container className="Fio">
          <div className='reg__form_input_fio'>
            <label>Фамилия</label>
            <input
              type="search"
              onChange={(e) => setFormInput({ ...formInput, Surname: e.target.value })}
              value={formInput.Surname }
              className="reg__input"
              placeholder=""
            />
          </div>
          <div className="reg__form_input_fio">
            <label>Имя</label>
            <input
              type="search"
              onChange={(e) => setFormInput({ ...formInput, Name: e.target.value })}
              value={formInput.Name }
              className="reg__input"
              placeholder=""
            />
          </div>
          <div className="reg__form_input_fio">
            <label>Отчество</label>
            <input
              type="search"
              onChange={(e) => setFormInput({ ...formInput, Parent: e.target.value })}
              value={formInput.Parent }
              className="reg__input"
              placeholder=""
            />
          </div>
         </container> 

         <container className="SexBirthday">
          <div className='reg__form_input_combobox__sex'>
            <label>Пол</label>
            <select value={formInput.Sex} onChange={(e) => setFormInput({ ...formInput, Sex: e.target.value })}> 
              <option disabled hidden></option>
              <option value={'Мужской'}>Мужской</option>
              <option value={'Женский'}>Женский</option>
            </select>
          </div>
          <div className="reg__form_input_dateBirthday" >
            <label>Дата рождения</label>
            <input 
              value={formInput.DateBirth} 
              onChange={(e) => setFormInput({ ...formInput, DateBirth: e.target.value })} 
              type="date" 
              min="1923-01-01"/>
          </div>
          </container>
         </container>
        </container>

        <container className="Statusts">
          <div className="reg__form_input_combobox__places">
          <label>Образование</label>
            <select value={formInput.Education} onChange={(e) => setFormInput({ ...formInput, Education: e.target.value })}>
              <option disabled hidden></option> 
              {educ.map((item)=>{ return <option value={item.id}>{item.val}</option>})}
            </select>
          </div>
          <div className="reg__form_input_combobox__placesYchet">
          <label>Социальная категория</label>
            <select value={formInput.SocialGroup} onChange={(e) => setFormInput({ ...formInput, SocialGroup: e.target.value })}>
              <option disabled hidden></option> 
              {socs.map((item)=>{ return <option value={item.id}>{item.val}</option>})}
            </select>
          </div>
        </container>
       <div className="reg__form_input_combobox__social">
            <label>Сфера деятельности</label>
            <select value={formInput.SphereActivity} onChange={(e) => setFormInput({ ...formInput, SphereActivity: e.target.value })}>
              <option disabled hidden></option> 
              {acts.map((item)=>{ return <option value={item.id}>{item.val}</option>})}
            </select>
          </div>

<br/>
<hr/>

        <container className='Statusts'>
          <div className="reg__form_input_combobox__places">
            <label>Статус билета</label>
            <select value={formInput.StatusBilet} onChange={(e) => setFormInput({ ...formInput, StatusBilet: e.target.value })}> 
            <option disabled hidden></option>
            {crdSt.filter((item,index) => {return index== 1}).map((item)=>{return <option value={item.id}>{item.val}</option> })}
            </select>
          </div>
          <div className="reg__form_input_combobox__placesYchet">
            <label>Статус членства</label>
            <select value={formInput.StatusMember} onChange={(e) => setFormInput({ ...formInput, StatusMember: e.target.value })}>
              <option disabled hidden></option> 
              {mbrSt.map((item)=>{ return <option value={item.id}>{item.val}</option>})}
            </select>
          </div>
        </container>

        <container className="StatusPartya">
          <div className="reg__form_input_combobox__places">
            <label>Статус в партии</label>
            <select value={formInput.StatusPart} onChange={(e) => setFormInput({ ...formInput, StatusPart: e.target.value })}>
              <option disabled hidden></option> 
              {partPoss.map((item)=>{ return <option value={item.id}>{item.val}</option>})}
            </select>
          </div>
          <div className="reg__form_input_combobox__deputat">
            <label >Избирался депутатом</label>
            <select value={formInput.Deputat} onChange={(e) => setFormInput({ ...formInput, Deputat: e.target.value })}> 
              <option disabled hidden></option>
              <option value={'Да'}>Да</option>
              <option value={'Нет'}>Нет</option>
            </select>
          </div>
          <div className="reg__form_input_date">
            <label >Дата вступления</label>
            <input 
              value={formInput.DateIssue}
              onChange={(e) => setFormInput({ ...formInput, DateIssue: e.target.value })} 
              type="date" 
              min="2023-01-01"/>
          </div>
        </container>

        <container className="Places">
          <div className="reg__form_input_combobox__places">
          <label>Место вступления</label>
            <select value={formInput.PlaceIssue} onChange={(e) => setFormInput({ ...formInput, PlaceIssue: e.target.value })}>
              <option disabled hidden></option> 
              {entrPlcs.map((item)=>{ return <option value={item.id}>{item.val}</option>})}
            </select>
          </div>
          <div className="reg__form_input_combobox__placesYchet" id='mozilla_placesYchet'>
            <label>Место постановки на учет</label>
            <select  value={formInput.Place} onChange={(e) => setFormInput({ ...formInput, Place: e.target.value })}>
              <option disabled hidden></option> 
              {regPlcs.map((item)=>{ return <option value={item.id}>{item.val}</option>})}
            </select>
          </div>
        </container>
<br/>
<hr/>
        <container className="Jobs">
          <div className="reg__form_input_jobs">
            <label>Место работы</label>
            <input
              type="search"
              onChange={(e) => setFormInput({ ...formInput, PlaceJob: e.target.value })}
              value={formInput.PlaceJob }
              className="reg__input"
              placeholder=""
            />
          </div>
          <div className="reg__form_input_jobsAddress">
            <label>Должность</label>
            <input
              type="search"
              onChange={(e) => setFormInput({ ...formInput, PostJob: e.target.value })}
              value={formInput.PostJob }
              className="reg__input"
              placeholder=""
            />
          </div>
        </container>

        <container className="Address">
          <div className="reg__form_input_jobs">
            <label>Адрес регистрации</label>
            <input
              type="search"
              onChange={(e) => setFormInput({ ...formInput, RegistrationAddress: e.target.value })}
              value={formInput.RegistrationAddress}
              className="reg__input"
              placeholder=""
            />
          </div>
          <div className="reg__form_input_jobsAddress">
            <label>Адрес проживания</label>
            <input
              type="search"
              onChange={(e) => setFormInput({ ...formInput, LivingAddress: e.target.value })}
              value={formInput.LivingAddress }
              className="reg__input"
              placeholder=""
            />
          </div>
        </container>

          <div className="reg__form_input_number">
            <label>Номер телефона</label>
            <input
              type="search"
              onChange={(e) => setFormInput({ ...formInput, TelephoneNumber: e.target.value })}
              value={formInput.TelephoneNumber }
              className="reg__input"
              placeholder=""
            />
          </div>
      </div>
      
  ) 
} 