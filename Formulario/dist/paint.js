const cardsEstudiantes = document.querySelector("cardsEstudiantes");

let flagsend =0;

const addStudent = (name, lastName, mail,tele,msn)=>{
    let persona ={
        pname: name,
        plastName: lastName,
        pmail: mail,
        ptele : tele,
        pmsn: msn
    } 
    let text = 'esta segur@ ${person.pname} ${person.plastName} de enviar la peticion?';
    modaAlert(text,"aceptar",persona);
}


function modaAlert(cadena, tipo, persona){
    const alerta = document.createElement("div");
    const texto = document.createElement("p");
    const btnCerrar = document.createElement("input");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto.setAttribute("class","textAlerta");
    texto.innerHTML = '<strong>${cadena}</strong>';
    btnCerrar.setAttribute("type","button");
    btnCerrar.setAttribute("class","btnAlerta");
    btnCerrar.setAttribute("value","cerrar");
    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);

    if (tipo==="aceptar"){
        const btnEnviar = document.createElement("input");
        btnCerrar.setAttribute("type","button");
        btnCerrar.setAttribute("class","btnAlerta");
        btnCerrar.setAttribute("value","enviar");
        alerta.appendChild(btnEnviar);
        document.body.appendChild(alerta);
        btnEnviar.onclick = function(){
            paintCard(persona, "estudiante");
            flagsend: 1
            document.getElementById("alerta").removeChild();
        }
    }else{
        document.body.appendChild(alerta);
    }
   btnCerrar.onclick = function(){
    document.body.appendChild(alerta).remove();
   }

}

const paintCard = (_datos, tipo) =>{
    tipo = tipo.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const temEstudiante = document.getElementById('tempaleteEstudiante').contentEditable;
    if ( tipo === "Estudiante"){
        let tempTemplate = temEstudiante.cloneNode(true);
        tempTemplate.querySelector('.title-card').innerHTML = 'DATOS POR <hr>';
        tempTemplate.querySelector('.data-card').innerHTML = 'NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}';
        tempTemplate.querySelector('.text-mail').innerHTML = 'Correo electronico: ${datos.pmail';
        tempTemplate.querySelector('.text-telefono').innerHTML = 'Telefono: ${datos.ptele}';
        tempTemplate.querySelector('.text-msn').innerHTML = 'Mensaje: ${datos.pmsn}';
        fragmento.appendChild(tempTemplate);
    }
    cardsEstudiantes,appendChild(fragmento);
}

export { addStudent, modaAlert}