# Random.js Lib 🎲 | The Ultimate Seeded Randomness Toolkit

[![npm version](https://img.shields.io/npm/v/@jore20/random-js-lib.svg?style=for-the-badge)](https://www.npmjs.com/package/@jore20/random-js-lib)
[![Weekly Downloads](https://img.shields.io/npm/dw/@jore20/random-js-lib?color=blue&style=for-the-badge)](https://www.npmjs.com/package/@jore20/random-js-lib)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

### ⚡ Tired of juggling multiple random utility libraries? Get deterministic randomness for everything—from numbers to user profiles—in one powerful, seeded package.

### 🔥 Why Choose This Library?
Building realistic test data and simulations is frustrating. You need numbers, names, dates, and IDs, but you also need them to be reproducible to debug and test reliably. Most libraries force you to choose: either randomness or control, but never both.

**Random.js Lib fixes this.** It combines the flexibility of faker-style data generation with the absolute determinism of seeded random number generation.

### 📊  Feature Comparison

| Feature | Random.js | Chance | Faker | Seedrandom |
| - | - | - | - | - |
| Seeded Everything	| ✅ | ❌ | ❌ | ❌ |
Fake Data Generation | ✅ | ✅ | ✅ | ❌ |
Weighted Selection | ✅ | ✅ | ❌ | ❌ |
Statistical Functions | ✅ | ❌ | ❌ | ❌ |
Zero Dependencies | ✅ | ✅ | ❌ | ✅ |
Unified API	| ✅ | ❌ | ❌ | ✅ |

### 🚀 Key Features
* 🌱  Fully Seeded & Deterministic: Every function has a seeded* equivalent

* 📇  Realistic Fake Data: Names, emails, addresses, finance data, and more

* ⚖️  Intelligent Weighted Selection: Custom weights for realistic probabilities

* 📊  Advanced Distributions: Gaussian distribution, array shuffling, statistical tools

* 🎲  Core Randomness: Floats, integers, booleans, UUIDs, array picks

* 🌐  Universal: Works in Node.js and browsers

* 📦  Zero Dependencies: Lightweight and fast

### 💻 Installation
**Node.js:**
```bash
npm install @jore20/random-js-lib
```

**Browser (via CDN):**

```html
<script src="https://cdn.jsdelivr.net/npm/@jore20/random-js-lib"></script>
```

### ⚡ Quick Start
##### 1. Basic Randomness
```javascript
import Random from '@jore20/random-js-lib';

Random.between(1, 100); // Random integer
Random.flipCoin(); // true/false
Random.pick(['Apple', 'Banana', 'Cherry']); // Random item
```
##### 2. Seeded Reproducibility
```javascript
Random.setSeed(123);

Random.seeded(1, 100); // Always same number
Random.seededName(); // Always same name
Random.seededUuid(); // Always same UUID
```

##### 3. Consistent Test Data
```javascript
const generateTestUser = (seed) => {
  Random.setSeed(seed);
  return {
    id: Random.seededUuid(),
    name: Random.seededName(),
    email: Random.seededEmail('test.com'),
    balance: Random.seededCurrency(10, 1000)
  };
};
// Perfect for snapshot testing!
```
### 🛠️ Core API
##### Seeded Number Generation
```javascript
Random.seeded(10, 20); // Seeded integer
Random.seededFloat(0, 1, 0.1); // Seeded float
Random.seededGaussian(50, 10); // Normal distribution
```
##### Smart Selection
```javascript
// Weighted selection
const loot = [
  { value: 'Common Sword', weight: 50 },
  { value: 'Rare Shield', weight: 25 },
  { value: 'Legendary Amulet', weight: 1 }
];
Random.weightedPick(loot);

// Multiple unique items
Random.pickMultiple(['a', 'b', 'c', 'd'], 2, true);
Fake Data Generation
javascript
// Personal Data
Random.name(); // Full name
Random.email('domain.com'); // Email
Random.phoneNumber(); // Phone number

// Financial Data
Random.creditCard(); // Credit card
Random.currency(5, 50); // Currency amount
Random.ip(); // IP address
```

##### Utilities
```javascript
Random.hexColor(); // Hex color
Random.string(12); // Random string
Random.sentence(5); // Random sentence

// Array operations
Random.misc.shuffleArray([1, 2, 3, 4, 5]);
```

### 🧪 Use Cases
* Testing: Create deterministic test data for reproducible tests
* Gaming: Seeded worlds, loot drops, and procedural content
* Simulations: Repeatable simulations with controlled randomness
* Data Science: Consistent data generation for experiments
* Development: Anywhere you need reliable random data

### 📖 Documentation
##### Seeded Functions
All main functions have seeded equivalents:
* Random.seeded() → Seeded integer
* Random.seededFloat() → Seeded float
* Random.seededPick() → Seeded array selection
* Random.seededWeightedPick() → Seeded weighted selection

### Configuration
```javascript
// Set a global seed
Random.setSeed(42);

// Export/import state for complex scenarios
const state = Random.exportState();
Random.importState(state);

// Reset to specific seed
Random.resetToSeed(42);
```
### 🤝 Contributing
We welcome contributions! Please feel free to submit issues, feature requests, and pull requests.

* Fork the repository
* Create your feature branch (git checkout -b feature/amazing-feature)
* Commit your changes (git commit -m 'Add amazing feature')
* Push to the branch (git push origin feature/amazing-feature)
* Open a Pull Request

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### 🐛 Issues
Found a bug or have a feature request? Please open an issue on our GitHub repository.

### ❓ FAQ
**Q: How is this different from Chance.js or Faker?**
A: This library provides fully seeded/deterministic versions of all data generation functions, making it perfect for testing and reproducible scenarios.

**Q: Is this library cryptographically secure?**
A: No. This library is designed for simulations, testing, and data generation—not security purposes. Use Node's built-in crypto module for security-sensitive operations.

**Q: Can I use this in the browser?**
A: Yes! The library is universal and works in both Node.js and browser environments.

### 🌟 Support
If you find this library useful, please consider:

* Giving it a star on GitHub ⭐
* Sharing it with your colleagues and friends
* Contributing code or documentation
* Reporting bugs and suggesting features

**Random.js Lib - The only randomness utility you'll ever need.**
