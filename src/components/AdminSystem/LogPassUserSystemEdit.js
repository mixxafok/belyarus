import React, {useState} from 'react'
import '../../styles/LogPassUser.css'
import { BranchsSystemLog } from './BranchsSystemLog'

export  function LogPassUserSystemEdit() {

  const [formInput, setFormInput] = useState({
    Surname: '',
    Name: '',
    Parent: '',
    Login: '',
    Rule: '1',
    Password: '',
    RepeatPassword: '',
    Yzel: ''
  })

  const fetchLogPassUser = async () =>{
    const response = await fetch('',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
      'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(formInput)
    });
    const q = await response.json();
    await console.log(q);
  }

  function handleForm (){
    if(formInput.Password === formInput.RepeatPassword){
      console.log(formInput);
     // fetchLogPassUser();
      alert('Пользователь успешно зарегистрирован')
    }
    else {
      alert('Пароли не совпадают')
    }

  }

  return (
    <div className='LogPassUser'>

      <button className='LogPassUser_button' onClick={()=>handleForm()}>Сохранить</button>

      <container className='LogPassUser_container'>
        <div className='LogPassUser__div1'>
          <label>Фамилия</label>
          <input required='required'
            className='LogPassUser_input'
            type='text'
            value={formInput.Surname}
            onChange={e=>setFormInput({...formInput, Surname: e.target.value})}
          />
          <label>Имя</label>
          <input 
            className='LogPassUser_input'
            type='text'
            value={formInput.Name}
            onChange={e=>setFormInput({...formInput, Name: e.target.value})}
          />
          <label>Отчество</label>
          <input 
            className='LogPassUser_input'
            type='text'
            value={formInput.Parent}
            onChange={e=>setFormInput({...formInput, Parent: e.target.value})}
          />
          <label>Логин</label>
          <input 
            className='LogPassUser_input'
            type='text'
            value={formInput.Login}
            onChange={e=>setFormInput({...formInput, Login: e.target.value})}
          />
          <label>Роль в системе</label>
          <select  value={formInput.Rule} onChange={e=>setFormInput({...formInput, Rule: e.target.value})} className='LogPassUser_select' >
            <option selected value={1} >Информационный пользователь</option>
            <option value={2}>Оператор</option>
            <option value={3}>Администратор узла</option>
            <option value={4}>Администратор системы</option>
          </select>
          <label>Подконтрольный узел</label>
          <input disabled
            className='LogPassUser_inputYzel'
            type='text'
            value={formInput.Yzel}
          />
          <label>Пароль</label>
          <input 
            className='LogPassUser_input'
            type='password'
            value={formInput.Password}
            onChange={e=>setFormInput({...formInput, Password: e.target.value})}
          />
          <label>Повторите пароль</label>
          <input 
            className='LogPassUser_input'
            type='password'
            value={formInput.RepeatPassword}
            onChange={e=>setFormInput({...formInput, RepeatPassword: e.target.value})}
          />
          </div>

          <div className='LogPassUser__div2'>
          <BranchsSystemLog formInput={formInput} setFormInput={setFormInput}/>
        </div>
      </container>
    </div>
  ) 
}
