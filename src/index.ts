/**
 * This method return the name initials for the username.
 * It handles following edge cases:
 * "Robin Hood", "Robin", "Robit, Hood", "undefined"
 * @param name User name
 * @returns the initials of the username
 */
export const getNameInitials = (name: string): string => {
	let result = "";
	if (name) {
		let tmp = name
			.replace(/[\W_]/gi, " ") // keeps the alphanumeric chars only
			.replace(/\s+/g, " ") // removes extra spaces
			.trim()
			.split(" ")
			.slice(0, 2); // keeps the 1st two words only. handles the single word edge case

		result =
			tmp.length <= 1
				? tmp[0].slice(0, 2) // get 1st two chars if less than 2 words
				: tmp.map((w: string) => w.charAt(0)).join(""); // gets the initials of 1st two words
	}
	return result;
};
