export  const fetchPOO = async ({setb}) =>{
  try{
    setb([]);
    const response = await fetch("http://secondsin-001-site1.dtempurl.com/UserPage/tablePOO/", {
     method: "get",
    "content-type" : "application/json; charset=utf-8"
    });
    let q = await response.json();
    await setb(q);
    console.log(q)
  }
  catch(err){
    console.log(err)
    alert('Не удалось загрузить список пользователей')
  }
 };

export const fetchPause = async ({setb})=>{
  try{
    setb([]);
    const response = await fetch("http://secondsin-001-site1.dtempurl.com/UserPage/tablePause/", {
      method: "get",
    });
    let q = await response.json();
    await setb(q);
  }
  catch(err){
    console.log(err)
    alert('Не удалось загрузить список пользователей')
  }
};

export const fetchNO = async ({setb})=>{
  try{
    setb([])
    const response = await fetch("http://secondsin-001-site1.dtempurl.com/UserPage/tableNO/", {
    method: "get",
    });
    let q = await response.json();
    await setb(q);
  }
  catch(err){
    console.log(err)
    alert('Не удалось загрузить список пользователей')
  }
};

export const fetchOne = async (itemid, {setInfoCard})=>{
  try{
    const response = await fetch(`http://secondsin-001-site1.dtempurl.com/UserPage/GetOne?id=${itemid}`, {
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

export const fetchBranch = async ({setb})=>{
  try{
    setb([])
    const response = await fetch("http://secondsin-001-site1.dtempurl.com/UserPage/tablePOO/", {
    method: "get",
    });
    let q = await response.json();
    await setb(q);
  }
  catch(err){
    console.log(err)
    alert('Не удалось загрузить список Организаций')
  }
};

export const fetchOptions = async ({setOptions})=>{
  try{
     const response = await fetch("http://secondsin-001-site1.dtempurl.com/UserPage/GetOptions", {
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



