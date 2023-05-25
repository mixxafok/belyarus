import React, {useState, useEffect} from 'react';
import '../styles/Registration.css';
import Ava from '../img/ava.png';

export function EditCard ({infoCard}){

  let data =new Date( infoCard[0].dateStart) //перевод даты из дд.мм.гггг 
  let dateStart = `${data.getFullYear()}-${data.getMonth()}-${data.getDate()}`//в гггг-мм-дд для input[date]

  let data1 =new Date( infoCard[0].dateBirth) //перевод даты из дд.мм.гггг 
  let dateBirth= `${data1.getFullYear()}-${data1.getMonth()}-${data1.getDate()}`//в гггг-мм-дд для input[date]

    const [formInput, setFormInput] = useState({
      Surname: infoCard[0].surname, 
      Name: infoCard[0].name,
      Parent: infoCard[0].parent,
      NumBilet: infoCard[0].numBilet,
      DateStart: `${dateStart}`,
      DateFinish: ``,
      DateIssue: ``,
      StatusBilet: `${infoCard[0].statusBilet}`,
      StatusMember: infoCard[0].statusMember,
      Sex: infoCard[0].sex,
      DateBirth: `${dateBirth}`,
      PlaceIssue:'',
      Education: '',
      SocialGroup: '',
      SphereActivity: '',
      PlaceJob: infoCard[0].jobas,
      StatusPart:'',
      Deputat: '',
      Contact:'',
      Place: ''
    })

//console.log(formInput.DateBirth)


const handleForm = () =>{
  console.log(formInput);
}

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
          <select  onChange={(e) => setFormInput({ ...formInput, Sex: e.target.value })}> 
            <option ></option>
            <option >Мужской</option>
            <option>Женский</option>
          </select>
          </div>
          
          <div className="reg__form_input_dateBirthday" >
          <label>Дата рождения</label>
          <input value={formInput.DateBirth} onChange={(e) => setFormInput({ ...formInput, DateBirth: e.target.value })} type="date" min="1923-01-01"/>
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
          
          
          <div className="reg__form_input_combobox">
          <label>Статус билета</label>
          <select  > 
            <option  onChange={(e) => setFormInput({ ...formInput, StatusBilet: e.target.value })} ></option>
            <option >Изготовлен</option>
            <option>Не изготовлен</option>
            <option>Выдан</option>
            <option>Утерян*</option>
          </select>
          </div>*/}
        <container className="Social">
          <div className="reg__form_input_combobox__social">
          <label>Образование</label>
          <select  >
            <option ></option> 
            <option>Общее среднее</option>
            <option>Профессионально-техническое</option>
            <option>Среднее специальное</option>
            <option>Высшее</option>
          </select>
          </div>
        
          <div className="reg__form_input_combobox__social">
          <label>Социальная категория</label>
          <select > 
            <option ></option>
            <option>Рабочий</option>
            <option>Служащий</option>
            <option>Предприниматель</option>
            <option>Студент</option>
            <option>Пенсионер</option>
            <option>Временно неработающий</option>
          </select>
          </div>
        
          <div className="reg__form_input_combobox__social">
          <label>Сфера деятельности</label>
          <select >
            <option ></option>
            <option>Агропромышленный комплекс</option>
            <option>Архитектура и строительство</option>
            <option>Государственное управление</option>
            <option>Жилищно-коммунальное хозяйство</option>
            <option>...</option>
          </select>
          </div>
        </container>
       

       {/*<div className="reg__form_input_combobox">
          <label>Статус членства</label>
          <select  >
            <option ></option> 
            <option >Действующий член</option>
            <option>Членство приостановлено</option>
            <option>Снят с учета</option>
          </select>
          </div>*/}

<br/>
<hr/>

        
        <container className="StatusPartya">
          <div className="reg__form_input_combobox__social">
          <label>Статус в партии</label>
          <select >
            <option ></option>
            <option>Член БП «Белая Русь»,</option>
            <option>Председатель первичного отделения БП «Белая Русь»</option>
            <option>Председатель местного отделения БП «Белая Русь»,</option>
            <option>Председатель областного/Минского городского отделения БП «Белая Русь»,</option>
            <option>...</option>
          </select>
          </div>
        
          <div className="reg__form_input_combobox__deputat">
          <label>Избирался ли депутатом</label>
          <select >
            <option ></option>
            <option>Да</option>
            <option>Нет</option>
          </select>
          </div>

          <div className="reg__form_input_date">
          <label>Дата вступления</label>
          <input value={formInput.DateStart} onChange={(e) => setFormInput({ ...formInput, DateStart: e.target.value })} type="date" min="2023-01-01"/>
          </div>
        </container>

        <container className="Places">
          <div className="reg__form_input_combobox__places">
          <label>Место вступления</label>
          <select  > 
            <option ></option>
            <option >Места</option>
            <option>дополнят</option>
            <option>...</option>
          </select>
          </div>
        
          <div className="reg__form_input_combobox__placesYchet">
          <label>Место постановки на учет</label>
          <select  >
            <option ></option>
            <option >Отделение</option>
            <option>дополнят</option>
            <option>...</option>
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