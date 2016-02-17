# mmi
Multiple Mini Interview (MMI) practice application

## Dev notes
### Content management
Options:
* DB
* Other data store
* Static JSON object

Decision:
* The data set isn't growing, it is essentially one table, and we don't need to do complicated operations on it other than selecting from it.
* Upper bound of the data is approximately 700 kB.
* Using a 900 kB JSON data file does not appreciably slow down load times. So we can use a static JSON object as the content rather than using a DB.

### Question selection
Options:
* Access data linearly and in same way each time
    * If data set is large, users won't ever get to end
* Use Math.random() to select at random with replacement
    * If data set large, this is good enough
    * Could be annoying to get repeats
* Maintain an 'exclusion' list of indices already selected
    * Takes more book-keeping
    * Will invariably get 'misses' and have to calculate random many times near end
* Shuffle the data randomly then access linearly
    * If there's a lot of data, then you'll use a lot of computation up front
* Shuffle an index array the size of the data, and access linearly
    * Small memory footprint
    * Doesn't take much computation
    * Random each time

Decision:
* Use a shuffled index array
* Make sure to use a fast and proven shuffle algorithm like Knuth Shuffle
    * https://bost.ocks.org/mike/shuffle/
