class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restituition:0.3,
            friction:0,
            density:1.3,
        }
        this.image = loadImage("paper.png");
		this.r=r/2
        this.body = Bodies.circle(x, y,this.r, options);
       
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
            var angle = this.body.angle
            //console.log(this.body);
            push()
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,20,40);
            pop()
    }
}