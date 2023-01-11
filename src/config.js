import { config } from 'dotenv'; config();

import { Client, GatewayIntentBits, Partials } from 'discord.js';

export const bot = new Client({
    'intents': [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    'partials': [Partials.Channel]
});