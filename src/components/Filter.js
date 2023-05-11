import React, {useState} from "react";
import {fio} from './FIO.js';
import '../styles/Table.css';
import '../styles/Findfilter.css';

export function FindFilter(){

  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(fio);

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

  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = fio.filter((user) => {
        return (user.surname.toLowerCase().startsWith(keyword.toLowerCase()) 
        )
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(fio);
    }
    setName(keyword);
  };

  return (
    
  <div className="">
    <div className="form">
      <div className="form_input_1">
      <label>Фамилия</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input_1">
        <label>Имя</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input_1">
        <label>Отчество</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input">
        <label>Номер билета</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input">
        <label>Статус билета</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input">
        <label>Пол</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>
        
        <div className="form_input">
        <label>Дата рождения</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input">
        <label>Дата вступления</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input">
        <label>Место вступления</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input">
        <label>Статус членства</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input">
        <label>Место постановки на учет</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input">
        <label>Образование</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>
      
        <div className="form_input">
        <label>Социальная категория</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>
        <div className="form_input">
        <label>Сфера деятельности</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input">
        <label>Статус в партии</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>

        <div className="form_input">
        <label>Избирался ли депутатом</label>
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=""
        />
        </div>
    </div>

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
  )
}