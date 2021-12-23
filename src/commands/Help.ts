import { Command } from "@jiman24/commandment";
import { Message, MessageEmbed } from "discord.js";
import { client } from "../index";

export default class Help extends Command {
  name = "help";
  aliases = ["h"];
  description = "show all commands and it's description";

  private banner = "https://cdn.discordapp.com/attachments/921236230220447835/923416890246848582/Banner_new.png";

  async exec(msg: Message) {
    const commands = client.commandManager.commands.values();

    let helpText = "";
    const done = new Set<string>();

    for (const command of commands) {

      if (command.disable)
        continue;

      if (done.has(command.name)) {
        continue
      } else {
        done.add(command.name);
      }

      helpText += 
        `\n**${command.name}**: \`${command.description || "none"}\``;

    }

    const embed = new MessageEmbed()
      .setImage(this.banner)
      .setColor("RANDOM")
      .setTitle("Help")
      .setDescription(helpText)

    msg.channel.send({ embeds: [embed] });
  }
}
