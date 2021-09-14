class Snow{
    constructor(x,y){
        var options = {
            friction:0.4,
            density:0.8
        }      
        this.r = 35
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.SnowImg = loadImage("snow4.webp");
}

    repeat(){
        if(this.body.position.y>650){
            Matter.Body.setPosition(this.body,{x:random(0,1200),y:random(0,600)})
        }
}

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.SnowImg,100,100,this.r,this.r),
        noStroke();
        fill("white");
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.r,this.r);
        pop()

    }
}