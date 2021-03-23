export class Container {
    private container: any;
    private elem: any;

    constructor(element: any) {
        this.container = element.appendChild(document.createElement('div'));
    }

    install(widget: any): any {
        this.container.innerHTML = '';
        this.elem = new widget(this.container);
        return this.elem;
    }

    current(): any {
        return this.elem;
    }
}
