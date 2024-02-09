import {SELECTORS} from "../constants/selectors";
import {handlerSendData} from "./handlerSendData";

export function handlerForForm() {
    const form = document.querySelector(SELECTORS.form)
    form.addEventListener('submit', handlerSendData)
}
