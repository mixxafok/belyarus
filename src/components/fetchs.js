//fetch TABLES
export  const fetchPOO = async ({setb}) =>{
  try{
    setb([]);
    const response = await fetch("http://localhost:80/UserPage/tablePOO/", {
     method: "get",
    "content-type" : "application/json; charset=utf-8"
    });
    let q = await response.json();
    await setb(q);
   // console.log(q)
  }
  catch(err){
    console.log(err)
    alert('Не удалось загрузить список членов партии')
  }
 };

export const fetchPause = async ({setb})=>{
  try{
    setb([]);
    const response = await fetch("http://localhost:80/UserPage/tablePause/", {
      method: "get",
    });
    let q = await response.json();
    await setb(q);
  }
  catch(err){
    console.log(err)
    alert('Не удалось загрузить список членов партии')
  }
};

export const fetchNO = async ({setb})=>{
  try{
    setb([])
    const response = await fetch("http://localhost:80/UserPage/tableNO/", {
    method: "get",
    });
    let q = await response.json();
    await setb(q);
  }
  catch(err){
    console.log(err)
    alert('Не удалось загрузить список членов партии')
  }
};

export const fetchOne = async (itemid, {setInfoCard})=>{
  try{
    const response = await fetch(`http://localhost:80/UserPage/GetOne?id=${itemid}`, {
      method: "get",
    });
    let q = await response.json();
    await setInfoCard([q]);
  }
  catch(err){
    console.log(err)
    alert('Не удалось загрузить Личную карточку')
  }
  };

//fetch OPTIONS
export const fetchOptions = async ({setOptions})=>{
  try{
     const response = await fetch("http://localhost:80/UserPage/GetOptions", {
      method: "get",
    });
    let q = await response.json();
    await setOptions(q);
  }
  catch(err){
    console.log(err)
    alert('Не удалось загрузить Оptions')
  }
  };

 // fetch VZNOSI 
export const fetchCurrentVznosi = async({setFoundUsers, setInputDate, inputDate}) => {
  try {
    const response = await fetch('http://secondsin-001-site1.dtempurl.com/UserPage/GetCurrentContributions/', {
    method: "get"
  });
    const q = await response.json();
    setFoundUsers(q.users);
    setInputDate({...inputDate, VznosMonth: q.period.month, VznosYear: q.period.year});
  }
  catch(err){
    console.log(err)
    alert('Не удалось загрузить список со взносами')
  }
  
}


//fetch OTCHETS
export const fetchSparvka = async () =>{
  try{
    const response = await fetch('http://secondsin-001-site1.dtempurl.com/api/Otchet/GetHelp/', {
    method: 'get'
  });
    let q = response.json()
    console.log(q)
  // await alert('Файл успешно загружен')
  }
  catch(err){
    alert('Повторите попытку')
  }
 }
export const fetchPOOWord = async () =>{
  try{
      await fetch('',{
    method: 'get'
  });
  alert('Файл успешно скачан')
  }
  catch(err){
    console.log(err)
    alert('Повторите попытку')
  }
 }
export const fetchPausedWord = async () =>{
  await fetch('http://localhost:80/api/Otchet/GetPausedWord/',{
    method: 'get'
  });

 }
export const fetchNOWord = async () =>{
  await fetch('http://localhost:80/api/Otchet/GetKickedWord/',{
    method: 'get'
  });
 }

export const fetchPausedExcel = async () =>{
  await fetch('http://secondsin-001-site1.dtempurl.com/api/Otchet/GetPausedExel/',{
    method: 'get'
  });
 }
 export const fetchPOOExcel = async () =>{
  await fetch('http://secondsin-001-site1.dtempurl.com/api/Otchet/GetPausedExel/',{
    method: 'get'
  });
 }
 export const fetchNOExcel = async () =>{
  await fetch('http://secondsin-001-site1.dtempurl.com/api/Otchet/GetKickedExel/',{
    method: 'get'
  });
 }


