import { Dispatcher } from './Dispatcher.ts';
export class Timer {
    constructor(parent) {
        this.dispatcher = new Dispatcher(this);
        let counter = 60 * 30;
        this.elem = parent.appendChild(document.createElement('div'));
        this.elem.textContent = counter;
        this.counterInterval = setInterval(() => {
            counter--;
            this.elem.textContent = counter;
        }, 1000);
        const pause = () => {
            this.elem.classList.add('pause');
            counter = 60 * 5;
            setTimeout(() => {
                this.elem.classList.delete('pause');
                counter = 60 * 30;
                this.pauseInterval = setInterval(pause, 1000 * 60 * 30);
            }, 1000 * 60 * 5);
            clearInterval(this.pauseInterval);
        };
        this.pauseInterval = setInterval(pause, 1000 * 60 * 30);
    }
    remove() {
        clearInterval(this.counterInterval);
        clearInterval(this.pauseInterval);
        this.dispatcher.remove();
        this.elem.remove();
    }
}
//# sourceMappingURL=Timer.js.map