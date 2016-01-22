/*
	Author: Carson Rhodes
     Created: Jan 21, 2016
     Updated: Jan 21, 2016
*/

var amountCorrect = 0;
var amountWrong = 0;
var score;

function chkQuiz()
{
	for(var i=1; i<11; i++)
	{
		var choices = document.getElementsByName('q'+i);
		for(j=0; j<choices.length; j++)
		{
			var selection = choices[j];
			if(selection.value == "correct" && selection.checked)
			{
				amountCorrect = amountCorrect + 1;
			}
			else if(selection.value == "wrong" && selection.checked)
			{
				amountWrong = amountWrong + 1;
			}
		}// end for j
	}// end for i
	score = (10 * amountCorrect);
	window.alert("you got " + amountCorrect + " right. Your score is: " + score + "%");
	if(score <= 5)
	{
		window.alert("Wow, awkward silence. Try that one more time.");
	}
	else
	{
		window.alert("Nice job. You can take a simple quiz.");
	}
	
	
}// end chkQuiz()