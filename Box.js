class Box{
    constructor(x, y, width, height){

        var options = {
            restitution: 1
        }
        this.wbox = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;

        World.add(myLand, this.wbox);

    }

    display(){
        var pos=this.wbox.position;

        push();
        translate(pos.x, pos.y)
        rotate(this.wbox.angle);
        stroke("green");
        fill(255);
        rectMode(CENTER);
        rect(0, 0, this.width,this.height);
        pop();
    }






}