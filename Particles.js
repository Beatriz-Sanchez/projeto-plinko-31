class Particles {
  constructor(x){
    var options = {
      restitution: 0.4
    };
    this.body = Bodies.circle(x,10,10,options);
    World.add(world,this.body);
    this.r = 10;
    this.color = color(random(50,255),random(50,255),random(50,255));
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.r,this.r);
    pop();
  }
}