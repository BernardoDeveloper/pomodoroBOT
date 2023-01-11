let timerLeft = 25 * 60;
let timerId, minutes, seconds;

function timer(message, prefix, sentMessage) {
    timerId = setInterval(async () => {
        timerLeft--;
        minutes = Math.floor(timerLeft / 60);
        seconds = timerLeft % 60;

        await message.channel.messages.fetch(sentMessage.id)
            .then((sentMessage) => sentMessage.edit(`⏰ ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`));

        if (timerLeft === 0) {
            clearInterval(timerId);
            message.channel.send(`concluído +1 🏆`);
            pause(message, prefix);
        }
    }, 1000);
}

export async function pomodoro(message, prefix) {
    if (message.content === prefix+'pomodoro') {
        message.channel.send(`🍅 pomodoro 25/5`);

        let sentMessage = await message.channel.send(`⏰ 25:00`);
        timer(message, prefix, sentMessage);
    }
}