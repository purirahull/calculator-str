function generateRandomString() {
  const characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&()_={}|;:<>?\\\n";
  const length = 10;
  let str = "";
  for (let i = 0; i < length; i++) {
    if (Math.random() < 0.2) {
      const num = Math.floor(Math.random() * 100);
      str += num;
      if (Math.random() < 0.7) {
        str += ",";
      }
    } else {
      str += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }
  const cleaned = str.replace(/[^0-9,.\-]/g, "");
  const expectedSum = cleaned
    .split(",")
    .filter((num) => num !== "")
    .map((num) => parseFloat(num))
    .reduce((acc, curr) => acc + curr, 0);
  return {
    testString: str,
    expectedSum: expectedSum,
  };
}

function runTests() {
  let passed = 0;
  let failed = 0;

  for (let i = 0; i < 1000; i++) {
    const { testString, expectedSum } = generateRandomString();
    const result = add(testString)

    if (result !== expectedSum) {
      console.error(
        `Test ${
          i + 1
        } FAILED\nString: "${testString}"\nExpected: ${expectedSum}, Got: ${result}`
      );
      failed++;
    } else {
      console.log(`Test passed for string: ${testString}`);
      passed++;
    }
  }

  console.log(`Passed: ${passed},Failed: ${failed}`);
  return `Passed: ${passed},Failed: ${failed}`;
}
