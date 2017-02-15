
function displayMessage(){
  var inputs = document.getElementsByTagName("INPUT");
  for(var i = 0; i < inputs.length-2; i++)
  {
    if(inputs[i].value == "Required" || inputs[i].value == "")
    {
      alert("Please fill the blank " + inputs[i].name);
      inputs[i].value = "";
      inputs[i].focus();
      break;
    }
    if(inputs[i].name == "email" || inputs[i].name == "confirmemail")
    {
      if(!inputs[i].value.includes("@"))
      {
        alert("Please enter a valid email address with \"@\" in " + inputs[i].name);
        inputs[i].focus();
        break;
      }
      else if(inputs[i].value.charAt(0) == "@")
      {
        alert("Please enter a part followed by \"@\" in " + inputs[i].name);
        inputs[i].focus();
        break;
      }
      else if(inputs[i].value.charAt(inputs[i].value.length-1) == "@")
      {
        alert("Please enter a part following \"@\" in " + inputs[i].name);
        inputs[i].focus();
        break;
      }

    }

    if(inputs[i].name == "confirmemail" || inputs[i].name == "confirmpassword")
    {
      if((inputs[i].value).localeCompare(inputs[i-1].value) != 0)
      {
        if(inputs[i].name == "confirmemail")
        {
          alert("The two email addresses entered do not match in " + inputs[i].name);
        }
        else if(inputs[i].name == "confirmpassword")
        {
          alert("The two password entered do not match in " + inputs[i].name);
        }
        inputs[i].focus();
        break;
      }


    }

    if(i == inputs.length-3)
    {
      document.body.innerHTML = 'Congratulations! You are uccessfully registered!';
    }
  }
}
