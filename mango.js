class Mango {
    constructor(x,y,radius){
        var options = { 
            'isStatic': true,
            'restitution':0,
            'friction':1
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius=10;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0,50,50);
        pop();

    }
}