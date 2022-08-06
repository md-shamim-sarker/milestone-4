const stdScore = {
  Albert: 95,
  Shamim: 66,
  Dan: 80,
  Snigdha: 59,
  David: 47,
  Mark: 77,
};

const keyArray = Object.keys(stdScore);
// console.log(keyArray);
// console.log(Object.values(stdScore));

for (let i = 0; i < keyArray.length; i++) {
  const element = keyArray[i];

  let grade = "";

  if (stdScore[element] >= 90 && stdScore[element] <= 100) {
    grade = "A+";
  } else if (stdScore[element] >= 80 && stdScore[element] < 90) {
    grade = "A";
  } else if (stdScore[element] >= 70 && stdScore[element] < 80) {
    grade = "B";
  } else if (stdScore[element] >= 60 && stdScore[element] < 70) {
    grade = "C";
  } else if (stdScore[element] >= 50 && stdScore[element] < 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log(element, stdScore[element], grade);
}
