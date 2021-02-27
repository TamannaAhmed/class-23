class Ground {
        constructor(x,y,width,height){
                var options = {
                    isStatic: true
                }
            this.body=Bodies.rectangle(x,y, width, height, options);
            this.width = width;
            this.heignt=height;   
            World.add(myLand,this.body);

 
        }
 
 display(){
     var pos = this.body.position
   // push();
    fill("brown");
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
   // pop();

}





}