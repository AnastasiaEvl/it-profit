export function createBtn (type, form) {
    const createdBtn = document.createElement('button')
    createdBtn.setAttribute('type', type)
    createdBtn.setAttribute('form', form)
    createdBtn.className = 'button'
    return createdBtn
}
