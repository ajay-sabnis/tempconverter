class temperature
{
	constructor(c=0)
	{
		this.c=c;
	}
	convert()
	{
		return 9*this.c/5+32;
	}	
}
export {temperature};