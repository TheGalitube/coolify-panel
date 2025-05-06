
import discord
import os

intents = discord.Intents.default()
client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f'Bot ist online als {client.user}')

client.run(os.getenv("TOKEN"))
