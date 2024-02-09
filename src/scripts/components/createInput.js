export function createInput (id, value) {
    const createdInput = document.createElement('input')
    createdInput.setAttribute('id', id)
    createdInput.setAttribute('value', value)
    createdInput.className = 'form__input'
    return createdInput
}
