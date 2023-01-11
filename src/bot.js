import { bot } from './config.js';

// commands
import { clear } from './commands/clear.js';
import { ping } from './commands/ping.js';
import { pomodoro } from './commands/pomodoro.js';

bot.once("ready", () => {
    console.log("ONLINE 🤖");
});

const prefix = process.env.PREFIX;

bot.on("messageCreate", async (message) => {
    if (message.author.bot) return false; 

    ping(message, prefix);
    clear(message, prefix);
    pomodoro(message, prefix);
});

bot.login(process.env.TOKEN);