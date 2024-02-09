export function createErrorMessageBlock (className) {
    const errorMessage = document.createElement('p')
    errorMessage.className = className
    return errorMessage
}
