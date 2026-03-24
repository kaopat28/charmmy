const correctPassword = "memory";

function checkPassword(){

  const input = document.getElementById("password");
  const success = document.getElementById("success");

  if(input.value.toLowerCase() === correctPassword){

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