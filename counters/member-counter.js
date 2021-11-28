module.exports = async (client) =>{
    const guild = client.guilds.cache.get('913572464901128262');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('914356689480863744');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`)
        console.log("Updating member count...");
    }, 5000);
}