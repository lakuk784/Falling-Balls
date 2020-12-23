class pinklo 
{
    constructor (x,y)
    {
         var ops =
         {
            isStatic:true
         }
         
         this.body = Bodies.circle (x,y,10,ops)
         World.add(world,this.body)
    }

    display()
    {
       var pos = this.body.position
       var angle = this.body.angle
        push();
        translate (pos.x,pos.y)
        rotate (angle)
        ellipseMode (RADIUS)
        fill ("white")
        ellipse (0,0,10,10)
        pop();
    }
}