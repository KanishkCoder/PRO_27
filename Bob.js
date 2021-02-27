class Bob
{
	constructor(x,y)
	{
        var options={
            isStatic:false,
            restitution:1,
            friction:0,    
            density:7.8
        }
		this.body=Bodies.circle(x,y,25,options)
		World.add(world,this.body)

	}
	display()
	{
			var Bobpos=this.body.position;
			

			push()
			ellipseMode(RADIUS);
			fill(255,0,255)
			ellipse(this.body.position.x,this.body.position.y,25,25);
			//rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()
	}

}