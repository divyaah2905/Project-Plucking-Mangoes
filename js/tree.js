class Tree
{
	constructor(x,y)
	{
var options= {
	isStatic : true 
}
		this.x=x;
		this.y=y;
		this.treeWidth=450;
		this.treeHeight=600;
		this.treeThickness=10;
		this.image=loadImage("images/tree.png")

		this.body=Bodies.rectangle(x,y,this.treeWidth,this.treeThickness,options);
		
		World.add(world,this.body);
		
	}

	display()
	{
			var posBottom=this.body.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.treeHeight/2,this.treeWidth, this.treeHeight)
			pop()
			
	}

}