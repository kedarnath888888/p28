class Tree {
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,200,300,options);
        this.width=200;
        this.heigth=300;
        this.image=loadImage("tree.png");
        World.add(world,this.body);

    }
    display(){
       var pos =this.body.position;
        imageMode(CENTER);
        image (this.image,pos.x,pos.y,300,500);
    }
}