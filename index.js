// home help button

document.getElementById('help-button').addEventListener('click', function() {
    if (this.innerHTML.trim() === '?') {
        this.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="26" viewBox="0 0 15 26" fill="none">
                <path d="M14 0.999998L1 13L14 25" stroke="#EDD037" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
        document.getElementById('help-section').style.display='block';
    } else {
        this.innerHTML = '?';
        document.getElementById('help-section').style.display='none';
    }
});

// audio

const ratAudio = document.getElementById('rat-audio');
const oxAudio = document.getElementById('ox-audio');
const tigerAudio = document.getElementById('tiger-audio');
const rabbitAudio = document.getElementById('rabbit-audio');
const dragonAudio = document.getElementById('dragon-audio');
const snakeAudio = document.getElementById('snake-audio');
const horseAudio = document.getElementById('horse-audio');
const goatAudio = document.getElementById('goat-audio');
const monkeyAudio = document.getElementById('monkey-audio');
const roosterAudio = document.getElementById('rooster-audio');
const dogAudio = document.getElementById('dog-audio');
const pigAudio = document.getElementById('pig-audio');
// lol i hate js

// change home state on submit and back buttons

function changeState(state) {
  const home = document.getElementById('body-home');
  const zodiac = document.getElementById('body-zodiac');

  if (state === 'home') {
      home.style.display = 'flex';
      zodiac.style.display = 'none';
  } else if (state === 'zodiac') {
      home.style.display = 'none';
      zodiac.style.display = 'block';
  }
}

document.getElementById('submit-button').addEventListener('click', function() {
  changeState('zodiac');
    checkZodiac();

});
document.getElementById('back-button').addEventListener('click', function() {
  changeState('home');
        checkZodiac();
});

// change home state on side column buttons

const yearButtons = document.querySelectorAll('.year');

yearButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        const year = event.target.getAttribute('data-year');
        changeState('zodiac');
        setZodiacData(year);
    });
});

// data for years

function generateZodiacYears(cycleStartYear, endYear) {
    let years = [];
    for (let year = cycleStartYear; year <= endYear; year += 12) {
        years.push(year);
    }
    return years;
}

function setZodiacData(inputYear) {
    if (!inputYear) return;
    inputYear = parseInt(inputYear);

    const zodiacText = document.getElementById('zodiac-text');
    const zodiacBody = document.querySelector('.body-zodiac-font');

    const endYear = 2043;
    const baseYear = 1936; // rat starting yr

    const ratYears = generateZodiacYears(baseYear, endYear);
    const oxYears = generateZodiacYears(baseYear + 1, endYear);
    const tigerYears = generateZodiacYears(baseYear + 2, endYear);
    const rabbitYears = generateZodiacYears(baseYear + 3, endYear);
    const dragonYears = generateZodiacYears(baseYear + 4, endYear);
    const snakeYears = generateZodiacYears(baseYear + 5, endYear);
    const horseYears = generateZodiacYears(baseYear + 6, endYear);
    const goatYears = generateZodiacYears(baseYear + 7, endYear);
    const monkeyYears = generateZodiacYears(baseYear + 8, endYear);
    const roosterYears = generateZodiacYears(baseYear + 9, endYear);
    const dogYears = generateZodiacYears(baseYear + 10, endYear);
    const pigYears = generateZodiacYears(baseYear + 11, endYear);
  
    // begone ugly array 
//   const ratYears = [1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032];
//   const oxYears = [1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033];
//   const tigerYears = [1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034];
//   const rabbitYears = [1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035];
//   const dragonYears = [1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036];
//   const snakeYears = [1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037];
//   const horseYears = [1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038];
//   const goatYears = [1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039];
//   const monkeyYears = [1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028, 2040];
//   const roosterYears = [1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029, 2041];
//   const dogYears = [1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042];
//   const pigYears = [1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043];

  zodiacBody.textContent = '';
    if (ratYears.includes(inputYear)) {
        zodiacText.textContent = '鼠 (RAT)';
        ratAudio.play();
    
        const p1 = document.createElement("p");
        p1.textContent = 'The rat is considered clever, resourceful, and adaptable. In Chinese folklore, the rat is known for its intelligence and ability to overcome challenges.  In Chinese tradition, it is believed that wearing accessories or clothing with rat imagery can bring luck and prosperity.';
        const p2 = document.createElement("p");
        p2.textContent = 'People born in the Year of the Rat are believed to possess qualities such as wit, charm, and ambition. They are seen as quick thinkers and often excel in problem-solving.';
        zodiacBody.appendChild(p1);
        zodiacBody.appendChild(p2);
 
      } else if (oxYears.includes(inputYear)) {
          zodiacText.textContent = '牛 (OX)';
          
        oxAudio.play();
                  const p1 = document.createElement("p");
        p1.textContent = 'As the second animal in the Chinese zodiac cycle, the ox represents diligence, perseverance, honesty, down-to-earth persistence, and hard work. It is often associated with characteristics such as reliability, stability, and patience.';
        const p2 = document.createElement("p");
        p2.textContent = 'The ox represents a strong work ethic and the ability to endure challenges. Chinese folklore often portrays the ox as an indispensable helper in agricultural labor. This association has led to the ox being regarded as a symbol of prosperity, productivity, and abundance. In fact, the Chinese New Year celebrations often feature the ox as a symbol of good fortune and agricultural abundance.';
        zodiacBody.appendChild(p1);
        zodiacBody.appendChild(p2);

      } else if (tigerYears.includes(inputYear)) {
          zodiacText.textContent = '虎 (TIGER)';
          
        tigerAudio.play();
                  const p1 = document.createElement("p");
        p1.textContent = 'The Tiger is known as the king of all beasts in China. The zodiac sign Tiger is a symbol of strength, exorcising evils, and braveness. Many Chinese kids wear hats or shoes with a tiger image for good luck.';
        const p2 = document.createElement("p");
        p2.textContent = 'People born in the year of the Tiger usually have a down-to-earth personality and down-to-earth work ethic. With great confidence and indomitable fortitude, they can be competent leaders.';
        zodiacBody.appendChild(p1);
        zodiacBody.appendChild(p2);

      } else if (rabbitYears.includes(inputYear)) {
          zodiacText.textContent = '兔 (RABBIT)';
          
        rabbitAudio.play();
                  const p1 = document.createElement("p");
        p1.textContent = 'According to Chinese astrology, Rabbits are predicted to be gentle, quiet, elegant, and alert as well as quick, skillful, kind, patient, and very responsible, sometimes reluctant to reveal their minds to others and having a tendency to escape reality, but always faithful to those around them.';
        const p2 = document.createElement("p");
        p2.textContent = 'The sign of Rabbit is a symbol of longevity, peace, and prosperity in Chinese culture. People born in a year of the Rabbit are called "Rabbits" and are believed to be vigilant, witty, quick-minded, and ingenious.';
        zodiacBody.appendChild(p1);
        zodiacBody.appendChild(p2);

      } else if (dragonYears.includes(inputYear)) {
          zodiacText.textContent = '龙 (DRAGON)';
          
        dragonAudio.play();
                  const p1 = document.createElement("p");
        p1.textContent = "In Chinese culture, the dragons are majestic and powerful. They could lead the world due to their dominant nature and ambitious spirit. The emperors of ancient China often regarded themselves as the Dragon, the Son of Heaven.";
        const p2 = document.createElement("p");
        p2.textContent = "Gifted with innate courage, tenacity, and intelligence, Dragons are usually enthusiastic and confident. They are not afraid of challenges, and willing to take risks. They strive to break away from traditional norms and pave the way for a brighter future.";
        zodiacBody.appendChild(p1);
        zodiacBody.appendChild(p2);

      } else if (snakeYears.includes(inputYear)) {
          zodiacText.textContent = '蛇 (SNAKE)';
          
        snakeAudio.play();
                  const p1 = document.createElement("p");
        p1.textContent = 'In Chinese zodiac, the snake is associated with wisdom, charm, elegance, and transformation. People born in the Year of the Snake are believed to be intuitive, strategic, and intelligent.';
        const p2 = document.createElement("p");
        p2.textContent = 'Snakes tend to act according to their own judgments while remaining private and reticent. They are determined to accomplish their goals and hate to fail. Snakes represent the symbol of wisdom. They are good at communication but say little. Snakes are usually regarded as great thinkers.';
        zodiacBody.appendChild(p1);
        zodiacBody.appendChild(p2);

      } else if (horseYears.includes(inputYear)) {
          zodiacText.textContent = '马 (HORSE)';
          
        horseAudio.play();
                  const p1 = document.createElement("p");
        p1.textContent = 'In Chinese culture, the Horse is known for its energetic and dynamic nature. It symbolizes vitality, speed, and perseverance. People born in the Year of the Horse are believed to possess similar traits, such as being hardworking, warm-hearted, and independent.';
        const p2 = document.createElement("p");
        p2.textContent = 'The Horse is also associated with success and good fortune. There is a phrase "马到成功" in Chinese. It represents achieving success swiftly and smoothly, just like when a victorious horse arrives at the battlefield. It implies that success can be achieved rapidly and effortlessly. Some people may wear clothing or accessories depicting horses or incorporate horse imagery in their homes for positive energy and fortune.';
        zodiacBody.appendChild(p1);
        zodiacBody.appendChild(p2);

      } else if (goatYears.includes(inputYear)) {
          zodiacText.textContent = '羊 (GOAT)';
          
        goatAudio.play();
                  const p1 = document.createElement("p");
        p1.textContent = 'The Goat, also known as the Sheep or Ram, a symbol of gentleness, kindness, and peace in Chinese culture. People born in the year of the Goat are often considered artistic, compassionate, and nurturing. They are believed to have a calm and harmonious nature, fostering supportive environments for those around them.';
        const p2 = document.createElement("p");
        p2.textContent = 'Although Goat people may look gentle on the surface, they usually possess a strong inner resilience, always insisting on their own opinions in their minds.';
        zodiacBody.appendChild(p1);
        zodiacBody.appendChild(p2);

      } else if (monkeyYears.includes(inputYear)) {
          zodiacText.textContent = '猴 (MONKEY)';
          
        monkeyAudio.play();
                  const p1 = document.createElement("p");
        p1.textContent = 'The Monkey is the ninth of 12 animals in the recurring 12-year Chinese zodiac cycle. It is a symbol of cleverness, versatility, and innovation. People born in the year of the Monkey are usually smart, quick-witted, and versatile. With a mischievous and playful nature, Monkeys are typically entertaining and can be great companions.';
        const p2 = document.createElement("p");
        p2.textContent = "People born in a year of the Monkey have magnetic personalities and are witty and intelligent. Personality traits like mischievousness, curiosity, and cleverness make them very naughty. Although they are clever and creative, Monkeys usually can't always exhibit their talents properly. They like to accept challenges and prefer urban life to rural life.";
        zodiacBody.appendChild(p1);
        zodiacBody.appendChild(p2);

      } else if (roosterYears.includes(inputYear)) {
          zodiacText.textContent = '鸡 (ROOSTER)';
          
        roosterAudio.play();
                  const p1 = document.createElement("p");
        p1.textContent = 'In Chinese culture, the Rooster is often regarded as a symbol of perseverance, hard work, punctuality, timekeeping, and being alert. People born in the year of Rooster are usually self-assured, confident, and ambitious. They display dedication and discipline towards their tasks, often striving for excellence in whatever they do.';
        const p2 = document.createElement("p");
        p2.textContent = 'People born in a year of the Rooster are very observant. Hardworking, resourceful, courageous, and talented, Roosters are very confident in themselves. Roosters are always active, amusing, and popular within a crowd. They are usually talkative, outspoken, frank, open, honest, and loyal individuals. They like to be the center of attention and always appear attractive and beautiful.';
        zodiacBody.appendChild(p1);
        zodiacBody.appendChild(p2);

      } else if (dogYears.includes(inputYear)) {
          zodiacText.textContent = '狗 (DOG)';
          
        dogAudio.play();
                  const p1 = document.createElement("p");
        p1.textContent = 'In Chinese culture, the Dog is highly regarded for its protective nature, strong sense of responsibility, and willingness to go above and beyond for loved ones. The zodiac sign Dog is a symbol of loyalty, companionship, and faithfulness.';
        const p2 = document.createElement("p");
        p2.textContent = 'Dogs are usually loyal and honest, amiable and kind, cautious and prudent. Due to having a strong sense of loyalty and sincerity, Dogs will do everything for the person who they think is most important. They are usually protective and caring, going to great lengths to ensure the safety and happiness of their loved ones.';
        zodiacBody.appendChild(p1);
        zodiacBody.appendChild(p2);

      } else if (pigYears.includes(inputYear)) {
          zodiacText.textContent = '猪 (PIG)';
          
        pigAudio.play();
                  const p1 = document.createElement("p");
        p1.textContent = 'With a round and fat face, the Pig is the symbol of wealth, felicity, honesty, and practicality in Chinese zodiac culture. Many money pots (Chinese piggybanks) are made pig-shaped as people believe Pig invocation will bring good luck monetarily.';
        const p2 = document.createElement("p");
        p2.textContent = 'People born in the year of the Pig are usually tolerant, understanding, calm, down-to-earth, and easy to get along with. These make them a delightful companion and a trustworthy friend.';
        zodiacBody.appendChild(p1);
        zodiacBody.appendChild(p2);

      } else {
          zodiacText.textContent = 'Other Zodiac';
      };
};


function checkZodiac() {
  const inputDate = document.getElementById('start').value;
  const inputYear = new Date(inputDate).getFullYear();
    setZodiacData(inputYear); 
};