class paper
{
    constructor(x,y,r)
    {
        var options={
          
            restitution:1,
            friction:0.1,
            frictionAir: 0.0,
            slop: 1,
            inertia: Infinity
          
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    }
    display()
    {
        var paperpos=this.body.position;
        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill("darkgrey")
        ellipse(0,0,this.r,this.r);
        pop()
    }
}