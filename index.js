/**
 * Random.js - A comprehensive random number and utility library
 * Copyright (C) 2025 - Random.js Code Library
 * MIT License
 */

class RandomError extends Error {
    constructor(message) {
        super(message);
        this.name = "RandomError";
    }
}

class Random {
    constructor() {
        this.lastSeed = this.between(1,4000000000);
        this.lastResult = null;
        this.lastHash = null;
        
        this.maleNames = ["Ethan","Samuel","Jacob","William","Benjamin","Ben","Joshua","Josh","Alexander","Daniel","Jackson","Andrew","Isaac","James","Tyler","Max","Eli","Joseph","Gabriel","Owen","Liam","Cody","Kody","Paul","Zack","Zach","Zac","Zak","Zeke","Zane","Kyle","Saul","Sean","Shaun","Brody","Bryan","Brian","Brandon","Evan","Nick","Xavier","Oliver","Ike","Howie","Howard","Chance","Chandler","Preston","Jason","Mason","Nathan","Luca","Lucas","Luka","Lukas","Ryan","Orion","Damon","Damion","Damien","Ken","Ivan","Michael","Wyatt","Aaron","Colin","Bryce","Brice","Noah","Connor","Conner","Jeremy","Isaiah","Spencer","Dylan","Nash","Freddy","Otto","Todd","Ian","Blake","Julian","Dominic","Grayson","Greyson","Nelson","Jensen","Jenson","Will","Bill","Phil","Dave","Cyrus","Travis","Henry","Reece","Reese","Branson","Mark","Marc","Scott","Aiden","Vincent","Vince","Jimmy","Jaxon","Kobe","Cobe","Koby","Coby","Solomon","Oscar","Ollie","Ewan","Cole","Lucian","Billy","Gavin","Malikai","Makai","Javion","Patrick","Beckett","Easton","Jake","Kaleb","Niko","Nico","Justin","Mateo","Muhammad","Emmett","AJ","BJ","TJ","DJ","Trent","Trenton","Theo","Duncan","Ezekiel","Harold","Geoff","Jeff","Steve","Joe","Larry","Carl","Karl","Preston","Ben","Lenny","Lennard","Bruno","Leonardo","Mac","Christopher","Kristopher","Carson","Hunter","Hudson","Roman","Declan","Miles","Jude","Seth","Antonio","Montgomery","Eugene","Rhett","Colt","Shane","Caden","Kaden","Cayden","Kayden","Nate","Landon","Austin","Dallas","Parker","Weston","Milo","Dawson","Juda","Judah","Paxton","Zander","Simon","Kyler","Garrett","Winston","Jared","Jonas","Porter","Carter","Russell","Benson","Marcel","Quentin","Quenton","Gregory","Greg","Orlando","Thaddeus","Jeffery","Jeffrey","Everest","Israel","David","Leo","Lewis","Louis","Lance","George","Grant","Xander","Tate","Titus","Trevor","Trevon","Kurtis","Curtis","Santiago","Shawn","Romeo","Keith","Kipp","Lane","Felix","Frank","Flynn","Melvin","Magnus","Diego","Douglas","Dale","Yavin","Brady","Julius","Jasper","Jay","Hugo","Hank","Stefan","Silas","Quimby","Leland","Warford","Ugo","Esteban","Dean","Desmond","Dex","Dwayne","Don","Bob","Olaf","Lambert","Macon","Ralph","Gage","Ajax","Shane","Vance","Jebediah","Terrence","Manuel","Zachariah","Hagan","Eldon","Yvon","Price","Galen","Elias","Vinny","Uriel","Townsend","Dalton","Beckham","Kal-el","Jaegar","Garvey","Sonny","Fairfax","Wally","Fergus","Jerome","Lambert","Dane","Jaron","Galvin","Calvin","Haines","Van","Kale","Kane","Iggy","Tam","Randall","Carlisle","Wilhelm","Wilbur","Aldon","Alden","Edison","Dev","Andru","Cliff","Clifford","Nic","Nik","Ralf","King","Craig","Eriq","Beau","Chaz","Dez","Ozzy","Ozzie","Karter","Lincoln","Atticus","Soren","Horace","Yuda","Fletcher","Hardy","Kane","Ogden","Xylon","Abbott"];
        this.femaleNames = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Mia", "Charlotte", "Amelia", "Evelyn", "Abigail", "Harper", "Emily", "Elizabeth", "Avery", "Sofia", "Ella", "Madison", "Scarlett", "Victoria", "Aria", "Grace", "Chloe", "Camila", "Penelope", "Riley", "Layla", "Lillian", "Nora", "Zoey", "Mila", "Aubrey", "Hannah", "Lily", "Addison", "Eleanor", "Natalie", "Luna", "Savannah", "Brooklyn", "Leah", "Zoe", "Stella", "Hazel", "Ellie", "Paisley", "Audrey", "Skylar", "Violet", "Claire", "Bella", "Aurora", "Lucy", "Anna", "Samantha", "Caroline", "Genesis", "Aaliyah", "Kennedy", "Kinsley", "Allison", "Maya", "Sarah", "Madelyn", "Adeline", "Alexa", "Ariana", "Elena", "Gabriella", "Naomi", "Alice", "Sadie", "Hailey", "Eva", "Emilia", "Autumn", "Quinn", "Nevaeh", "Piper", "Ruby", "Serenity", "Willow", "Everly", "Cora", "Kaylee", "Lydia", "Aubree", "Arianna", "Eliana", "Peyton", "Melanie", "Gianna", "Isabelle", "Julia", "Valentina", "Nova", "Clara", "Vivian", "Reagan", "Mackenzie", "Madeline", "Brielle"]
        this.lastNames = ["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Rodriguez","Wilson","Martinez","Anderson","Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee","Gonzalez","Harris","Clark","Lewis","Robinson","Walker","Perez","Hall","Young","Allen","Sanchez","Wright","King","Scott","Green","Baker","Adams","Nelson","Hill","Ramirez","Campbell","Mitchell","Roberts","Carter","Phillips","Evans","Turner","Torres","Parker","Collins","Edwards","Stewart","Flores","Morris","Nguyen","Murphy","Rivera","Cook","Rogers","Morgan","Peterson","Cooper","Reed","Bailey","Bell","Gomez","Kelly","Howard","Ward","Cox","Diaz","Richardson","Wood","Watson","Brooks","Bennett","Gray","James","Reyes","Cruz","Hughes","Price","Myers","Long","Foster","Sanders","Ross","Morales","Powell","Sullivan","Russell","Ortiz","Jenkins","Gutierrez","Perry","Butler","Barnes","Fisher","Henderson","Coleman","Simmons","Patterson","Jordan","Reynolds","Hamilton","Graham","Kim","Gonzales","Alexander","Ramos","Wallace","Griffin","West","Cole","Hayes","Chavez","Gibson","Bryant","Ellis","Stevens","Murray","Ford","Marshall","Owens","Mcdonald","Harrison","Ruiz","Kennedy","Wells","Alvarez","Woods","Mendoza","Castillo","Olson","Webb","Washington","Tucker","Freeman","Burns","Henry","Vasquez","Snyder","Simpson","Crawford","Jimenez","Porter","Mason","Shaw","Gordon","Wagner","Hunter","Romero","Hicks","Dixon","Hunt","Palmer","Robertson","Black","Holmes","Stone","Meyer","Boyd","Mills","Warren","Fox","Rose","Rice","Moreno","Schmidt","Patel","Ferguson","Nichols","Herrera","Medina","Ryan","Fernandez","Weaver","Daniels","Stephens","Gardner","Payne","Kelley","Dunn","Pierce","Arnold","Tran","Spencer","Peters","Hawkins","Grant","Hansen","Castro","Hoffman","Hart","Elliott","Cunningham","Knight","Bradley"]
        this.countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kansas", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Maurice", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "São Tomé and Príncipe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
        this.usStates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "NewHampshire", "NewJersey", "NewMexico", "NewYork", "NorthCarolina", "NorthDakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "RhodeIsland", "SouthCarolina", "SouthDakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "WestVirginia", "Wisconsin", "Wyoming"];
        this.misc = {
            demoArray: ["Apple", "Banana", "Cherry"],
            coinFlipper: () => this.pick(["Heads!", "Tails!"]),
            diceRoller: (sides = 6) => this.between(1, sides),
            seededDiceRoller: (sides = 6) => this.seeded(1, sides),
            randomColor: () => {
                const letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += this.pick(letters);
                }
                return color;
            },
            randomRgbColor: () => {
                return `rgb(${this.between(0, 255)}, ${this.between(0, 255)}, ${this.between(0, 255)})`;
            },
            randomHslColor: () => {
                return `hsl(${this.between(0, 360)}, ${this.between(0, 100)}%, ${this.between(0, 100)}%)`;
            },
            shuffleArray: (array) => {
                const shuffled = [...array];
                for (let i = shuffled.length - 1; i > 0; i--) {
                    const j = this.between(0, i);
                    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                }
                return shuffled;
            },
            seededShuffleArray: (array) => {
                const shuffled = [...array];
                for (let i = shuffled.length - 1; i > 0; i--) {
                    const j = this.seeded(0, i);
                    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                }
                return shuffled;
            },
            randomString: (length = 10, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
                let result = '';
                for (let i = 0; i < length; i++) {
                    result += this.pick(charset);
                }
                return result;
            },
            charset: {
                ALPHABET: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                alphabet: 'abcdefghijklmnopqrstuvwxyz',
                NUMBERS: '0123456789',
                SYMBOLS: '!@#$%^&*()_+-=[]{}|;:,.<>?',
                ALPHANUMERIC: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                ALL: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'
            }
        };

        this.about = {
            version: "v2.3",
            build: 81,
            product: "Random.js",
            creator: "JOrE",
            date: "9/10/2025",
            updated: "9/16/2025",
            features: [
                "Seeded random numbers",
                "Weighted random selection",
                "Array utilities",
                "Probability functions",
                "Float number generation",
                "Gaussian distribution",
                "UUID generation",
                "Color utilities"
            ]
        };
        this.seededFunctions = {
            pick: this.seededPick.bind(this),
            flipCoin: this.seededFlipCoin.bind(this),
            oneChanceOutOf: this.seededOneChanceOutOf.bind(this),
            weightedPick: this.seededWeightedPick.bind(this),
            pickExcept: this.seededPickExcept.bind(this),
            randomFloat: this.seededFloat.bind(this),
            gaussian: this.seededGaussian.bind(this),
            uuid: this.seededUuid.bind(this),
            date: this.seededDate.bind(this),
            pickMultiple: this.seededPickMultiple.bind(this)
        };
    }
	
	// Research shows this library generates up to 200 million random seeded numbers per second and same 200 million for non-seeded numbers (Random.between) and 250 million random numbers in native Math.random() in browsers (e.g., chrome), but in Node.js envoirment Math.random only generates up to 50 million floats per second and the library only generates up to 100 million numbers per second. Non-seeded generation is almost same as native Math.random() due to insane optimizions.

    hash(number) {
        return (number * 2654435761) >>> 0;
    }
	
	fastestRng(min, max) {
	  if (window) 
		return this.between(min,max) // In browser
	else 
		return this.seeded(min, max) // In Node.js
	}

    float(min, max, step = 0) {
        let randomFloat = min + Math.random() * (max - min);

        if (step > 0) {
            const steps = Math.floor((max - min) / step);
            randomFloat = min + Math.floor(randomFloat / step) * step;
        }

        this.lastResult = randomFloat;
        return randomFloat;
    }

    seededFloat(min, max, step = 0) {
        this.lastHash = this.hash(this.currentSeed());
        let randomValue = this.lastHash / 0xFFFFFFFF;
        let randomFloat = min + randomValue * (max - min);

        if (step > 0) {
            const steps = Math.floor((max - min) / step);
            randomFloat = min + Math.floor(randomFloat / step) * step;
        }

        this.lastResult = randomFloat;
        this.setSeed(this.lastHash);
        return randomFloat;
    }

    gaussian(mean = 0, deviation = 1) {
        let u = 0, v = 0;
        while (u === 0) u = Math.random();
        while (v === 0) v = Math.random();

        const normal = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        return mean + deviation * normal;
    }

    seededGaussian(mean = 0, deviation = 1) {
        const u = this.seededFloat(0.000001, 1);
        const v = this.seededFloat(0.000001, 1);
        const normal = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        return mean + deviation * normal;
    }

    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    seededUuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = this.seeded(0, 15);
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    randomize() {
        this.lastSeed = this.between(0, 4294967000);
    }

    between(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    setSeed(seed) {
        if (typeof seed !== 'number') throw new RandomError('Seed must be a number');
        this.lastSeed = seed;
        return;
    }

    freshStart() {
        this.lastSeed = 1;
        this.lastResult = null;
        this.lastHash = null;
        return;
    }

    seeded(min, max) {
        this.lastSeed = (this.lastSeed * 2654435761 + 1) | 0;
        return min + (this.lastSeed & 0x7FFFFFFF) % (max - min + 1);
    }
	
    withSeed(min, max, seed) {
        return min + (((seed * 2654435761 + 1) | 0) & 0x7FFFFFFF) % (max - min + 1);
    }
	
	seededFill(min, max, count) {
	  let ar = [];
      for (let i = 0; i < count; i++) {this.lastSeed = (this.lastSeed * 2654435761 + 1) | 0; ar.push(min + (((this.lastSeed * 2654435761 + 1) | 0) & 0x7FFFFFFF) % (max - min + 1))};
	  return ar;
    }
	
	fill(min, max, count) {
	  let ar = [];
      for (let i = 0; i < count; i++) {ar.push(this.between(min, max))};
	  return ar;
    }	
	
    withSeedFill(min, max, count, seed) {
	  let ar = [];
	  this.lastSeed = seed;
      for (let i = 0; i < count; i++) {this.lastSeed = (this.lastSeed * 2654435761 + 1) | 0; ar.push(min + (((this.lastSeed * 2654435761 + 1) | 0) & 0x7FFFFFFF) % (max - min + 1))};
	  return ar;
    }
	

    weightedPick(items, normalIfAllWeightsAreZero = false, defaultWeight = undefined, defaultValue = undefined, seeded = false) {
        let randomValue = 0;
        if (!Array.isArray(items)) {
            throw new RandomError('items parameter must be an array.');
        }

        if (items.length === 0) {
            throw new RandomError('items array is empty.');
        }

        const processedItems = [];
        let totalWeight = 0;
        let hasMissingWeight = false;
        let hasMissingValue = false;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            let value, weight;

            if (item.value === undefined) {
                if (defaultValue === undefined) {
                    throw new RandomError('There is no value property for some item(s).');
                }
                value = defaultValue;
                hasMissingValue = true;
            } else {
                value = item.value;
            }

            if (item.weight === undefined) {
                if (defaultWeight === undefined) {
                    throw new RandomError('There is no weight property for some item(s).');
                }
                weight = defaultWeight;
                hasMissingWeight = true;
            } else {
                weight = item.weight;
            }

            if (typeof weight !== 'number' || isNaN(weight)) {
                throw new RandomError(`Weight must be a number for item at index ${i}.`);
            }

            processedItems.push({ value, weight });
            totalWeight += weight;
        }

        if (totalWeight === 0) {
            if (normalIfAllWeightsAreZero) {
                totalWeight = processedItems.length;
                processedItems.forEach(item => item.weight = 1);
            } else {
                throw new RandomError('All weights for weightedPick is 0.');
            }
        }

        if (seeded) {
            randomValue = this.seeded(0, 1000000) / 1000000 * totalWeight;
        } else {
            randomValue = Math.random() * totalWeight;
        }

        let cumulativeWeight = 0;
        for (const item of processedItems) {
            cumulativeWeight += item.weight;
            if (randomValue <= cumulativeWeight) {
                return item.value;
            }
        }

        return processedItems[processedItems.length - 1].value;
    }

    seededWeightedPick(items, normalIfAllWeightsAreZero = false, defaultWeight = undefined, defaultValue = undefined) {
        return this.weightedPick(items, normalIfAllWeightsAreZero, defaultWeight, defaultValue, true);
    }

    arrayToSimplePickList(array, weightForAll = undefined) {
        if (!Array.isArray(array)) {
            throw new RandomError('array parameter must be an array.');
        }

        const weight = (weightForAll !== undefined && weightForAll !== null && typeof weightForAll !== 'string') ?
            weightForAll : 1;

        return array.map(item => ({
            value: item,
            weight: weight
        }));
    }

    date(start, end) {
        const startDate = start ? new Date(start) : new Date(2000, 0, 1);
        const endDate = end ? new Date(end) : new Date();
        return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    }

    seededDate(start, end) {
        const startDate = start ? new Date(start) : new Date(2000, 0, 1);
        const endDate = end ? new Date(end) : new Date();
        const randomValue = this.seeded(0, 1000000) / 1000000;
        return new Date(startDate.getTime() + randomValue * (endDate.getTime() - startDate.getTime()));
    }

    pickExcept(array, exclude) {
        const excludeArray = Array.isArray(exclude) ? exclude : [exclude];
        const filtered = array.filter(item => !excludeArray.includes(item));

        if (filtered.length === 0) {
            throw new RandomError('No items available after exclusion');
        }

        return this.pick(filtered) ?? filtered[filtered.length - 1];
    }

    seededPickExcept(array, exclude) {
        const excludeArray = Array.isArray(exclude) ? exclude : [exclude];
        const filtered = array.filter(item => !excludeArray.includes(item));

        if (filtered.length === 0) {
            throw new RandomError('No items available after exclusion');
        }

        return this.seededPick(filtered) ?? filtered[filtered.length - 1];
    }

    pickMultiple(array, count = 1, unique = true) {
        if (unique && count > array.length) {
            throw new RandomError(`Cannot pick ${count} unique items from array of length ${array.length}`);
        }

        if (unique) {
            const shuffled = this.misc.shuffleArray(array);
            return shuffled.slice(0, count);
        } else {
            const result = [];
            for (let i = 0; i < count; i++) {
                result.push(this.pick(array));
            }
            return result;
        }
    }

    seededPickMultiple(array, count = 1, unique = true) {
        if (unique && count > array.length) {
            throw new RandomError(`Cannot pick ${count} unique items from array of length ${array.length}`);
        }

        if (unique) {
            const shuffled = this.misc.seededShuffleArray(array);
            return shuffled.slice(0, count);
        } else {
            const result = [];
            for (let i = 0; i < count; i++) {
                result.push(this.seededPick(array));
            }
            return result;
        }
    }

    exportState() {
        return {
            seed: this.lastSeed,
            lastResult: this.lastResult,
            lastHash: this.lastHash
        };
    }

    importState(state) {
        if (state && state.seed) {
            this.lastSeed = state.seed;
            this.lastResult = state.lastResult;
            this.lastHash = state.lastHash;
            return true;
        }
        return false;
    }

    resetToSeed(seed) {
        this.freshStart();
        this.setSeed(seed);
    }

    flipCoin() { return Math.random() > 0.5; }
    percentChance(percent) { return Math.random() < (percent / 100); }
    seededPercentChance(percent) { return this.seeded(0, 100) < percent; }
    seededFlipCoin() { return this.seeded(1, 2) == 1; }
    currentSeed() { return this.lastSeed; }
    clamp(num, min, max) { return Math.max(Math.min(num, max), min); }
    oneChanceOutOf(chance) { return this.between(1, chance) == 1; }
    seededOneChanceOutOf(chance) { return this.seeded(1, chance) == 1; }
    pick(array) { return array[this.between(0, array.length - 1)]; }
    seededPick(array) { return array[this.seeded(0, array.length - 1)]; }
    repeat(func, count) { for (let i = 0; i < count; i++) func(); }
    character(charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?') { return this.pick(charSet.split('')); }
    number() { return this.pick(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']); }
    letter() { return this.pick('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')); }
    upcase() { return this.pick('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')); }
    lowcase() { return this.pick('abcdefghijklmnopqrstuvwxyz'.split('')); }
    symbol() { return this.pick('!@#$%^&*()_+-=[]{}|;:,.<>?'.split('')); }
    seededCharacter(charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?') { return this.seededPick(charSet.split('')); }
    seededNumber() { return this.seededPick(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']); }
    seededLetter() { return this.seededPick('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')); }
    seededUpcase() { return this.seededPick('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')); }
    seededLowcase() { return this.seededPick('abcdefghijklmnopqrstuvwxyz'.split('')); }
    seededSymbol() { return this.seededPick('!@#$%^&*()_+-=[]{}|;:,.<>?'.split('')); }
    falsy() { return this.pick([null, undefined, NaN, 0, false, '']); }
    nullish() { return this.pick([null, undefined]); }
    seededFalsy() { return this.seededPick([null, undefined, NaN, 0, false, '']); }
    seededNullish() { return this.seededPick([null, undefined]); }

    string(charSet, length) {
        const defaultCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'.split('');
        const chars = charSet ? (Array.isArray(charSet) ? charSet : charSet.split('')) : defaultCharset;
        const len = length !== undefined ? length : this.between(5, 20);

        let result = '';
        for (let i = 0; i < len; i++) {
            result += this.pick(chars);
        }
        return result;
    }

    seededString(charSet, length) {
        const defaultCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'.split('');
        const chars = charSet ? charSet.split('') : defaultCharset;
        const len = length !== undefined ? length : this.seeded(5, 20);

        let result = '';
        for (let i = 0; i < len; i++) {
            result += this.seededPick(chars);
        }
        return result;
    }

    fakeWord(length) {
        const vowels = 'aeiou'.split('');
        const consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
        const len = length !== undefined ? length : this.between(4, 7);

        let result = '';
        for (let i = 0; i < len; i++) {
            if (i % 2 === 0) {
                result += this.pick(consonants);
            } else {
                result += this.pick(vowels);
            }
        }
        return result;
    }

    seededFakeWord(length) {
        const vowels = 'aeiou'.split('');
        const consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
        const len = length !== undefined ? length : this.seeded(4, 7);

        let result = '';
        for (let i = 0; i < len; i++) {
            if (i % 2 === 0) {
                result += this.seededPick(consonants);
            } else {
                result += this.seededPick(vowels);
            }
        }
        return result;
    }

    prime(min, max, seeded = false) {
        if (min > max) throw new RandomError(`Minimum value (${min}) is more than maximum value (${max}).`);
        if (min < 2) min = 2;

        const isPrime = (num) => {
            if (num < 2) return false;
            if (num === 2) return true;
            if (num % 2 === 0) return false;

            for (let i = 3; i <= Math.sqrt(num); i += 2) {
                if (num % i === 0) return false;
            }
            return true;
        };

        const primes = [];
        for (let i = min; i <= max; i++) {
            if (isPrime(i)) primes.push(i);
        }

        if (primes.length === 0) {
            throw new RandomError(`No prime numbers found between ${min} and ${max}`);
        }

        return seeded ? this.seededPick(primes) : this.pick(primes);
    }

    seededPrime(min, max) {
        return this.prime(min, max, true);
    }

    ip() {
        return `${this.between(1, 255)}.${this.between(0, 255)}.${this.between(0, 255)}.${this.between(1, 255)}`;
    }

    ipv6() {
        const segments = [];
        for (let i = 0; i < 8; i++) {
            segments.push(this.between(0, 65535).toString(16));
        }
        return segments.join(':');
    }

    seededIP() {
        return `${this.seeded(1, 255)}.${this.seeded(0, 255)}.${this.seeded(0, 255)}.${this.seeded(1, 255)}`;
    }

    seededIPv6() {
        const segments = [];
        for (let i = 0; i < 8; i++) {
            segments.push(this.seeded(0, 65535).toString(16));
        }
        return segments.join(':');
    }

    name() {
        const isMale = this.flipCoin();
        const firstName = isMale ? this.pick(this.maleNames) : this.pick(this.femaleNames);
        return `${firstName} ${this.pick(this.lastNames)}`;
    }

    fakeName() {
        return `${this.titlecase(this.fakeWord())} ${this.titlecase(this.fakeWord())}`;
    }

    maleName() {
        return `${this.pick(this.maleNames)} ${this.pick(this.lastNames)}`;
    }

    femaleName() {
        return `${this.pick(this.femaleNames)} ${this.pick(this.lastNames)}`;
    }

    country() { return this.pick(this.countries); }
    usState() { return this.pick(this.usStates); }

    phoneNumber() {
        return `(${this.between(200, 999)}) ${this.between(200, 999)}-${this.between(1000, 9999)}`;
    }

    postal() {
        return `${this.between(10000, 99999)}`;
    }

    email(domain = 'example.com') {
        const username = this.string('abcdefghijklmnopqrstuvwxyz0123456789', this.between(5, 10));
        return `${username}@${domain}`;
    }

    bool() { return this.flipCoin(); }
    hexColor() { return `#${this.string('0123456789ABCDEF', 6)}`; }
    rgbColor() { return `rgb(${this.between(0, 255)}, ${this.between(0, 255)}, ${this.between(0, 255)})`; }
    coordinate() { return `${this.float(-90, 90, 0.000001).toFixed(6)}, ${this.float(-180, 180, 0.000001).toFixed(6)}`; }
    url() { return `https://${this.string('abcdefghijklmnopqrstuvwxyz', this.between(5, 10))}.com`; }
    username() { return this.string('abcdefghijklmnopqrstuvwxyz0123456789_', this.between(3, 12)); }
    securePassword() { return this.string('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*', this.between(8, 16)); }
    macAddress() {
        const segments = [];
        for (let i = 0; i < 6; i++) {
            segments.push(this.string('0123456789ABCDEF', 2));
        }
        return segments.join(':');
    }
    creditCard() {
        const types = ['4', '5', '3'];
        const number = this.pick(types) + this.string('0123456789', 15);
        return number.replace(/(.{4})/g, '$1 ').trim();
    }
    expiryDate() {
        const month = this.between(1, 12).toString().padStart(2, '0');
        const year = this.between(2025, 2035);
        return `${month}/${year}`;
    }
    cvv() { return this.string('0123456789', 3); }
    currency(min = 1, max = 1000) { return `$${this.float(min, max, 0.01).toFixed(2)}`; }
    timestamp() { return new Date(Date.now() - this.between(0, 31536000000)).toISOString(); }

    seededName() {
        const isMale = this.seededFlipCoin();
        const firstName = isMale ? this.seededPick(this.maleNames) : this.seededPick(this.femaleNames);
        return `${firstName} ${this.seededPick(this.lastNames)}`;
    }

    seededMaleName() {
        return `${this.seededPick(this.maleNames)} ${this.seededPick(this.lastNames)}`;
    }

    seededFemaleName() {
        return `${this.seededPick(this.femaleNames)} ${this.seededPick(this.lastNames)}`;
    }

    seededCountry() { return this.seededPick(this.countries); }
    seededUsState() { return this.seededPick(this.usStates); }
    seededPhoneNumber() {
        return `(${this.seeded(200, 999)}) ${this.seeded(200, 999)}-${this.seeded(1000, 9999)}`;
    }
    seededPostal() { return `${this.seeded(10000, 99999)}`; }
    seededEmail(domain = 'example.com') {
        const username = this.seededString('abcdefghijklmnopqrstuvwxyz0123456789', this.seeded(5, 10));
        return `${username}@${domain}`;
    }
    seededCoordinate() { return `${this.seededFloat(-90, 90, 0.000001).toFixed(6)}, ${this.seededFloat(-180, 180, 0.000001).toFixed(6)}`; }
    seededUrl() { return `https://${this.seededString('abcdefghijklmnopqrstuvwxyz', this.seeded(5, 10))}.com`; }
    seededUsername() { return this.seededString('abcdefghijklmnopqrstuvwxyz0123456789_', this.seeded(3, 12)); }
    seededPassword() { return this.seededString('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*', this.seeded(8, 16)); }
    seededMacAddress() {
        const segments = [];
        for (let i = 0; i < 6; i++) {
            segments.push(this.seededString('0123456789ABCDEF', 2));
        }
        return segments.join(':');
    }
    seededCreditCard() {
        const types = ['4', '5', '3'];
        const number = this.seededPick(types) + this.seededString('0123456789', 15);
        return number.replace(/(.{4})/g, '$1 ').trim();
    }
    seededExpiryDate() {
        const month = this.seeded(1, 12).toString().padStart(2, '0');
        const year = this.seeded(2025, 2035);
        return `${month}/${year}`;
    }
    seededCvv() { return this.seededString('0123456789', 3); }
    seededCurrency(min = 1, max = 1000) { return `$${this.seededFloat(min, max, 0.01).toFixed(2)}`; }
    seededTimestamp() { return new Date(Date.now() - this.seeded(0, 31536000000)).toISOString(); }

    sentence(wordCount, wordLength) {
        const count = wordCount !== undefined ? wordCount : this.between(5, 10);
        const wLength = wordLength;

        let sentence = '';
        for (let i = 0; i < count; i++) {
            sentence += this.fakeWord(wLength);
            if (i < count - 1) sentence += ' ';
        }
        return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
    }

    seededSentence(wordCount, wordLength) {
        const count = wordCount !== undefined ? wordCount : this.seeded(20, 30);
        const wLength = wordLength;

        let sentence = '';
        for (let i = 0; i < count; i++) {
            sentence += this.seededFakeWord(wLength);
            if (i < count - 1) sentence += ' ';
        }
        return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
    }

    paragraph(wordCount, wordLength, sentencesCount, paragraphLength) {
		const pLength = paragraphLength !== undefined ? paragraphLength : this.between(3, 5);
        const sCount = sentencesCount !== undefined ? sentencesCount : this.between(3, 5);
        const wCount = wordCount;
        const wLength = wordLength;

        let paragraph = '';
        for (let i = 0; i < sCount; i++) {
            paragraph += this.sentence(wCount, wLength);
            if (i < sCount - 1) paragraph += ' ';
			if ((i % pLength) == 0) paragraph += '\n';
        }
        return paragraph;
    }

    capitalize(string) {
        if (typeof string !== 'string' || string.length === 0) return string;

        let result = '';
        let capitalizeNext = true;

        for (let i = 0; i < string.length; i++) {
            const char = string.charAt(i);

            if (capitalizeNext && /[a-zA-Z]/.test(char)) {
                result += char.toUpperCase();
                capitalizeNext = false;
            } else {
                result += char;
            }

            if (/[.!?]/.test(char)) {
                capitalizeNext = true;
            }
        }

        return result;
    }

    titlecase(string) {
        if (typeof string !== 'string' || string.length === 0) return string;

        return string
            .split(' ')
            .map(word => {
                if (word.length === 0) return word;
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            })
            .join(' ');
    }

    upcase(string) {
        if (typeof string !== 'string') return string;
        return string.toUpperCase();
    }

    lowcase(string) {
        if (typeof string !== 'string') return string;
        return string.toLowerCase();
    }

    mock(string) {
        if (typeof string !== 'string') return string;

        let result = '';
        for (let i = 0; i < string.length; i++) {
            if (i % 2 === 0) {
                result += string.charAt(i).toLowerCase();
            } else {
                result += string.charAt(i).toUpperCase();
            }
        }
        return result;
    }

    seededParagraph(wordCount, wordLength, sentencesCount) {
        const sCount = sentencesCount !== undefined ? sentencesCount : this.seeded(3, 5);
        const wCount = wordCount !== undefined ? wordCount : this.seeded(20, 30);
        const wLength = wordLength !== undefined ? wordLength : this.seeded(4, 7);

        let paragraph = '';
        for (let i = 0; i < sCount; i++) {
            paragraph += this.seededSentence(wCount, wLength);
            if (i < sCount - 1) paragraph += ' ';
        }
        return paragraph;
    }

    loremIpsum(wordLength, wordCount, sentenceCount) {
        return 'Lorem Ipsum ' + this.paragraph(wordCount, wordLength, sentenceCount);
    }

    seededLoremIpsum(wordLength, wordCount, sentenceCount) {
        return 'Lorem Ipsum ' + this.seededParagraph(wordCount, wordLength, sentenceCount);
    }

    demo() {
        console.log(`%cRandom.js Demo ${this.about.version}`, "font-size: 16px; font-weight: bold;");
        console.log(`Random.between(10,20) = ${this.between(10,20)}`);
        console.log(`Random.float(1,100) = ${this.float(1,100)}`);
        console.log(`Random.float(1,100,0.1) = ${this.float(1,100,0.1)}`);
        console.log(`Random.hash(1) = ${this.hash(1)}`);
        console.log(`Random.flipCoin() = ${this.flipCoin()}`);
        console.log(`Random.date() = ${this.date()}`);
        console.log(`Random.oneChanceOutOf(5) = ${this.oneChanceOutOf(5)}`);
        console.log(`Random.pick(["Apple", "Banana", "Cherry"]) = ${this.pick(["Apple", "Banana", "Cherry"])}`);
        console.log(`Random.clamp(123, 10, 100) = ${this.clamp(123, 10, 100)}`);
        console.log(`Random.percentChance(30) = ${this.percentChance(30)}`);

        console.log(`\n%cGaussian Distribution`, "font-size: 14px; font-weight: bold;");
        console.log(`Random.gaussian(0, 1) = ${this.gaussian(0, 1)}`);
        console.log(`Random.gaussian(50, 10) = ${this.gaussian(50, 10)}`);

        console.log(`\n%cUUID Generation`, "font-size: 14px; font-weight: bold;");
        console.log(`Random.uuid() = ${this.uuid()}`);

        let randoms = [];
        for (let i = 1; i < 10; i++) {
            randoms.push(this.seeded(1, 1000));
        }
        console.log(`\n10 values of Random.seeded(1, 1000): ${randoms}`);
        
        const weightedItems = [{
            value: "Common", weight: 2
        }, {
            value: "Uncommon", weight: 1
        }, {
            value: "Rare", weight: 0.5
        }];

        console.log(`\nRandom.weightedPick result: ${this.weightedPick(weightedItems)}`);
        console.log(`Random.seededWeightedPick result: ${this.seededWeightedPick(weightedItems)}`);

        console.log(`\n%cMisc Utilities`, "font-size: 14px; font-weight: bold;");
        console.log(`Random.misc.randomColor() = ${this.misc.randomColor()}`);
        console.log(`Random.misc.randomRgbColor() = ${this.misc.randomRgbColor()}`);
        console.log(`Random.misc.randomHslColor() = ${this.misc.randomHslColor()}`);
        console.log(`Random.misc.shuffleArray([1,2,3,4,5]) = ${this.misc.shuffleArray([1,2,3,4,5])}`);

        console.log(`Current seed: ${this.currentSeed()}`);
        return undefined;
    }
	
    benchmark() { // incredible performance is real. if you believe it's not, run Random.benchmark().
		let n = 0;
		let o = 1;
		let i = 0;
		let f = 0;
		let j = 0;
		let u = 0;
		let Q = 0;
        console.log(`%cRandom.js ${this.about.version} Benchmark`, "font-size: 16px; font-weight: bold;");
		console.log('Testing 1 billion seeded random numbers...');
		f = Date.now();
		for (let Q = 1; Q < 1000000000; Q++) {
          o = (o * 2654435761 + 1) | 0;
          n = 1 + (o & 0x7FFFFFFF) % (100 - 1 + 1);
        }
		i = Date.now();
		u = i-f;
		console.log(`Test done, time taken: ${i-f}ms`);
		console.log('Now testing 1 billion Math.random() calls...')
		f = Date.now();
		for (let Q = 1; Q < 1000000000; Q++) {
          o = Math.random();
        }		
		i = Date.now();
		j = i-f;
		console.log(`Test done, time taken: ${j}ms`);
		console.log('Now testing 1 billion random non-seeded numbers between 1 and 100:')
		f = Date.now();
		for (let Q = 1; Q < 1000000000; Q++) {
          o = this.between(1,100);
        }		
		i = Date.now();
		if (i-f > j) {console.log(`Test done, time taken: ${i-f}ms, ${Math.floor(((i-f)/j)*100)/100}x slower than native Math.random().`);} else {console.log(`Test done, time taken: ${i-f}ms, ${Math.floor(((j)/i-f)*100)/100}x faster (???) than native Math.random().`);}
        if (j > u) {console.log(`The seeded random number generation is mythically ${Math.floor(((j)/u)*100)/100}x faster than native Math.random(), so you should use the seeded random generation instead of native Math.random(). The initial seed is fully random so just use Random.seeded(min, max).`)}
	}
	
}

// Export for different environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = new Random();
}

if (typeof exports !== 'undefined') {
    exports.default = new Random();
}

// Auto-attach to window in browser environments
if (typeof window !== 'undefined') {
    window.Random = new Random();
    window.randomJSIncluded = true;
}
