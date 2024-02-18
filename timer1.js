const args = process.argv.slice(2);

for (const arg of args) {
  if (arg == Number(arg) && arg > 0) {
    console.log(`this one worked: ${arg}`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, arg * 1000);
  }
}