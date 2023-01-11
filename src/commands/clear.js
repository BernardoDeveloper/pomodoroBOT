export async function clear(message, prefix) {
    if (message.content === prefix+'clear') {
        message.delete();
        const fetched = await message.channel.messages.fetch({limit: 99});
        message.channel.bulkDelete(fetched);
        message.channel.send(`🧹 limpo`);
    }
}