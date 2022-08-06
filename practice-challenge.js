function practiceFunction(understand) {
  let dailyTask =
    "1. Unlock module at 8.00 pm.\n" +
    "2. Practice quickly through watching video.\n" +
    "3. Take notes with watching video.\n" +
    "4. Practice module yourself after finishing video.\n";
  if (understand !== "getIt") {
    dailyTask += "5. Join the support session.";
  }

  console.log("===========For Loop============");
  for (let i = 1; i <= 10; i++) {
    console.log(`\n------------${i} time----------`);
    console.log(dailyTask);
  }

  console.log("\n\n===========For Loop Reverse============");
  for (let i = 10; i >= 1; i--) {
    console.log(`\n------------${i} time----------`);
    console.log(dailyTask);
  }

  console.log("\n\n===========While Loop===========");
  let j = 1;
  while (j <= 10) {
    console.log(`\n------------${j} time----------`);
    console.log(dailyTask);
    j++;
  }
  console.log("\n\n===========While Loop Reverse===========");
  let k = 10;
  while (k >= 1) {
    console.log(`\n------------${k} time----------`);
    console.log(dailyTask);
    k--;
  }
}

let understand = "notGetIt";
practiceFunction(understand);
