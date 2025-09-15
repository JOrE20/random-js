# v2.0
* Initial release

# v2.1
* Added `Random.withSeed(min, max, seed)` - generate random number with specified seed without changing global seed.
* Added `Random.benchmark()` - benchmark the speed of generation - proof of incredible speed of the library.

# v2.2
* The `Random.sentence(wordCount, wordLength)` will instead of first using a constant between 4 to 7 if there is no wordLength parameter and using same value for next words will pass undefined to let the fakeWord automatically pick a random length between 4 and 7 to pervent sentences with same word length at all words.
* Sentences are extramely long by default. The new default value for word count in `Random.sentence()` is now instead a random number between 5 to 10.
