import Escena1 from "./escenas/Escena1.js"
import GameOver from "./escenas/GameOver.js"
import Menu from "./escenas/Menu.js"
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics:{
        default: 'arcade',
        arcade: {
            gravity: {y:300},
            debug:false
        }
    },
    scene:[Menu,Escena1,GameOver]
}
let game = new Phaser.Game(config);