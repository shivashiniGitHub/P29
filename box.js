class box{
     constructor(x,y,width,height){
      var option = {
      friction:1,
      restitution:0.8
      }
this.body = Bodies.rectangle(x,y,width,height,option);
this.width = width;
this.height = height;
World.add(world,this.body);
}
 display(){
 var pos = this.body.position;
 var angle = this.body.angle;
 push();
 translate(pos.x,pos.y);
 rotate(angle);
 strokeWeight(3);
 stroke("black");
 rectMode(CENTER);
 fill("red");
 rect(0,0,this.width,this.height);
 pop();
 }
}