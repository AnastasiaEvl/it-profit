import {createForm} from "./components/createForm.js";
import {createErrorMessageBlock} from "./components/createErrorMessageBlock.js";
import { handlerForModal} from "./handlers/handlerForModal.js";
import {handlerCheckError, handlerForForm, handlerInputValidation, handlerOpenModal, handlerSendData} from "./handlers/index.js";

const initApp = () => {
    createForm()
    handlerForModal()
    handlerForForm()
    handlerSendData()
    handlerCheckError()
    handlerInputValidation()
    createErrorMessageBlock()
    handlerOpenModal()

}
export { initApp }
