window.onload = () => {

    const content = document.getElementById('content');
    const timer = content.appendChild(document.createElement('span'));
    const description = content.appendChild(document.createElement('small'));

    const pomodoro = 1000*60*30;
    const pause = 1000*60*5;
    let counter = pomodoro;

    timer.textContent = counter/1000 + ' seconds';
    description.textContent = 'until a break';

    const updateCounter = () => {

        counter -= 1000;
        timer.textContent = counter/1000 + ' seconds';
    };

    const updateTimer = () => {

        content.classList.add('pause');
        counter = pause;
        clearInterval(timerInterval);
        description.textContent = 'until work';
        const notification = new Notification('Pomodoro', {
            body: 'Time for a break'
        });

        setTimeout(() => {

            content.classList.remove('pause');
            counter = pomodoro;
            timerInterval = setInterval(updateTimer, pomodoro);
            const notification = new Notification('Pomodoro', {
                body: 'Time for work!'
            });
            description.textContent = 'until a break';
        }, pause);
    };

    let counterInterval = setInterval(updateCounter, 1000);
    let timerInterval = setInterval(updateTimer, pomodoro);

    Notification.requestPermission();
};
