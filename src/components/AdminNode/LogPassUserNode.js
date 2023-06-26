import React, {useState} from 'react'
import '../../styles/LogPassUser.css'
import { BranchsSystemLog } from '../AdminSystem/BranchsSystemLog'

export  function LogPassUserNode({options}) {
  const [hidden, setHidden] = useState(true)
  const [formInput, setFormInput] = useState({
    surname: '',
    name: '',
    patronymic: '',
    login: '',
    roleId: 0,
    password: '',
    RepeatPassword: '',
    nodeId: 0,
    Yzel: ''
  })

  const role = [];
  for (let key in options){

    if(key == 'roles'){
      for (let ked of options['roles']){
        role.push( ked)
        continue
        }
    }
  }

  const fetchLogPassUser = async () =>{
    const response = await fetch('http://secondsin-001-site1.dtempurl.com/UserPage/RegUser/',{
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
    if(formInput.password === formInput.RepeatPassword){
      fetchLogPassUser();
      console.log(formInput);
      alert('Пользователь успешно зарегистрирован')
    }
    else {
      alert('Пароли не совпадают')
    }
  }
console.log(role)
  return (
    <div className='LogPassUser'>

      <button className='LogPassUser_button' onClick={()=>handleForm()}>Добавить</button>

      <container className='LogPassUser_container'>
        <div className='LogPassUser__div1'>
          <label>Фамилия</label>
          <input required='required'
            className='LogPassUser_input'
            type='text'
            value={formInput.surname}
            onChange={e=>setFormInput({...formInput, surname: e.target.value})}
          />
          <label>Имя</label>
          <input 
            className='LogPassUser_input'
            type='text'
            value={formInput.name}
            onChange={e=>setFormInput({...formInput, name: e.target.value})}
          />
          <label>Отчество</label>
          <input 
            className='LogPassUser_input'
            type='text'
            value={formInput.patronymic}
            onChange={e=>setFormInput({...formInput, patronymic: e.target.value})}
          />
          <label>Логин</label>
          <input 
            className='LogPassUser_input'
            type='text'
            value={formInput.login}
            onChange={e=>setFormInput({...formInput, login: e.target.value})}
          />
          <label>Роль в системе</label>
          <select  value={formInput.roleId} onChange={e=>setFormInput({...formInput, roleId: e.target.value})} className='LogPassUser_select' >
            <option></option> 
            {/* {role.map((item)=>{ return <option value={item.id}>{item.val}</option>})} */}
            <option value={role[2].id}>{role[2].val}</option>
            <option value={role[3].id}>{role[3].val}</option>
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
            type={hidden ? 'password' : 'text'}
            value={formInput.password}
            onChange={e=>setFormInput({...formInput, password: e.target.value})}
          />
          <label>Повторите пароль</label>
          <input 
            className='LogPassUser_input'
            type={hidden ? 'password' : 'text'}
            value={formInput.RepeatPassword}
            onChange={e=>setFormInput({...formInput, RepeatPassword: e.target.value})}
          />
            <div>
              <label>Показать пароль</label>
              <input
                type='checkbox'
                onClick={()=>setHidden(!hidden)}
              />
            </div>
          </div>

          <div className='LogPassUser__div2'>
          <BranchsSystemLog formInput={formInput} setFormInput={setFormInput}/>
        </div>
      </container>
    </div>
  ) 
}
