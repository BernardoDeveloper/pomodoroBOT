let timerLeft = 25 * 60;
let timerId;

async function displayTimeLeft(time, message) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    await message.channel.send(`⏯ Time to focus.`)
        .then((sentMessage) => sentMessage.edit(`⏰ ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`));
}

export async function pomodoro(message, prefix) {
    if (message.content === prefix+'pomodoro') {
        message.channel.send(`🍅 pomodoro 25/5`);

        timerId = setInterval(() => {
            timerLeft--;
            displayTimeLeft(timerLeft, message);

            if (timerLeft === 0) {
                clearInterval(timerId);
                message.channel.send(`finalizado +1 🏆`);
            }
        }, 1000);
    }
}