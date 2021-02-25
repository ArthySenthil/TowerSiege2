class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      this.image=loadImage("sprites/wood1.png");
      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      if(this.body.speed <3){
      
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        
        push();
        this.visibility = this.visibility -5;
        tint(255,this.visibility)
        image(this.image,pos.x, pos.y, this.width, this.height);
        console.log(this.body.speed);

        pop();
        
      }
     
    }
  };