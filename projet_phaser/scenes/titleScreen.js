class titleScreen extends Phaser.Scene {
    constructor() {
        super('titleScreen'); 
    }

    preload(){
        this.load.image('TitleScreen', '../assets/titleScreen.png');
        this.load.image('starButton','../assets/startButton.png')

    }

    create(){
        
        this.add.image(640, 360, 'TitleScreen');
        
        

    this.cursors = this.input.keyboard.createCursorKeys();

    }

    update(){

        if (this.cursors.space.isDown){
            this.scene.start("scene1");
        }

    }
}