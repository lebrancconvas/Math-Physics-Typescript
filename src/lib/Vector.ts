class Vector2D
{
	private x: number;
	private y: number;


	constructor(x: number, y: number)
	{
		this.x = x;
		this.y = y;
	}

	distance()
	{
		return parseFloat(Math.sqrt(this.x * this.x + this.y * this.y).toFixed(2));
	}

	angle()
	{
		return parseFloat(((Math.atan(this.y / this.x) * 180) / Math.PI).toFixed(2));
	}

	rotate(angle: number)
	{
		const newAngle = this.angle() + angle;
		this.x = this.distance() * Math.cos((newAngle * Math.PI) / 180);
		this.y = this.distance() * Math.sin((newAngle * Math.PI) / 180);
	}
}

class Vector3D extends Vector2D
{
	private z: number;
	constructor(x: number, y: number, z: number)
	{
		super(x, y);
		this.z = z;
	}
}

const Vect_1 = new Vector2D(5, 12);
Vect_1.rotate(90);
console.log(Vect_1.distance());
console.log(Vect_1.angle());
