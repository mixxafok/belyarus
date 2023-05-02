import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css";


export default function Login() {
  const navigateTo = useNavigate();
  const [formInput, setFormInput] = useState({
    login: "",
    password: ""
  })
  const handleForm = () =>{
    console.log(formInput);
    setFormInput({
      login: "",
      password: ""
    })
    navigateTo('/UserPage')
  }


    return (
      <div className="   relative flex flex-col flex-grow justify-center min-h-screen overflow-hidden">
      <div id="child-container" className=" p-6 m-auto bg-gray-100 rounded-md   ring-gray-700 ring-2  ">
          <h1 className="text-2xl font-semibold text-center text-grey-700   ">
            Белорусская партия «Белая Русь»
          </h1>
          <form >
              <div className="mb-2">
                  <label
                      for = 'login'
                      className="block text-sm font-semibold text-gray-80 ">
                      Логин:
                  </label>
                  <input
                      onChange={(e) => setFormInput({ ...formInput, login: e.target.value })}
                      value={formInput.login}
                      type="text"
                      className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-red-600 focus:ring-red-600 focus:outline-none focus:ring-0 focus:ring-opacity-20"
                  />
              </div>
              <div className="mb-2">
                  <label
                      for="password"
                      className="block text-sm font-semibold text-gray-800"
                  >
                      Пароль
                  </label>
                  <input
                      onChange={(e) => setFormInput({ ...formInput, password: e.target.value })}
                      value={formInput.password}
                      type="password"
                      className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-red-600 focus:ring-red-600 focus:outline-none focus:ring-0 focus:ring-opacity-20"
                  />
              </div>
              <div className="mt-6">
                  <button onClick={() => { handleForm() }} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                      Войти
                  </button>
              </div>
          </form>
          
      </div>
  </div>
    )
}