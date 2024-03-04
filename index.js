function changeState(state) {
  const home = document.getElementById('body-home');
  const zodiac = document.getElementById('body-zodiac');

  if (state === 'home') {
      home.style.display = 'flex';
      zodiac.style.display = 'none';
  } else if (state === 'zodiac') {
      home.style.display = 'none';
      zodiac.style.display = 'block';
      checkZodiac();
  }
}

document.getElementById('submit-button').addEventListener('click', function() {
  changeState('zodiac');
});
document.getElementById('back-button').addEventListener('click', function() {
  changeState('home');
});

const yearButtons = document.querySelectorAll('.year');

yearButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        changeState('zodiac');
    });
});


function checkZodiac() {
  const inputDate = document.getElementById('start').value;
  const zodiacText = document.getElementById('zodiac-text');
  const ratYears = [1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032];
  const oxYears = [1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033];
  const tigerYears = [1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034];
  const rabbitYears = [1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035];
  const dragonYears = [1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036];
  const snakeYears = [1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037];
  const horseYears = [1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038];
  const goatYears = [1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039];
  const monkeyYears = [1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028, 2040];
  const roosterYears = [1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029, 2041];
  const dogYears = [1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042];
  const pigYears = [1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043];
  const inputYear = new Date(inputDate).getFullYear();
  if (ratYears.includes(inputYear)) {
    zodiacText.textContent = '鼠 (RAT)';
  } else if (oxYears.includes(inputYear)) {
      zodiacText.textContent = '牛 (OX)';
  } else if (tigerYears.includes(inputYear)) {
      zodiacText.textContent = '虎 (TIGER)';
  } else if (rabbitYears.includes(inputYear)) {
      zodiacText.textContent = '兔 (RABBIT)';
  } else if (dragonYears.includes(inputYear)) {
      zodiacText.textContent = '龙 (DRAGON)';
  } else if (snakeYears.includes(inputYear)) {
      zodiacText.textContent = '蛇 (SNAKE)';
  } else if (horseYears.includes(inputYear)) {
      zodiacText.textContent = '马 (HORSE)';
  } else if (goatYears.includes(inputYear)) {
      zodiacText.textContent = '羊 (GOAT)';
  } else if (monkeyYears.includes(inputYear)) {
      zodiacText.textContent = '猴 (MONKEY)';
  } else if (roosterYears.includes(inputYear)) {
      zodiacText.textContent = '鸡 (ROOSTER)';
  } else if (dogYears.includes(inputYear)) {
      zodiacText.textContent = '狗 (DOG)';
  } else if (pigYears.includes(inputYear)) {
      zodiacText.textContent = '猪 (PIG)';
  } else {
      zodiacText.textContent = 'Other Zodiac';
  }
  document.getElementById('year-rat'). addEventListener('click', function() {
    zodiacText.textContent = '鼠 (RAT)';
  });
  document.getElementById('year-ox').addEventListener('click', function() {
    zodiacText.textContent = '牛 (OX)';
});

document.getElementById('year-tiger').addEventListener('click', function() {
    zodiacText.textContent = '虎 (TIGER)';
});

document.getElementById('year-rabbit').addEventListener('click', function() {
    zodiacText.textContent = '兔 (RABBIT)';
});

document.getElementById('year-dragon').addEventListener('click', function() {
    zodiacText.textContent = '龙 (DRAGON)';
});

document.getElementById('year-snake').addEventListener('click', function() {
    zodiacText.textContent = '蛇 (SNAKE)';
});

document.getElementById('year-horse').addEventListener('click', function() {
    zodiacText.textContent = '马 (HORSE)';
});

document.getElementById('year-goat').addEventListener('click', function() {
    zodiacText.textContent = '羊 (GOAT)';
});

document.getElementById('year-monkey').addEventListener('click', function() {
    zodiacText.textContent = '猴 (MONKEY)';
});

document.getElementById('year-rooster').addEventListener('click', function() {
    zodiacText.textContent = '鸡 (ROOSTER)';
});

document.getElementById('year-dog').addEventListener('click', function() {
    zodiacText.textContent = '狗 (DOG)';
});

document.getElementById('year-pig').addEventListener('click', function() {
    zodiacText.textContent = '猪 (PIG)';
});
}


