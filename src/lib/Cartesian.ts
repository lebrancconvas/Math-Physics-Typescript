// Based on Computer Graphics's Axis. 
enum Direction
{
	UP = -1,
	DOWN = 1,
	LEFT = -1,
	RIGHT = 1
}

class Point
{
	private x: number;
	private y: number;

	constructor(x: number, y: number)
	{
		this.x = x;
		this.y = y;
	}

	getPoint()
	{
		return [this.x, this.y];
	}

	displayPoint()
	{
		console.log(`-- Point --\nX: ${this.x}\nY: ${this.y}`);
	}

	move(direction: Direction, distance: number)
	{
		if(direction === Direction.UP || direction === Direction.DOWN)
		{
			this.x += distance * direction;
		}
		else if(direction === Direction.LEFT || direction === Direction.RIGHT)
		{
			this.y += distance * direction;
		}
	}
}

