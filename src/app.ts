// Code Something. 

// x = r*cos(theta);
// y = r*sin(theta);
const π = Math.PI;

const convertToPolar = (x: number, y: number): [number, number] =>
{
	const theta = Math.atan(y / x);
	const r = x / Math.cos(theta);
	const angle = (theta * 180) / π;
	return [parseFloat(r.toFixed(2)), parseFloat(angle.toFixed(2))];
}

const convertToCartesian = (r: number, theta: number): [number, number] =>
{
	const x = r * Math.cos((theta * π) / 180);
	const y = r * Math.sin((theta * π) / 180);

	return [parseFloat(x.toFixed(2)), parseFloat(y.toFixed(2))];
}

const [a, b] = convertToPolar(12, 20);
const [x, y] = convertToCartesian(a, b);
console.log(`X: ${x}\nY: ${y}`); 



