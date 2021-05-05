const args = process.argv.slice(2);
const timer = (args) => {
  for (let arg of args) {
    if(arg > 0) {
      setTimeout(() => {
        process.stdout.write('.');
      }, arg * 1000);
    }
  }
}  
timer(args);