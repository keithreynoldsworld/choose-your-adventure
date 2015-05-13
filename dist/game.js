function* chooseYourAdventure() {
	console.log(yield adventure.say('the amazing ARE YOU DESTINED TO BE ROCK STAR? quiz', 'do you have what it takes?'));
	console.log(yield adventure.say('Answer the following questions AND YOU WILL BE JUDGED', 'rockstar or boring'));
	var yourName = (yield adventure.ask('What is your name?'));


	console.log(yield adventure.say(yourName + ' is not a very rockstarish name.', 'I am doubtful of your coolness already.'));

	var yourAge = (yield adventure.ask('What is your age?'));

	if (yourAge < 15 )
		{ console.log(yield adventure.say(yourName + ',
		 you are way too young to be thinking of such things.',
		  'Maybe you should go hang out at http://www.pbskids.org'  ));}

	else if (yourAge > 27){console.log(yield adventure.say('YOU ARE BORING. 
		If you were really a rock star you\'d be dead by now.',
		'Maybe you should consider being a Customer Service Representative. THE END'))}

		else {console.log(yield adventure.say(yourAge + ' is a perfect age to be a rock star.', 'please continue')); 

			var whichDrug = (yield adventure.choose('Which of the following drugs do you do on a regualar basis?', 
				'Marijuana', 'Molly', 'Cocaine', 'All of the Above'));

			if (whichDrug === ('Marijuana' || 'Molly' || 'Cocaine')
			 {console.log(yeild adventure.say('YOU ARE BORING.  rock stars do all the drugs they can',
			 	'Perhaps you could consider being a high school guidance counselor. THE END'))}

			else	{ console.log(yield adventure.say(yourName + 
				'users are losers except for ROCK STARS! nice job.','please continue' ));} 

				var whichActivity = (yield adventure.choose('Which activity would you prefer on a Saturday Night?', 
				'Save a kitten', 'Read a true crime novel', 'Study javascript', 'Get drunk and drown in a pool'));

				if (whichActivity = ('Save a kitten' || 'Read a true crime novel' || 'Study French') {
				console.log(yield adventure.say('YOU ARE BORING.',
					'perhaps you should consider being a veterinarian, a detective, or a mime. THE END'))
				} 

				else {console.log(yield adventure.say('WOW YOU REALLY ARE A ROCK STAR AT HEART!!!',
				'congratulations, we\'ll have fun listening to your songs while you rest in peace. THE END.'))} 
				

}





