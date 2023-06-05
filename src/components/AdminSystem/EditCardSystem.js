import React, {useState} from 'react';
import '../../styles/Registration.css';
import Ava from '../../img/ava.png';

export function EditCardSystem ({infoCard, options}){

  let data =new Date( infoCard[0].dateStart) //перевод даты из дд.мм.гггг 
  let dateStart = `${data.getFullYear()}-${('0' + data.getMonth()).slice(-2)}-${('0' + data.getDate()).slice(-2)}`//в гггг-мм-дд для input[date]

  let data1 =new Date( infoCard[0].dateBirth) //перевод даты из дд.мм.гггг 
  let dateBirth= `${data1.getFullYear()}-${('0' + data1.getMonth()).slice(-2)}-${('0' + data1.getDate()).slice(-2)}`//в гггг-мм-дд для input[date]
  
  let data2 =new Date( infoCard[0].dateIssue) //перевод даты из дд.мм.гггг 
  let dateIssue= `${data2.getFullYear()}-${('0' + data2.getMonth()).slice(-2)}-${('0' + data2.getDate()).slice(-2)}`//в гггг-мм-дд для input[date]

    const [formInput, setFormInput] = useState({
      Id:infoCard[0].id,
      // Login: '',
      // Password: '',
      // Rule: '',
      Vznos: '',
      Surname: infoCard[0].name, 
      Name: infoCard[0].surname,
      Parent: infoCard[0].parent,
      NumBilet: infoCard[0].numBilet,
      DateStart: `${dateStart}`,
     // DateFinish: ``,
      DateIssue: `${dateIssue}`,
      StatusBilet: infoCard[0].statusBiletId,
      StatusMember: infoCard[0].statusMemberId,
      Sex: infoCard[0].sex,
      DateBirth: `${dateBirth}`,
      StatusPart: infoCard[0].partStatus,
      Deputat: infoCard[0].deputat,
      PlaceYchet: infoCard[0].uchetId,
      PlaceIssue: infoCard[0].placeId,
      Education: infoCard[0].educationId,
      SocialGroup: infoCard[0].socId,
      SphereActivity: infoCard[0].sphereId,
      PlaceJob: infoCard[0].placeJob, 
      PostJob: infoCard[0].postJob,
      RegistrationAddress: infoCard[0].registrationAddress, 
      LivingAddress: infoCard[0].livingAddress, 
      TelephoneNumber: infoCard[0].telephoneNumber

    })

//console.log(formInput.DateBirth)


const handleForm = () =>{
  console.log(formInput);
  fetchEditCard();

}

const fetchEditCard = async ()=>{
  try{
    const response = await fetch("http://secondsin-001-site1.dtempurl.com/UserPage/ChangeUsr/", {
      method: 'post',
      headers: {
        'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8',

      },
      body: JSON.stringify(formInput)
    });

    let q = await response.json();
    await console.log(JSON.stringify(q));
  }
  catch(err){
    console.log(err)
  }
};//запрос fetch POST

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


  return (
    <div className='registration'>
     
          <div className="reg__Button" onClick={()=>handleForm()}>
            <button >Сохранить</button>
          </div>

        <container className="Img_Fio">
          <div className='reg__form_input_img'>
            <img src={Ava} alt='no' width='23.3mm' height='31mm' className='reg__img'></img>
            <input type="file" name="file" className='file'/>
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
       
    
        {/* <div className="reg__form_input_1">
          <label>Номер билета</label>
          <input
            type="search"
            onChange={(e) => setFormInput({ ...formInput, NumBilet: e.target.value })}
            value={formInput.NumBilet }
            className="reg__input"
            placeholder=""
          />
          </div>
          */}
          

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

        <container className='NumBlietVznos'>
          <div className="reg__form_input_numBilet">
            <label >Номер билета</label>
            <input
              type="search"
              maxlength="6"
              onChange={(e) => setFormInput({ ...formInput, NumBilet: e.target.value })}
              value={formInput.NumBilet }
              className="reg__input"
              placeholder=""
            />
          </div>
          <div className="reg__form_input_Vznos">
            <label>Уплата членских взносов</label>
            <input 
              value={formInput.Vznos} 
              onChange={(e) => setFormInput({ ...formInput, Vznos: e.target.value })} 
              type="month" 
              min="2023-01-01"/>
          </div>
        </container>

<br/>
<hr/>

        <container className='Statusts'>
          <div className="reg__form_input_combobox__places">
            <label>Статус билета</label>
            <select value={formInput.StatusBilet} onChange={(e) => setFormInput({ ...formInput, StatusBilet: e.target.value })}> 
              <option disabled hidden></option>
              {crdSt.map((item)=>{ return <option value={item.id}>{item.val}</option>})}
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
            <label>Избирался ли депутатом</label>
            <select value={formInput.Deputat} onChange={(e) => setFormInput({ ...formInput, Deputat: e.target.value })}> 
              <option disabled hidden></option>
              <option value={'Да'}>Да</option>
              <option value={'Нет'}>Нет</option>
            </select>
          </div>
          <div className="reg__form_input_date">
            <label>Дата вступления</label>
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
            <select value={formInput.PlaceYchet} onChange={(e) => setFormInput({ ...formInput, PlaceYchet: e.target.value })}>
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
              value={formInput.RegistrationAddress }
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