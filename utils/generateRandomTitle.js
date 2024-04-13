const adjectives = ['Amazing', 'Brilliant', 'Colorful', 'Daring', 'Epic', 'Fantastic', 'Glorious', 'Happy', 'Incredible', 'Jubilant', 'Kind', 'Lively', 'Magical', 'Noble', 'Optimistic', 'Powerful', 'Radiant', 'Spectacular', 'Thrilling', 'Vibrant', 'Adventurous', 'Breathtaking', 'Courageous', 'Dynamic', 'Enchanting', 'Fascinating', 'Gigantic', 'Harmonious', 'Inspiring', 'Joyful', 'Majestic', 'Overflowing', 'Passionate', 'Remarkable', 'Stunning', 'Tremendous', 'Vivid', 'Whimsical', 'Zealous'];
const nouns = ['Adventure', 'Beach', 'Castle', 'Dream', 'Excitement', 'Forest', 'Garden', 'Harmony', 'Island', 'Journey', 'Kingdom', 'Legend', 'Mountain', 'Nature', 'Ocean', 'Paradise', 'Quest', 'Rainbow', 'Sunset', 'Treasure', 'Wonder', 'Bliss', 'Cascade', 'Destiny', 'Eternity', 'Freedom', 'Glory', 'Horizon', 'Infinity', 'Miracle', 'Oasis', 'Passion', 'Radiance', 'Serenity', 'Tranquility', 'Utopia', 'Wanderlust', 'Zenith', 'Cascade', 'Desire', 'Eclipse', 'Fantasy'];

// Function to generate a random title
export default () => {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
}
