const generateModule = require("./generateModule");

const init = () => {
  const passedArg = process.argv.slice(2);
  if (passedArg.length > 2) {
    help("Too many arguments!");
  } else if (passedArg[0] != "component") {
    help("Flag should be component!");
  } else {
    const componentName = passedArg[1];
 
    generateModule(componentName, "v1");
  }
};

const help = async (message) => {
  console.log("WRONG INPUT: " + `${message}`);
 
};

(function runArgument() {
  init();
})();
