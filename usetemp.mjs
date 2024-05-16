import {temperature} from "./temp.mjs";
import PromptSync from "Prompt-sync";

try{
	
	let prompt=PromptSync();
	let c;
	c=parseFloat(prompt("enter celsius temperature:"));
	let a;
	a=new temperature(c);

	console.log("Fahrenheit temperature:",a.convert());
}
catch(e)
{
	console.log(e.message);
}