// Define introduction function
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // Define introductionWithLanguage function
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Define introductionWithLanguageOptional function
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Example calls (remove these when running tests)
  console.log(introduction("Alice")); // "Hi, my name is Alice."
  console.log(introductionWithLanguage("Alice", "Python")); // "Hi, my name is Alice and I am learning to program in Python."
  console.log(introductionWithLanguageOptional("Alice")); // "Hi, my name is Alice and I am learning to program in JavaScript."
  console.log(introductionWithLanguageOptional("Alice", "Ruby")); // "Hi, my name is Alice and I am learning to program in Ruby."
  