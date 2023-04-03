const validateString= (cad) =>{
    let response = (cad.length >=3) ?true:false;
    return response;
};
/* Funciones */
const validateTelefono=(cad) =>{
    let response =(cad.length >=10) ?true:false;
    return response;
}
/* Metodos (clases) */
class validate{
    validNames(value){
        const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        const resp= value.match(nombresRX) ? true : false;
        return resp;
    }
    validMail(value){
        const mailRx = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
        const resp= value.match(mailRx) ? true: false;
        return resp;
        
    }
    

    validForm= (objeto) =>{
        const valores = Object.values(objeto);
        let resp = valores.findIndex(e => e ===false);
 /* Si no encuentra un false devuelve en -1 si no devuelve poscion del elemnto */
    return resp;

    }
    validLastName(value){
        const lastNameRx = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        const resp = value.match(lastNameRx) ? true: false;
        //return resp;
    }
    validateTelefono(value){
        const teleRx = /(\+57)?[ -]*(3|31|32|35|30)[ -]*([0-9][ -]*){10}/g;
        const resp= value.match(teleRx) ? true: false;
        //return resp;
    }

}

export{validateString,validateTelefono, validate }