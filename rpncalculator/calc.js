function calculate(n) {
  console.log(`Calculate for ${n}`);
  console.group();
  if (n > 0) {
    console.log(`Requires recursion ${n - 1}`);
    const r = n * calculate(n - 1);
    console.log(`Returned ${r} from call`);
    console.groupEnd();
    return r;
  } else {
    console.log("Returns 1");
    console.groupEnd();
    return 1;
  }
}

console.log(calculate(5));
