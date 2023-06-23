import React, {useState} from 'react'
import '../../styles/LogPassUser.css'
import { BranchsSystemLog } from './BranchsSystemLog'

export  function LogPassUserSystemEdit({infoRegUser, options}) {
  const [hidden, setHidden] = useState(true)
  const [formInput, setFormInput] = useState({
    id: infoRegUser.id,
    Surname: infoRegUser.surname,
    Name: infoRegUser.name,
    Parent: infoRegUser.parent,
    Login: infoRegUser.login,
    Rule: infoRegUser.roleId,
    Password: infoRegUser.password,
    RepeatPassword: infoRegUser.password,
  //  NodeId: '',
    Yzel: infoRegUser.node
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
    const response = await fetch('http://secondsin-001-site1.dtempurl.com/UserPage/UpdateRegUser/',{
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
      fetchLogPassUser();
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
          <option  ></option> 
            {role.map((item)=>{ return <option value={item.id}>{item.val}</option>})}
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
            value={formInput.Password}
            onChange={e=>setFormInput({...formInput, Password: e.target.value})}
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
