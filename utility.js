function performCaculations() {
  const input = document.querySelector('input[name="string-input"]');
  const output_target = document.querySelector('p[id="output"]');
  const start = performance.now();
  const result = add(input.value);
  const end = performance.now();
  const duration = (end - start).toFixed(2);
  output_target.textContent = `${result} (${duration} ms)`;
}

function triggerTest() {
  const result = runTests();
  alert("Check console for test logs");
  const output_target = document.querySelector('p[id="test-output"]');
  output_target.textContent = `Last test outcome ${result }`

}
