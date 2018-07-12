/**
 * Created by travis.howe on 7/11/18.
 */
function correct(string)
{
	return string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S')
}

console.log(correct("L0ND0N15"))


//OTHER SOLUTIONS
// const corrections = {
//   '5': 'S',
//   '0': 'O',
//   '1': 'I',
// };
//
// const correct = string => (
//   string.replace(/[501]/g, character => corrections[character])
// );