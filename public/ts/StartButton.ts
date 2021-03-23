import { Dispatcher } from './Dispatcher';

export class StartButton {
    readonly elem: any;
    private dispatcher: Dispatcher;

    constructor(parent: any) {
        this.dispatcher = new Dispatcher(this);

        this.elem = parent.appendChild(document.createElement('button'));
        this.elem.textContent = 'Start';

        this.elem.addEventListener('click', () => {
            this.dispatcher.trigger('click');
        });
    }

    remove(): undefined {
        this.dispatcher.remove();
        this.elem.remove();
    }
}
