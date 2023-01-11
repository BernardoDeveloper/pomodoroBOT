export async function ping(message, prefix) {
    if (message.content === prefix+'ping') {
        message.channel.send(`🏓 ping ${Date.now() - message.createdTimestamp}ms`);
    }
}