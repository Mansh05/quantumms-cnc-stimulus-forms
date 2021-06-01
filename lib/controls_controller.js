import { Controller } from 'stimulus'

class ControlsController extends Controller {
	control;

	constructor(context) {
		super(context);
		this.getForm();
    }
    
	getForm() {
        let reference = this.application.getControllerForElementAndIdentifier(this.parentElement, this.formData.controller)
		this.control = reference.form.get(this.element.dataset.formControl)
		this.control.reference = this.element
	}

	update(data) {
		this.control.options[data.type](data)
	}

	get formData() {
		return JSON.parse(this.element.dataset.form)
	}

	get parentElement() {
		return document.getElementById(this.formData.name)
	}
}

export default ControlsController
