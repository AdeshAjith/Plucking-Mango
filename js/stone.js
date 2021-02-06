class stone{
    constructor(x,y,r){
      var Stone_Options={
        isStatic:false,
        restitution :0,
        friction :1,
        density: 1.2
      } 
       this.body = Bodies.circle(x,y,r,Stone_Options)
       this.r = r
       this.image = loadImage("images/stone.png")
       World.add(world,this.body)
    }
    display(){
        var Pos=this.body.position;	
		push()
		translate(Pos.x, Pos.y);
		rotate(this.body.angle)
		imageMode(CENTER);
		image(this.image, 0,0,70,70)
		pop()
    }
}