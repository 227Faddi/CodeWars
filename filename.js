function formatFileName(string) {
  console.log(`${string.replaceAll(" ", "-")}.js`);
}

formatFileName("Are the numbers in order?");
