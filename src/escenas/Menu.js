class Menu extends Phaser.Scene {
    constructor() {
        super("Menu");
    }

    preload() {
        // Carga la imagen de fondo
        this.load.image('menuBackground', 'ruta de la imagen ../../../'); // Reemplaza '....' con la ruta correcta

    }



    create() {
       
        this.add.image(0, 0, 'lugar donde esta la imagen a mostrar'); // las coordenadas y el nombre de la imagen

        //  botón de inicio
        const startButton = this.add.text(400, 400, 'Inicio', {
            fontSize: '32px',
            fill: '#fff',
            backgroundColor: '#00f', // Color de fondo del botón
            padding: { x: 20, y: 10 }, // Espaciado interno del botón
        });
        
        startButton.setOrigin(0.5); // Centra el botón en su posición
        startButton.setInteractive(); // Hace que el botón sea interactivo

        // un evento de clic para el botón
        startButton.on('pointerdown', () => {
            this.scene.start('Escena1'); // Inicia la escena principal cuando se hace clic
        });
    }
}

export default Menu;

