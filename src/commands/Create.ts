import { Command } from "@jiman24/commandment";
import { Message, MessageEmbed } from "discord.js";
import { client } from "../index";
import { bold } from "../utils";
import { Player } from "../structure/Player";

export default class extends Command {
  name = "create";
  description = "create new character";

  async exec(msg: Message) {

    if (client.players.has(msg.author.id)) {
      throw new Error("your character has already been created");
    }


    const avatarUrl = msg.author.avatarURL() || msg.author.defaultAvatarURL;
    const player = new Player(msg.author, avatarUrl);

    player.save();

    const { prefix } = client.commandManager;

    msg.channel.send(`${bold(player.name)} has been created successfully!`);

    let description = "";

    description += `Use \`${prefix}profile\` to checkout your profile\n`;
    description += `Use \`${prefix}hunt\` to start hunting opponents!\n`;
    description += `Use \`${prefix}help\` to check out other commands!`;

    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://cdn.discordapp.com/attachments/921236230220447835/923420422224105512/logo.png")
      .setThumbnail(player.imageUrl!)
      .setTitle("Welcome to WallStreetWolfRPG")
      .addField("---", description);

    msg.channel.send({ embeds: [embed] });

  }
}
