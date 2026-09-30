//your JS code here. If required.
let k = ""
for(let i=1;i<21;i++){
	if(i%3===0)
	{
		k += "Fizz\n"
	}
	else if(i%5 === 0)
	{
		k += "Buzz\n"
	}
	else if(i%3 === 0 && i%5===0)
	{
		k += "FizzBuzz\n"
	}
	else{
		k += i +"\n"
	}
}
alert(k)