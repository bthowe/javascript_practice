/**
 * Created by travis.howe on 7/12/18.
 */
function nbYear(p0, percent, aug, p) {
    var pop = p0
    var count = 0
    while (pop < p) {
        pop = (pop * (1 + (percent / 100)) + aug)
        count++
    }
    return count
}

// console.log(nbYear(1500, 5, 100, 5000))
console.log(nbYear(1500000, 2.5, 10000, 2000000))



//OTHER SOLUTIONS
// function nbYear(p0, percent, aug, p) {
//   for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
//   return y;
// }

