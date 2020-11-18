class Ground {
    constructor(x,y,width,height){
        var options ={
            'isStatic':true
        }
        this.body = Bodies.rectangle(x,y,900,50,options);
        this.width = 900;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255,0,0);
        rect (pos.x,pos.y,1000,50);
    }
}