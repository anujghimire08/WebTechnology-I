## Introduction to Regular Expressions

Regular expressions are defined set of characters that follow rule **used to search a pattern on string**.
these patterns are widely used for string searching and manipulation. in
validation, regex helps ensure that strings such as email addresses and passwords
conform to expected formats.

## Basic Syntax

- **Delimiters**: used to mark the beginning and end of a regex pattern.

- **Literals** : ordinary characters like 'Hello', '1' or '$'

- **Meta Characters**: character with special meaning, like `. ^ $ * + ? {} [] \ | ()` can be matched using `\. & \^`

🔗 [Regex101 Practice Workspace](https://regex101.com/r/dZFiXC/1)

- **Flags**:

```
`g` (global): Searches for all occurrences of the pattern within the text, rather than just the first one.
```

```
`i` (case-insensitive): Ignores case differences when matching letters
```

```
`s` (dotAll): Allows the dot (.) to match newline characters (\n), which it doesn't do by default.
```

```
`u` Flag (Unicode Mode): Enables full Unicode support for the regex pattern.
```

🔗[Learn more about Unicode flag](https://anujghimire08.github.io/WebTechnology-I/BIM/REGEX/unicode.html)

```
`y` (sticky): Matches only from the last index where a previous match ended.
```

**Character Classes**: Defining sets of characters to match [abc].
Ranges within character classes [a-z] or [0-9].
Combined ranges within character classes [a-z0-9]Negated character classes [^abc].

🔗 [Regex101 Number Practice Workspace](https://regex101.com/r/rV9dgB/1)
