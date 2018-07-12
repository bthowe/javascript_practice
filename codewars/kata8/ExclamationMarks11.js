/**
 * Created by travis.howe on 7/11/18.
 */
function replace(s) {
    var text = ""
    var i

    for (i = 0; i < s.length; i++) {
        var l = s[i].toLowerCase()
        if (l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u') {
            text += '!'
        }
        else {
            text += s[i]
        }
    }
    return text
}

console.log(replace("Hey there"))



//OTHER SOLUTIONS
// function replace(s){
//   return s.replace(/[aeoiu]/ig, '!')
// }