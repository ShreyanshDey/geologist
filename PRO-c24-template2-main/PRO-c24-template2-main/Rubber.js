class Rubber{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options={
    
		restitution:2,
		friction:1,
		density:1
		 }
		this.x=x;
		this.y=y;
		this.body= Bodies.rectangle(x,y,50,30,options);
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the rect here to display the rubber ball
			rect(0,0,this.width,this.height);
			pop()
	}

}