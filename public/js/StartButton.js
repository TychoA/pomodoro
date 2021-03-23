import { Dispatcher } from './Dispatcher.ts';
export class StartButton {
    constructor(parent) {
        this.dispatcher = new Dispatcher(this);
        this.elem = parent.appendChild(document.createElement('button'));
        this.elem.textContent = 'Start';
        this.elem.addEventListener('click', () => {
            this.dispatcher.trigger('click');
        });
    }
    remove() {
        this.dispatcher.remove();
        this.elem.remove();
    }
}
//# sourceMappingURL=StartButton.js.map