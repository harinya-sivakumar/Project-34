class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 100
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(myworld, this.rope);
        
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(0, 0, 0);

                strokeWeight(0);

                line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
                
            }
       }
           
    }
    
