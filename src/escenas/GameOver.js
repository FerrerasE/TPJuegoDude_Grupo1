class GameOver extends Phaser.Scene {
    constructor() {
        super("GameOver"); // El nombre de la escena
    }

    preload() {
        // Carga la imagen de fondo
        this.load.image('menuBackground', 'ruta de la imagen '); // Reemplaza '....' con la ruta correcta

    }



    create() {
        
        this.add.image(400, 300, 'gameOverImage'); // Ajusta las coordenadas y el nombre de la imagen

        // Para gregar texto
        
        // this.add.text(200, 500, 'Game Over', { fontSize: '48px', fill: '#fff' });

        // temporizador para regresar al juego 
        this.time.addEvent({
            delay: 3000, // Tiempo en milisegundos
            callback: this.returnToGame,
            callbackScope: this
        });
    }

    returnToGame() {
        
        this.scene.start('Escena1'); 
    }
}

export default GameOver;
