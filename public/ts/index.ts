import { Container } from './Container';
import { StartButton } from './StartButton';
import { Timer } from './Timer';

window.onload = () => {

    const content = document.getElementById('#content');
    const container = new Container(content);

    container.install(StartButton);
    container.current().on('start', () => {

        container.install(Timer);
    });
};
