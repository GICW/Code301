# String Manipulation

## Overview

`includes` - Does a string include another? - Checks if a part of a string exists inside another.

```js
  let str = "My instructors shred";
  str.includes('uct'); // true
```

`substr` - Returns part of a string between indexes. -Cuts out part of a string from start to end (end not included).

```js
  let str = "My instructors shred";
  str.substring(0,2); // My
```

`charAt` - Returns the character at an indexed position -Gives the character at a specific position.

```js
  let str = "My instructors shred";
  str.charAt(0); // M
```

`charCodeAt` - Returns the ASCII Code of a character - Gives the ASCII number for the character at that index.

```js
  let str = "My instructors shred";
  str.charCodeAt(0); // 77
  
  'A'.charCodeAt(0); // 65
  
```

`fromCharCode` - Returns a letter from ASCII Code -Converts an ASCII number back to a character.

```js
  String.fromCharCode(77); // M
```
charCodeAt(index) means:
It gives you a number that represents the character at that spot — specifically, its ASCII code (a numeric code computers use to represent letters).
## Reference and Resources

- [Strings at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
