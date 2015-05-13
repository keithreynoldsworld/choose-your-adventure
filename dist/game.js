function* chooseYourAdventure() {
	console.log(yield adventure.say('ARE YOU A ROCK STAR?', 'do you know what it takes?'));
	console.log(yield adventure.say('Answer the following questions AND YOU WILL BE JUDGED', 'rockstar or boring'));
	var yourName = (yield adventure.ask('What is your name?'));


	console.log(yield adventure.say(yourName + ' is not a very rockstarish name.', 'I am doubtful of your coolness already.'));

	var yourAge = (yield adventure.ask('What is your age?'));

	if (yourAge < 15 )
		{ console.log(yield adventure.say(yourName + ', you are way too young to be thinking of such things.', 'Maybe you should go hang out at http://www.pbskids.org'  ));} 
	else if (yourAge > 27){console.log(yield adventure.say("If you were really a rock star you'd be dead by now."))}
		else {console.log(yield adventure.say(yourAge + ' is a perfect age to be a rock star.', 'please continue')) }

	console.log(yield adventure.choose('Woah', 'This is cool', 'Hello world', yourName));
	console.log(yield adventure.say('That\'s all folks!', 'THE END'));
}




