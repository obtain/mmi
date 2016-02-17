/*
 * Knuth (Fisher-Yates) Shuffle Algorithm
 *
 * Take an array and shuffle it with linear time complexity and
 * constant (i.e. no copies) space complexity.
 *
 * https://bost.ocks.org/mike/shuffle/
 */
function shuffle(array) {
    var tmp, i, m = array.length;

    while (m) {
        // Pick remaining element
        i = Math.floor(Math.random() * m--);

        // Swap with current element from end
        tmp = array[m];
        array[m] = array[i];
        array[i] = tmp;
    }

    return array; // Not super necessary, as JS is pass-by-ref for objs
}

