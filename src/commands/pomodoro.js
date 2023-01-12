let minutes, seconds;
let timerCount = 0;

function startTimer (message, sentMessage, timer) {
    timer *= 60;

    let timerId = setInterval(async () => {
        timer--;
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        await message.channel.messages.fetch(sentMessage.id)
            .then((sentMessage) => sentMessage.edit(`⏰ ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`));

        if (timer === 0) {
            clearInterval(timerId);
            message.channel.send(`concluído +1 🏆`);

            timerCount++;
            if (timerCount < 4) {
                let nextTimerLeft = (timerCount % 2 === 0) ? 25 : 5;
                setTimeout(() => {
                    console.log(nextTimerLeft ? 'Pausa ⏸' : 'Foco ▶');
                    message.channel.send(`Sessão finalizada: <@&${1062824838420500520n}>\n$Pausa ⏸`);
                    startTimer(message, sentMessage, nextTimerLeft);
                }, 2000);
            }
        }
    }, 1000);
}

export async function pomodoro(message, prefix) {
    if (message.content === prefix+'pomodoro') {
        message.channel.send(`🍅 pomodoro 25/5`);

        var sentMessage = await message.channel.send(`⏰ 25:00`);
        startTimer(message, sentMessage, 25);
    }
}