import Escena1 from "./escenas/Escena1.js"
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
    scene:[Escena1]
}
let game = new Phaser.Game(config);