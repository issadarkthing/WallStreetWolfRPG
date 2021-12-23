import { Fighter } from "discordjs-rpg";
import { code, currency, random } from "../utils";
import { Player } from "./Player";
import { Skill } from "./Skill";
import { Pet } from "./Pet";

export class Alien extends Fighter {
  drop = random.integer(150, 500);
  xpDrop = random.integer(10, 35);
  imageUrl = random.pick(images);
  difficulty: number;
  
  constructor(player: Player) {
    super(random.pick(names));
    this.difficulty = player.level;
    this.attack = player.attack + this.randomAttrib();
    this.hp = player.hp + this.randomAttrib();
    this.armor = player.armor + (this.randomAttrib() / 100);
    this.critChance = player.critChance + (this.randomAttrib() / 100);
    this.critDamage = player.critDamage + random.integer(0.01, 0.5);

    if (player.skill) {
      const skill = random.pick(Skill.all);
      skill.setOwner(this);
    }

    if (player.pet) {
      const pet = random.pick(Pet.all);
      pet.setOwner(this);
    }
  }

  private randomAttrib() {
    return random.integer(-3, this.difficulty);
  }

  show() {
    const profile = super.show();

    profile.addField(`${currency} Drop`, code(this.drop), true);
    profile.addField("xp Drop", code(this.xpDrop), true);

    return profile;
  }
}


const names = [
  "Liam"       ,
  "Olivia"     ,
  "Noah"       ,
  "Emma"       ,
  "Oliver"     ,
  "Ava"        ,
  "Elijah"     ,
  "Charlotte"  ,
  "William"    ,
  "Sophia"     ,
  "James"      ,
  "Amelia"     ,
  "Benjamin"   ,
  "Isabella"   ,
  "Lucas"      ,
  "Mia"        ,
  "Henry"      ,
  "Evelyn"     ,
  "Alexander"  ,
  "Harper"     ,
  "Mason"      ,
  "Camila"     ,
  "Michael"    ,
  "Gianna"     ,
  "Ethan"      ,
  "Abigail"    ,
  "Daniel"     ,
  "Luna"       ,
  "Jacob"      ,
  "Ella"       ,
  "Logan"      ,
  "Elizabeth"  ,
  "Jackson"    ,
  "Sofia"      ,
  "Levi"       ,
  "Emily"      ,
  "Sebastian"  ,
  "Avery"      ,
  "Mateo"      ,
  "Mila"       ,
  "Jack"       ,
  "Scarlett"   ,
  "Owen"       ,
  "Eleanor"    ,
  "Theodore"   ,
  "Madison"    ,
  "Aiden"      ,
  "Layla"      ,
  "Samuel"     ,
  "Penelope"   ,
  "Joseph"     ,
  "Aria"       ,
  "John"       ,
  "Chloe"      ,
  "David"      ,
  "Grace"      ,
  "Wyatt"      ,
  "Ellie"      ,
  "Matthew"    ,
  "Nora"       ,
  "Luke"       ,
  "Hazel"      ,
  "Asher"      ,
  "Zoey"       ,
  "Carter"     ,
  "Riley"      ,
  "Julian"     ,
  "Victoria"   ,
  "Grayson"    ,
  "Lily"       ,
  "Leo"        ,
  "Aurora"     ,
  "Jayden"     ,
  "Violet"     ,
  "Gabriel"    ,
  "Nova"       ,
  "Isaac"      ,
  "Hannah"     ,
  "Lincoln"    ,
  "Emilia"     ,
  "Anthony"    ,
  "Zoe"        ,
  "Hudson"     ,
  "Stella"     ,
  "Dylan"      ,
  "Everly"     ,
  "Ezra"       ,
  "Isla"       ,
  "Thomas"     ,
  "Leah"       ,
  "Charles"    ,
  "Lillian"    ,
  "Addison"    ,
  "Jaxon"      ,
  "Willow"     ,
  "Maverick"   ,
  "Lucy"       ,
  "Josiah"     ,
  "Paisley"    ,
  "Christopher",
];

const images = [
  "https://cdn.discordapp.com/attachments/921236230220447835/923414637171601458/sneak_peek_31.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923414637465190440/8704046C-D8EA-447A-9278-09E89E4C11A4.JPG",
  "https://cdn.discordapp.com/attachments/921236230220447835/923414637670694973/518A40D0-A402-4094-8C3B-73418CD75AC9.JPG",
  "https://cdn.discordapp.com/attachments/921236230220447835/923414637918171156/IMG_3185.JPG",
  "https://cdn.discordapp.com/attachments/921236230220447835/923414638153060423/sneak_peek_1.JPG",
  "https://cdn.discordapp.com/attachments/921236230220447835/923414638396313640/0F39BE8F-40BC-40D5-A546-7DC3BD55A472.JPG",
  "https://cdn.discordapp.com/attachments/921236230220447835/923414638668939374/sneak_peek_2.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923414638949982228/9.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923414905858715658/12.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923414906219413534/3-01.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923414906513002536/15.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923414906961817650/11.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923414907255410758/2-01.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923414907502866472/7.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923415012930908180/1-01.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923415013161586739/8.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923415013446783016/10.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923415013761376296/5-01.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923415014054973480/14.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923415014264672276/6.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923415014524731392/13.png",
  "https://cdn.discordapp.com/attachments/921236230220447835/923415014747025458/4-01.png",
];
