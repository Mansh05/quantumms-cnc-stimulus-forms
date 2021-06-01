import { Controller } from 'stimulus'
import { FormBuilder } from './form_builder';

class FormsController extends Controller {
    form;
    children;

    constructor(context) {
        super(context)
    }

    buildForm() {
        this.form = new FormBuilder(this.buildReference)
    }

    get buildReference() {
        return {};
    }
}

export default FormsController
