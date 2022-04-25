class RightTriangle
{
	protected x: number;
	protected y: number;
	protected baseWidth: number;
	protected height: number;

	constructor(x: number, y: number, baseWidth: number, height: number)
	{
		this.x = x;
		this.y = y;
		this.baseWidth = baseWidth;
		this.height = height;
	}

	getWidth()
	{
		return this.baseWidth;
	}

	getHeight()
	{
		return this.height;
	}

	getMainPoint()
	{
		return [this.x, this.y];
	}

	getVerticalPoint()
	{
		return [this.x, this.y + this.height];
	}

	getHorizontalPoint()
	{
		return [this.x + this.baseWidth, this.y];
	}

	getArea()
	{
		return (this.baseWidth * this.height) / 2; 
	}
}

class Trigonometry extends RightTriangle
{
	constructor(x: number, y: number, baseWidth: number, height: number)
	{
		super(x, y, baseWidth, height);
	}

	getOpposite()
	{
		return this.height;
	}

	getAdjacent()
	{
		return this.baseWidth;
	}

	getHypotenuse()
	{
		return parseInt((Math.sqrt((this.baseWidth * this.baseWidth) + (this.height * this.height))).toFixed(2));
	}

	getSin()
	{
		return this.getOpposite() / this.getHypotenuse();
	}

	getCos()
	{
		return this.getAdjacent() / this.getHypotenuse();
	}

	getTan()
	{
		return this.getOpposite() / this.getAdjacent();
	}
}

