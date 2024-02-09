export function createLabelInput(name) {
    const createLabelInput = document.createElement('label')
    createLabelInput.setAttribute('for', name)
    createLabelInput.textContent = name
    createLabelInput.className = 'form__label'
    return createLabelInput
}
