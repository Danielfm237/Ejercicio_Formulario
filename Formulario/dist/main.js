/*import { validateString, validateTelefono } from "./paint.js"*/
import { addStudent,modaAlert } from "./paint.js";
const btnEnviar=Document.getElementById('btnEnviar')
const form = document.getElementById('fmContact')
//objeto de validacion
const objectValid={
  nameObject: false,
  lastNameObject:false,
  mailObject:false,
  teleObject:false,
  msnObject:false
}

form.addEventListener('change', function(event){
  const inputId= event.target.id;
  console.log(inputId)
  const inputValue= event.target.id;
  console.log(inputValue);
  const inputClass=event.target.classList;
  console.log(inputClass);
  const ValidClass= () =>{
    inputClass.add("Is-valid");
    inputClass.remove("is-invalid");
  }
  const invalidClass=() =>{
    inputClass.add("Is-invalid");
    inputClass.remove("is-valid");
  }
  switch(inputId){
    case "name":
      objectValid.nameObject= validator.validNames(inputValue);
      if (objectValid.nameObject){ 
       ValidClass();
      }
      else{ 
        invalidClass();
      }
      console.log(object.value(objectValid));
      break;
    case "last name":
      objectValid.lastNameObject= validator.validNames(inputValue);
      objectValid.lastNameObject ? validClass(): invalidClass();
      console.log(Object.values(objectValid));
      break;
    case"mail":
      objectValid.mailObject= validator.validNames(inputValue);
      objectValid.mailObject ? validClass(): invalidClass();
      console.log(Object.values(objectValid));
      break;
  }
}
);

btnEnviar.addEventListener('click',(e)=>{
    e.preventDefault();
    const nombre= document.getElementById('name').value;
    const apellido= document.getElementById('lastName').value;
    const cargo= document.getElementById('position').value;
    const correo= document.getElementById('mail').value;
    const telefono=document.getElementById('telephone').value;
    const Mensaje= document.getElementById('fm_contact').value;
    if(validator.validForm(objectValid)===-1){
      addStudent(nombre, apellido, correo, telefono, Mensaje);
      }else{
        modaAlert("error revise el numero de telefono");
      } 

});

const receiverParam= (flag)=>{
  console.log (flag);
  return flag;
};

export{receiverParam}