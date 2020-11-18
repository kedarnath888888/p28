class Stone {
    constructor(x,y,radius){
        var options ={
            'isStactic':false,
            'restitution':0,
            'friction':1,
            'density':0.1
        }
    this.body = Bodies.circle(x,y,10,options);
    this.radius=10;
    this.image=loadImage("stone.png");
    World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,50,50);
        pop();

    }
}