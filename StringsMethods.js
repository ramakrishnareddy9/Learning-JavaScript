let str = "  Hello, JavaScript!  ";

// 1. length
console.log("Length:", str.length);

// 2. toUpperCase() and toLowerCase()
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

// 3. trim(), trimStart(), trimEnd()
console.log("Trimmed:", str.trim());
console.log("Trim Start:", str.trimStart());
console.log("Trim End:", str.trimEnd());

// 4. includes(), startsWith(), endsWith()
console.log("Includes 'Java':", str.includes("Java"));
console.log("Starts with '  He':", str.startsWith("  He"));
console.log("Ends with '!  ':", str.endsWith("!  "));

// 5. indexOf(), lastIndexOf()
console.log("Index of 'J':", str.indexOf("J"));
console.log("Last index of 'l':", str.lastIndexOf("l"));

// 6. slice(), substring(), substr()
console.log("Slice (2, 7):", str.slice(2, 7));
console.log("Substring (2, 7):", str.substring(2, 7));
// substr is deprecated but still works in many environments
console.log("Substr (2, 5):", str.substr(2, 5));

// 7. replace(), replaceAll()
console.log("Replace 'JavaScript' with 'World':", str.replace("JavaScript", "World"));
console.log("Replace all spaces with '-':", str.replaceAll(" ", "-"));

// 8. split()
console.log("Split by space:", str.split(" "));

// 9. charAt(), charCodeAt()
console.log("Char at 2:", str.charAt(2));
console.log("Char code at 2:", str.charCodeAt(2));

// 10. concat()
let str2 = "Let's learn!";
console.log("Concat:", str.concat(" ", str2));

// 11. repeat()
console.log("Repeat:", str.repeat(2));

// 12. padStart(), padEnd()
let numStr = "5";
console.log("Pad Start:", numStr.padStart(3, "0"));
console.log("Pad End:", numStr.padEnd(3, "0"));