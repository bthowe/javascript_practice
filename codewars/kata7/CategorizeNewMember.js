/**
 * Created by travis.howe on 7/12/18.
 */
function openOrSenior(data) {
    var cls = []
    for (var i = 0; i < data.length; i++) {
        if ((data[i][0] >= 55) && (data[i][1] > 7)) {
            cls[i] = 'Senior'
        }
        else {
            cls[i] = 'Open'
        }
    }
    return cls
}


console.log(openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]))


//OTHER SOLUTIONS
// function openOrSenior(data){
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }
