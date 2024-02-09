import {SELECTORS} from "../constants/selectors";
import {handlerOpenModal} from "./handlerOpenModal";


export function handlerForModal(){
    const modalBtn = document.querySelector(SELECTORS.summary)
    modalBtn.addEventListener('click', handlerOpenModal)
}

