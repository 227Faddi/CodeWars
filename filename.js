function formatFileName(string) {
  console.log(`${string.replaceAll(" ", "-")}.js`);
}

formatFileName("By 3, or not by 3? That is the question . . .");
