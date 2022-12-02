const randomTextFromArray = (texts: string[]) => {
	  return texts[Math.floor(Math.random() * texts.length)];
};
const randomText = (text: string) => {
	const coolTexts = [
		`Howdy, ${text}!`, 
		`OMG IT\'S ${text}!`,
		`Whats up, ${text}?`,
		`Hey, ${text}!`,
		`Hello, ${text}!`,
		`I set fire to ${text}!`,
		`I\'m so glad to see you, ${text}!`,
		`Hey, ${text}, do you ever stop to think about me?`,
		`I\'m sorry, the old ${text} can't come to the phone right now. Why? Oh, 'cause their dead!`,
		`But if it's always me and you, and your friend ${text}`,
		`Lovely to see you, ${text}!`,
	];
	const nightOnlyTexts = [
		`Good night, ${text}!`,
		`Good evening, ${text}!`,
		`Wonderful evening isnt it, ${text}?`,
	];

	const afternoonOnlyTexts = [
		`Good afternoon, ${text}!`,
		`Lovely afternoon, ${text}!`,
		`Good day, ${text}!`,
	];
	
	const morningOnlyTexts = [
		`Good morning, ${text}!`,
		`Lovely morning, ${text}!`,
		`Good day, ${text}!`,
	];
	const isTimeBased = Math.random() > 0.4;
	if (isTimeBased) return randomTextFromArray(coolTexts);
	const date = new Date();
	const hour = date.getHours();
	if (hour >= 18) return randomTextFromArray(nightOnlyTexts);
	if (hour >= 12) return randomTextFromArray(afternoonOnlyTexts);
	return randomTextFromArray(morningOnlyTexts);
}

export default randomText;