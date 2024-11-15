function formatFileName(string) {
  console.log(`${string.replaceAll(" ", "-")}.js`);
}

formatFileName(
  "Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe"
);
