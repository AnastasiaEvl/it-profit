import {SELECTORS} from "../constants/selectors.js";
import {createLabelInput} from "./createLabelInput.js";
import {createInput} from "./createInput.js";
import {createBtn} from "./createBtn.js";
import MaskInput from 'mask-input';
import {createErrorMessageBlock} from "./createErrorMessageBlock";


export function createForm() {
    const containerForm = document.querySelector(SELECTORS.container)
    const form = document.createElement('form')
    form.setAttribute('name', 'form')
    form.className = 'form'
    form.setAttribute('action', '')
    form.setAttribute('id', 'form')
    const fieldset = document.createElement('fieldset')
    fieldset.className = 'form__fieldset'
    const legend = document.createElement('legend')
    legend.className = 'form__legend'
    const formTitle = document.createElement('h2')
    formTitle.className = 'form__title'
    formTitle.textContent = 'PLEASE FILL THE FORM'
    new MaskInput(document.querySelector('#mask'), {
        mask: '+375(00)000-00-00',
        alwaysShowMask: true,
        maskChar: '_',
    });
    const inputPhone = document.querySelector('#mask')
    const labelName = createLabelInput('name')
    labelName.append(createInput('name', ''), createErrorMessageBlock('error'))
    const labelEmail = createLabelInput('email')
    labelEmail.append(createInput('email', ''), createErrorMessageBlock('error'))
    const labelPhone = createLabelInput('phone')
    labelPhone.append(inputPhone, createErrorMessageBlock('error'))
    const labelText = createLabelInput('text')
    labelText.append(createInput('text', ''), createErrorMessageBlock('error'))

    const button = createBtn('submit', 'form')
    const nameBtn = document.createElement('span')
    fieldset.append(legend, labelName, labelEmail, labelPhone, labelText, button)
    nameBtn.textContent = 'submit'
    button.append(nameBtn)
    legend.append(formTitle)
    form.append(fieldset)
    containerForm.append(form)
    return containerForm
}
