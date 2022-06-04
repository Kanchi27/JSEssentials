// The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array.
// But the spread syntax expands iterables into individual elements.

// REST 
function myBio(firstName, lastName, ...otherInfo) { 
  return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");      // ["CodeSweetly", "Web Developer", "Male"]



// SPREAD
function myBio(firstName, lastName, company) { 
  return `${firstName} ${lastName} runs ${company}`;
}

// Use spread to expand an array’s items into individual arguments:
myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);             // “Oluwatobi Sofela runs CodeSweetly”
