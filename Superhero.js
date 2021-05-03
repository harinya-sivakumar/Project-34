class Superhero {
    constructor(x, y, width, height){

        var options = {
            'frictionAir':0.004,
            'density':3.1
            
            
        }
        
        this.body = Bodies.rectangle(x, y, 80, 80, options);
        World.add(myworld, this.body);
        this.image = loadImage("Images/Superhero-01.png");
        this.width = 320;
        this.height = 140;
        
    }

    display(){
       
        var angle = this.body.angle;
        push ();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height);
        pop ();
    }
}

