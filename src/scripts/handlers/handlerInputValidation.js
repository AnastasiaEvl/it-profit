import {handlerCheckError} from "./handlerCheckError";

export function handlerInputValidation() {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const formElement = document.querySelectorAll('input')
    handlerCheckError()
    for (let i = 0; i < formElement.length; i++) {
        if (formElement[i].value === '') {
            formElement[i].nextElementSibling.textContent = 'empty'
            formElement[i].classList.add('error__border')
        }else if (formElement[i].id === 'email' && formElement[i].value !== '') {
            if (!(re.test(String(formElement[i].value).toLowerCase()))) {
                formElement[i].nextElementSibling.textContent = 'incorrect email'
                formElement[i].classList.add('error__border')
            }
        }else if(formElement[i].id === 'mask' && formElement[i].value === '+375(__)___-__-__'){
            formElement[i].nextElementSibling.textContent = 'empty'
            formElement[i].classList.add('error__border')
        }
    }

}
