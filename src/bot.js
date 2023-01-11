import { bot } from './config.js';
import { ActivityType } from 'discord.js';

// commands
import { clear } from './commands/clear.js';
import { ping } from './commands/ping.js';
import { pomodoro } from './commands/pomodoro.js';

bot.once("ready", () => {
    console.log("ONLINE 🤖");
    bot.user.setActivity('pomodoro 🍅', { type: ActivityType.Listening });
});

const prefix = process.env.PREFIX;

bot.on("messageCreate", async (message) => {
    if (message.author.bot) return false; 

    ping(message, prefix);
    clear(message, prefix);
    pomodoro(message, prefix);
});

bot.login(process.env.TOKEN);