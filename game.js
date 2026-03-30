function checkPassword(){

  const input = document
    .getElementById("password")
    .value
    .toLowerCase()
    .trim();

  // ⭐ ใส่รหัสที่ถูกทั้งหมดตรงนี้
  const correctPasswords = [
    "love you",
    "love",
    "I love you",
    "loveu",
    "ruk"
  ];

  if(correctPasswords.includes(input)){
    success.classList.add("show");

  }else{

      input.classList.add("shake");

      setTimeout(()=>{
        input.classList.remove("shake");
      },400);

      input.value="";
      input.placeholder="try again...";
  }
}


function goBack(){
  history.back();
}