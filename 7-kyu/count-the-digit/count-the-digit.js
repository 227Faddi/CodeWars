  function nbDig(n, d) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
      let num = i * i;
      count += num
        .toString()
        .split("")
        .filter((digit) => digit === d.toString()).length
    }
    return count;
  }