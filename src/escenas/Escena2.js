class Escena2 extends Phaser.Scene {
    constructor() {
        super("Escena2");
        this.platforms = null;
       this.scoreText = "";
       this.score = 0;
        this.tiempoRestante = 60; // Tiempo en segundos
        this.tiempoTexto = null;
        this.timerEvent = null;
    }

    preload() {
        this.load.image('sky', '../public/img/sky.png');
        this.load.image('fondo2', '../public/img/fondo2.jpg');
        this.load.image('ground', '../public/img/platform.png');
        this.load.image('Suelo', '../public/img/SueloMR.png');
        this.load.image('star', '../public/img/star.png');
        this.load.image('bomb', '../public/img/bomb.png');
        this.load.image('bombax', '../public/img/BombaX.png');
        this.load.image('cofre', '../public/img/cofre.png');
        this.load.spritesheet('dude', '../public/img/dude.png', { frameWidth: 32, frameHeight: 48 });
    }
