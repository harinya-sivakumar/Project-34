class Monster {
    constructor(x, y, width, height){

        var options = {
            'frictionAir':0.004,
            'density':0.1,
            'isStatic':false
            
            
        }
        
        this.body = Bodies.rectangle(x, y, 80, 80, options);
        World.add(myworld, this.body);
        this.image = loadImage("Images/Monster-01.png");
        this.width = 200;
        this.height = 200;
        
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

