import { Container } from './Container';
import { StartButton } from './StartButton.ts';
import { Timer } from './Timer.ts';
window.onload = () => {
    const content = document.getElementById('#content');
    const container = new Container(content);
    container.install(StartButton);
    container.current().on('start', () => {
        container.install(Timer);
    });
};
//# sourceMappingURL=index.js.map