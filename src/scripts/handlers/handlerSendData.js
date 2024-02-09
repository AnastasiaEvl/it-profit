import {handlerInputValidation} from "./handlerInputValidation";
import {URL} from "../constants/URL";

export function handlerSendData(event){
        event.preventDefault();
        handlerInputValidation()
        const request = new XMLHttpRequest();
        request.onload = function () {
            if (request.status === 200) {
                let message = JSON.parse(request.responseText);
                alert(message.msg)
                location.reload()
            }
            if (request.status === 400) {
                let error = JSON.parse(request.responseText);
                alert(error.fields)
            }
        }
        request.open("POST", URL, true)
        request.setRequestHeader('Content-Type', 'application/json')
        const name = this.querySelector('#name')
        const email = this.querySelector('#email')
        const text = this.querySelector('#text')
        const phone = this.querySelector('#mask')
        const obj = {
            'name': `${name.value}`,
            'email': `${email.value}`,
            'text': `${text.value}`,
            'phone': `${phone.value}`
        }
        request.send(JSON.stringify(obj))
        return false

}
