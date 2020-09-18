var operand1 = null;
var operand2 = null;
var operator = null;
var buttons  = document.getElementsByClassName('button');
var display  = document.getElementById('display');

for(var i=0; i<buttons.length; i++)
{

	document.onkeydown = function(event)
	{
		value = event.key;
		// display.textContent = display.textContent+value;
		var text = display.textContent.trim();
		console.log("You Pressed,"+value);
		if (value=="+" || value=="-" || value=="*" || value=="/")
		{
			operator = value;
			operand1 = parseFloat(text);
			display.textContent = "";
		}
		else if(value=="Backspace")
		{
			display.textContent = "";
		}
		else if(value=="%" & value=="Shift")
		{
			operator = value;
			operand1 = parseFloat(text);
			operand1 = operand1/100;
			display.textContent = operand1;
		}

		else if(value==".")
		{
			if(!text.includes("."))
			{
				display.innerHTML = text + '.';
			}
		}

		else if(value=="=" || value=="Enter")
		{
			operand2 = parseFloat(text);
			var result = eval(operand1+" "+operator+" "+operand2);
			console.log(operand2);
			if(result)
			{
				display.textContent = result;
				operand1 = result;
				operand2 = null;
				operator = null;
			}
		}

		else if(value=="sign")
		{
			operand1 = parseFloat(text);
			operand1 = -1*operand1;
			display.textContent = operand1;
		}

		else if(value=="q"||value=="w"||value=="e"||value=="r"||value=="t"||value=="y"||value=="u"||value=="i"||value=="o"||value=="p"||value=="a"||value=="s"||value=="d" || value=="f" || value=="g" || value=="h" || value=="j" || value=="k" || value=="l" || value=="z"|| value=="x" || value=="c" || value=="v" || value=="b" || value=="n" || value=="m" || value=="Shift" || value=="CapsLock" || value=="Tab" || value=="~" || value=="Alt" || value=="Control")
		{
			display.textContent = display.textContent+"Error";
		}

		else
		{
			display.textContent = display.textContent+value;
		}
	}


	buttons[i].addEventListener('click', function()
	{
		var value = this.getAttribute('data-value');
		var text = display.textContent.trim();
		if (value=="+" || value=="-" || value=="*" || value=="/")
		{
			operator = value;
			operand1 = parseFloat(text);
			display.textContent = "";
			console.log(operand1);
		}

		else if(value=="AC")
		{
			display.textContent = "";
		}

		else if(value=="%")
		{
			operator = value;
			operand1 = parseFloat(text);
			operand1 = operand1/100;
			display.textContent = operand1;
		}

		else if(value==".")
		{
			if(!text.includes("."))
			{
				display.innerHTML = text + '.';
			}
		}

		else if(value=="=")
		{
			operand2 = parseFloat(text);
			var result = eval(operand1+" "+operator+" "+operand2);
			console.log(operand2);
			if(result)
			{
				display.textContent = result;
				operand1 = result;
				operand2 = null;
				operator = null;
			}
		}

		else if(value=="sign")
		{
			operand1 = parseFloat(text);
			operand1 = -1*operand1;
			display.textContent = operand1;
		}

		else
		{
			display.textContent = display.textContent+value;
		}
	});
}