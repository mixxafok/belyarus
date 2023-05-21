import React, {useState, useEffect} from 'react';
import '../styles/Registration.css';
import Ava from '../img/ava.png';
import {fio} from './FIO.js';

export function EditCard (){


  const [fetchdata, setFetchdata] = useState([]);
  const [formInput, setFormInput] = useState({
    Surname: '',
    Name: '',
    Parent: '',
    NumBilet: '',
    Status: ''
  })



const handleForm = () =>{
  console.log(formInput);
}

//перепроверить
const fetchfunc = async()=>{
  const response = await fetch("http:localhost:5000/Home/Nazvanie/");
  let data = await response.json();
  await setFetchdata(data);
}

const getFetchdata = fetchdata.map(item =>{
  return (
    <ul>
      <li>{item.name}</li>
    </ul>
  )
})
//

  return (
    <div className='registration'>

        <div>
          {getFetchdata}
        </div>

        <div className="reg__Button" onClick={()=>handleForm()}>
           <button >Сохранить</button>
        </div>

      <div className='reg__form_input_img'>
        <img src={Ava} alt='no' width='23.3mm' height='31mm' className='reg__img'></img>
        <input type="file" className='file'/>
      </div>

       <div className='reg__form_input_1'>
        <label>Фамилия</label>
        <input
          type="search"
         onChange={(e) => setFormInput({ ...formInput, Surname: e.target.value })}
          value={formInput.Surname }
          className="input"
          placeholder=""
        />
        </div>
    
        <div className="reg__form_input_1">
        <label>Имя</label>
        <input
          type="search"
        onChange={(e) => setFormInput({ ...formInput, Name: e.target.value })}
          value={formInput.Name }
          className="input"
          placeholder=""
        />
        </div>

        <div className="reg__form_input_1">
        <label>Отчество</label>
        <input
          type="search"
          onChange={(e) => setFormInput({ ...formInput, Parent: e.target.value })}
          value={formInput.Parent }
          className="input"
          placeholder=""
        />
        </div>

        <div className="reg__form_input_1">
        <label>Номер билета</label>
        <input
          type="search"
          onChange={(e) => setFormInput({ ...formInput, NumBilet: e.target.value })}
          value={formInput.NumBilet }
          className="input"
          placeholder=""
        />
        </div>

        <div className="reg__form_input_combobox">
        <label>Статус билета</label>
        <select  > 
          <option
           onChange={(e) => setFormInput({ ...formInput, Status: e.target.value })} ></option>
          <option >Изготовлен</option>
          <option>Не изготовлен</option>
          <option>Выдан</option>
          <option>Утерян*</option>
        </select>
        </div>

        <div className="reg__form_input_combobox">
        <label>Пол</label>
        <select  > 
          <option ></option>
          <option >Мужской</option>
          <option>Женский</option>
        </select>
        </div>
        
        <div className="reg__form_input_date" >
        <label>Дата рождения</label>
        <input type="date" min="1923-01-01"/>
        </div>

        <div className="reg__form_input_date">
        <label>Дата вступления</label>
        <input type="date" min="2023-01-01"/>
        </div>

        <div className="reg__form_input_combobox">
        <label>Место вступления</label>
        <select   > 
          <option ></option>
          <option >Места</option>
          <option>дополнят</option>
          <option>...</option>
        </select>
        </div>

        <div className="reg__form_input_combobox">
        <label>Статус членства</label>
        <select  >
          <option ></option> 
          <option >Действующий член</option>
          <option>Членство приостановлено</option>
          <option>Снят с учета</option>
        </select>
        </div>

        <div className="reg__form_input_combobox">
        <label>Место постановки на учет</label>
        <select   >
          <option ></option>
          <option >Отделение</option>
          <option>дополнят</option>
          <option>...</option>
        </select>
        </div>

        <div className="reg__form_input_combobox">
        <label>Образование</label>
        <select >
          <option ></option> 
          <option>Общее среднее</option>
          <option>Профессионально-техническое</option>
          <option>Среднее специальное</option>
          <option>Высшее</option>
        </select>
        </div>
      
        <div className="reg__form_input_combobox">
        <label>Социальная категория</label>
        <select  > 
          <option ></option>
          <option>Рабочий</option>
          <option>Служащий</option>
          <option>Предприниматель</option>
          <option>Студент</option>
          <option>Пенсионер</option>
          <option>Временно неработающий</option>
        </select>
        </div>

        <div className="reg__form_input_combobox">
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

        <div className="reg__form_input_combobox">
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

        <div className="reg__form_input_combobox">
        <label>Избирался ли депутатом</label>
        <select >
          <option ></option>
          <option>Да</option>
          <option>Нет</option>
        </select>
        </div>
    </div>
    
  )
}