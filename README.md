# Random.js

A comprehensive random number and utility library with seeded randomness, weighted selection, and various random data generators.

## Installation

```bash
npm install @jore20/random-js-lib
```

## Usage

```
// CommonJS
const Random = require('@jore20/random-js-lib');

// ES Modules
import Random from '@jore20/random-js-lib';

// Browser (via CDN)
<script src="https://cdn.jsdelivr.net/npm/@jore20/random-js-lib"></script>
```

## Quick Examples

```javascript
// Create Element
Random = new Random();

// Basic random numbers
console.log(Random.between(1, 100)); // Random integer between 1-100
console.log(Random.float(0, 1));     // Random float between 0-1

// Seeded randomness (reproducible results)
Random.setSeed(42);
console.log(Random.seeded(1, 100)); // Always the same sequence

// Weighted selection
const items = [
  { value: "Common", weight: 5 },
  { value: "Uncommon", weight: 2 },
  { value: "Rare", weight: 1 }
];
console.log(Random.weightedPick(items));

// Fake data generation
console.log(Random.name());        // Random full name
console.log(Random.email());       // Random email
console.log(Random.phoneNumber()); // Random phone number
console.log(Random.uuid());        // Random UUID
```

## Features

* ✅ Seeded random numbers (reproducible sequences)

* ✅ Weighted random selection

* ✅ Array utilities (shuffle, pick multiple, etc.)

* ✅ Probability functions (percent chance, coin flip)

* ✅ Float number generation with step precision

* ✅ Gaussian/Normal distribution

* ✅ UUID generation (v4 format)

* ✅ Color utilities (hex, RGB, HSL)

* ✅ Perlin noise function

* ✅ Fake data generation:

* ✅ Names (male, female, full names)

* ✅ Contact info (emails, phone numbers)

* ✅ Addresses (countries, US states)

* ✅ Financial data (credit cards, currencies)

* ✅ Network data (IP addresses, MAC addresses)

* ✅ String manipulation (capitalize, titlecase, mock case)

* ✅ Text generation (words, sentences, paragraphs)

* ✅ Statistical analysis tools

## Seeded Functions

Seeded Functions
All main functions have seeded equivalents:

* Random.seeded() → Seeded integer

* Random.seededFloat() → Seeded float

* Random.seededPick() → Seeded array selection

* Random.seededWeightedPick() → Seeded weighted selection

And many more...

## License

MIT License - see LICENSE file for details.
