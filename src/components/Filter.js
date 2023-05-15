import React, {useState} from "react";
import {fio} from './FIO.js';
import '../styles/Table.css';
import '../styles/Findfilter.css';
import DatePicker from "react-widgets/DatePicker";

export function FindFilter(){

  const [sidebar, setSidebar]= useState(false);
  const ShowSidebar = () => setSidebar(!sidebar);
  
  const [foundUsers, setFoundUsers] = useState(fio);
  
  const [formInput, setFormInput] = useState({
    Surname: '',
    Name: '',
    Parent: '',
    NumBilet: ''
  })

    const handleForm = () =>{
      console.log(formInput)
  
      if (formInput.Name !== '' || formInput.Surname !== '' || formInput.Parent !== '' || formInput.NumBilet !== '') {
        const results = fio.filter((result) => {
         return(result.name.toLowerCase().startsWith(formInput.Name.toLowerCase()) 
            && result.surname.toLowerCase().startsWith(formInput.Surname.toLowerCase())
            && result.parent.toLowerCase().startsWith(formInput.Parent.toLowerCase())
            && result.numBilet.toLowerCase().startsWith(formInput.NumBilet.toLowerCase())
        )
        });
        setFoundUsers(results);
      } else {
        setFoundUsers(fio);
      }
      setFormInput({
        Surname: '',
        Name: '',
        Parent: '',
        NumBilet: ''
      })
  
    }


  let filt = foundUsers && foundUsers.length > 0 ? (
    foundUsers.map((user,index) => (
      <tr key={user.id}>
      <td> {index+1}</td>
       <td className="table__surname"><span className="table_span__surname">{user.surname}</span></td>
       <td>{user.name}</td>
         <td>{user.parent}</td>
         <td>{user.numBilet}</td>
         <td>{user.dateStart}</td>
         <td>{user.place}</td>
    </tr>
    ))
  ) : (
    <h1>No results found!</h1>
  )


  return (
    
  <div className="filter">

    <div className="form">
      <div className="form_input_1">

        <div className="Button" onClick={()=>handleForm()}>
           <button >Найти</button>
        </div>

      <label>Фамилия</label>
        <input
          type="search"
          onChange={(e) => setFormInput({ ...formInput, Surname: e.target.value })}
          value={formInput.Surname }
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input_1">
        <label>Имя</label>
        <input
          type="search"
          onChange={(e) => setFormInput({ ...formInput, Name: e.target.value })}
          value={formInput.Name }
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input_1">
        <label>Отчество</label>
        <input
          type="search"
          onChange={(e) => setFormInput({ ...formInput, Parent: e.target.value })}
          value={formInput.parent }
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input_1">
        <label>Номер билета</label>
        <input
          type="search"
          onChange={(e) => setFormInput({ ...formInput, NumBilet: e.target.value })}
          value={formInput.NumBilet }
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input_1">
        <label>Статус билета</label>
        <input
          type="search"
          
          
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input_combobox">
        <label>Пол</label>
        <select  > 
          <option ></option>
          <option >Мужской</option>
          <option>Женский</option>
        </select>
        </div>
        
        <div className="form_input_date" >
        <label>Дата рождения</label>
        <input type="date" min="1923-01-01"/>
        </div>

        <div className="form_input_date">
        <label>Дата вступления</label>
        <input type="date" min="2023-01-01"/>
        </div>

        <div className="form_input_combobox">
        <label>Место вступления</label>
        <select   > 
          <option ></option>
          <option >Места</option>
          <option>дополнят</option>
          <option>...</option>
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Статус членства</label>
        <select  >
          <option ></option> 
          <option >Действующий член</option>
          <option>Членство приостановлено</option>
          <option>Снят с учета</option>
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Место постановки на учет</label>
        <select   >
          <option ></option>
          <option >Отделение</option>
          <option>дополнят</option>
          <option>...</option>
        </select>
        </div>

        <div className="form_input_combobox">
        <label>Образование</label>
        <select >
          <option ></option> 
          <option>Общее среднее</option>
          <option>Профессионально-техническое</option>
          <option>Среднее специальное</option>
          <option>Высшее</option>
        </select>
        </div>
      
        <div className="form_input_combobox">
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

        <div className="form_input_combobox">
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

        <div className="form_input_combobox">
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

        <div className="form_input_combobox">
        <label>Избирался ли депутатом</label>
        <select >
          <option ></option>
          <option>Да</option>
          <option>Нет</option>
        </select>
        </div>
    </div>


    <div className="table">
    <table className={`tablePOO `}> 
    <thead>
       <tr>
          <td>Номер</td>
          <td>Фамилия</td>
          <td>Имя</td>
          <td>Отчество</td>
          <td>Номер билета</td>
          <td>Дата вступления</td>
          <td>Место постановки на учет</td>
       </tr>
    </thead>
    <tbody>
       {filt}
    </tbody>
    </table>
    </div>
  </div>
  )
}