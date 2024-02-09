import {SELECTORS} from "../constants/selectors";

export function handlerCheckError(){
        const formElement = document.getElementsByClassName(SELECTORS.input)
        for (let i = 0; i < formElement.length; i++) {
            if (formElement[i].nextElementSibling.textContent === 'empty' ||
                formElement[i].nextElementSibling.textContent === 'incorrect email') {
                formElement[i].nextElementSibling.textContent = ''
                formElement[i].classList.remove(SELECTORS.errorBorder)
            }
        }
}
