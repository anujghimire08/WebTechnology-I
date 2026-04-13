# 📄 XML (Extensible Markup Language)

## 🔹 What is XML?

- XML is a **software and hardware independent tool** for storing and transporting data.
- It is designed to be **self-descriptive**.
- XML **does not do anything** (it only stores data).
- XML is just **information wrapped inside tags**, so machines can understand it easily.
- XML is recommended by the **W3C (World Wide Web Consortium)**.

---

## 🔸 XML Prolog

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

- This is called the **prolog**.
- It defines:
  - XML version
  - Character encoding

---

## ⚔️ XML vs HTML

| XML                                | HTML                         |
| ---------------------------------- | ---------------------------- |
| Designed to **carry data**         | Designed to **display data** |
| Tags are **user-defined (custom)** | Tags are **predefined**      |
| **Whitespace is preserved**        | Whitespace is **ignored**    |

---

### ✔️ Basic Rules

- XML structure follows a **tree structure**.
- It must have **only one root element**.
- All elements can have **child elements**.
- Every tag must have a **closing tag**.
- XML tags are **case-sensitive**.
- Attribute values must always be **quoted**.
- Comments must not contain **two dashes (`--`) inside**.
- Tag name conflicts can be solved using **prefixes (namespaces)**.

---

# 📘 XML Elements, Attributes & Naming Rules

## 📌 XML Elements

An **XML element** is everything from the opening tag to the closing tag, including content.

👉 XML documents are made up of XML elements.

## 🧱 Definition

An XML element includes:

- Opening tag
- Content
- Closing tag

---

## 💡 Example of XML Element

```xml
<student>
    <name>Anuj</name>
    <age>20</age>
</student>
```

---

## ⚠️ Tag Conflict Example

### ❌ Without Namespace (Conflict)

```xml
<table>
    <name>HTML Table</name>
</table>

<table>
    <name>Furniture Table</name>
</table>
```

👉 Problem: Both `<table>` tags have different meanings.

---

### ✅ With Namespace (Solved)

```xml
<h:table xmlns:h="http://www.w3.org/TR/html4/">
    <h:name>HTML Table</h:name>
</h:table>

<f:table xmlns:f="https://www.example.com/furniture">
    <f:name>Furniture Table</f:name>
</f:table>
```

## Default Namespace in XML

## 📌 Definition

A **default namespace** in XML is a namespace that is declared without a prefix using the `xmlns` attribute.  
It applies to all elements within the scope of that element, unless a different namespace is specified.

👉 It helps avoid naming conflicts between elements from different XML vocabularies.

---

## 🧱 Syntax

```xml
<root xmlns="namespace-URI">


xmlns:prefix="URI"
```

## 🌐 XML Namespaces

- Used to **avoid tag name conflicts**.
- Defined using the `xmlns` attribute.
- `xmlns` gives prefix a qualified namespace.
- Namespace `xmlns` can be declared in the XML root element.

### 🔸 Example

```xml
<book xmlns:tech="https://example.com/technology">
    <tech:title>XML Guide</tech:title>
</book>
```

---

## 🔌 XMLHttpRequest Object (AJAX)

- Used to **request data from a web server**
- Helps update a webpage **without reloading** (SPA)
- Can:
  - Request data
  - Receive data
  - Send data to server

### 🔸 Example GET XML using XMLHttpRequest (XHR)

```javascript
// Step 1: Create object
let xhttp = new XMLHttpRequest();

// Step 2: Define callback function
// onload triggered when request (readystate) finished & response is received
xhttp.onload = function () {
  if (this.status == 200) {
    // Step 3: Display response
    document.getElementById("demo").innerHTML = this.responseText;
  }
};

// Step 4: Open request
xhttp.open("GET", "data.xml", true);

// Step 5: Send request
xhttp.send();
```

### 🔸 Example POST XML using XMLHttpRequest (XHR)

```javascript
// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Define the server endpoint
const url = "https://example.com/api";

// Prepare the XML data to send
const xmlData = `
<?xml version="1.0" encoding="UTF-8"?>
<user>
    <id>123</id>
    <name>Anuj Ghimire</name>
    <email>anuj@example.com</email>
</user>
`;

// Initialize the POST request
xhr.open("POST", url, true);

// Set the Content-Type header to XML
xhr.setRequestHeader("Content-Type", "application/xml");

// Handle the server response
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log("Response:", xhr.responseText);
  } else {
    console.error("Error:", xhr.status, xhr.statusText);
  }
};

// Send the XML data
xhr.send(xmlData);
```

---

## 🔍 XML Parsing

- XML Parsing means **reading XML data and converting it into usable form**.

### 🔸 Example with Steps

```javascript
// Step 1: Create parser
let parser = new DOMParser();

// Step 2: Parse XML string
let xmlDoc = parser.parseFromString(xmlString, "text/xml");

// Step 3: Access data
let name = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;

console.log(name);
```

---

## 🌳 XML DOM (Document Object Model)

- Represents XML as a **tree structure**
- Allows:
  - Access elements
  - Modify elements
  - Delete elements

### 🔸 Example

```javascript
let value = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
```

---

## 🔎 XML XPath

- XPath is used to **navigate through XML elements and attributes**
  use path expression to select node and node sets
  xpath expression can be used in javascript, java,php,python,xmlSchema,c etc.
  more info about xpath...

### 🔸 Example

```xml
/bookstore/book/title
```

👉 Selects all `<title>` inside `<book>`

### 🔸 Common XPath Symbols

| Symbol | Meaning         |
| ------ | --------------- |
| `/`    | Root node       |
| `//`   | Select anywhere |
| `@`    | Attribute       |
| `*`    | All elements    |

---

## 🔹 XSLT (Extensible Stylesheet Language Transformations)

### 📌 What is XSLT?

- XSLT is used to transform XML into HTML or other formats.
- It separates data from presentation.

---

### 📌 Example (with comments)

#### XML File (data.xml)

```xml
<students>
  <student>
    <name>Anuj</name> <!-- student name -->
    <age>21</age> <!-- student age -->
  </student>
</students>
```

#### XSLT File (style.xsl)

```xml
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

  <!-- Template that matches root element -->
  <xsl:template match="/">
    <html>
      <body>
        <h2>Student List</h2>

        <!-- Loop through each student -->
        <ul>
          <xsl:for-each select="students/student">
            <li>
              <!-- Extract name -->
              <xsl:value-of select="name"/> -

              <!-- Extract age -->
              <xsl:value-of select="age"/>
            </li>
          </xsl:for-each>
        </ul>

      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
```

---

## 🔹 XQuery (XML Query Language)

- Purpose: Query and extract data from XML documents (like SQL for XML).
- Use Case: Retrieve specific data from XML databases.

### 📌 Example (with comments)

#### XML File

```xml
<students>
  <student>
    <name>Anuj</name> <!-- student name -->
    <marks>80</marks> <!-- marks -->
  </student>
  <student>
    <name>Ram</name>
    <marks>60</marks>
  </student>
</students>
```

#### XQuery

```xquery
for $x in doc("students.xml")/students/student
(: loop through each student :)

where $x/marks > 70
(: filter students with marks > 70 :)

return $x/name
(: return only the name element :)
```

---

## 🔹 XLink

- Purpose: Define links inside XML documents.
- Use Case: Link XML elements to resources, multiple links, or metadata.

### 📌 Example (with comments)

```xml
<book xmlns:xlink="http://www.w3.org/1999/xlink">

  <title>XML Guide</title>

  <!-- XLink hyperlink -->
  <link xlink:type="simple"   <!-- simple link type -->
        xlink:href="https://example.com" <!-- destination URL -->
        xlink:show="new"  <!-- open in new window -->
        xlink:actuate="onRequest"> <!-- activate on click -->
    Visit Website
  </link>

</book>
```

---

## 🔹XPointer (XML Pointer Language)

- Purpose: Points to specific parts of an XML document.
- Built on: XPath.
- Use Case: Select a node or attribute from a large XML file.

### 📌 Example (with comments)

#### XML File

```xml
<students>
  <student id="s1"> <!-- unique ID -->
    <name>Anuj</name>
  </student>
</students>
```

#### XPointer

```
students.xml#xpointer(/students/student[@id='s1'])
```

<!-- Points to specific student using ID -->

---

# ✅ Summary

- XML is **not a programming language**.
- It is mainly used for:
  - Data storage
  - Data transfer

- XML is **extensible** → You can create your own tags.
- XSLT → Transform XML into HTML
- XQuery → Query and extract XML data
- XLink → Create hyperlinks in XML
- XPointer → Locate specific parts of XML

---

## 🚀 Conclusion

XML is a flexible and powerful way to store and transport data.
It focuses on **data structure**, while HTML focuses on **data presentation**.
