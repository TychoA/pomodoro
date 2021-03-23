export class Container {
    constructor(element) {
        this.container = element.appendChild(document.createElement('div'));
    }
    install(widget) {
        this.container.innerHTML = '';
        this.elem = new widget(this.container);
        return this.elem;
    }
    current() {
        return this.elem;
    }
}
//# sourceMappingURL=Container.js.map