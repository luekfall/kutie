const { CommandClient } = require('eris')

// kutie 
async function init(token) {
    const kutie = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // register the lame ahhh slash command or wtv
    kutie.on('ready', async () => {
        await kutie.bulkEditCommands([{
            name: 'kat',
            description: 'i am a kat',
            type: 1,
        }])
        console.log(`meowz starting`)
    })
    // creation event or wtv
    kutie.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'kat') {
            await interaction.createMessage({
                content: 'meow.'
            })
            console.log('meow out...')
            
        }
    })
    

    kutie.connect();
}

const tokenFromKutie = process.argv[2]
init(tokenFromKutie);
