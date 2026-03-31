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

| XML | HTML |
|-----|------|
| Designed to **carry data** | Designed to **display data** |
| Tags are **user-defined (custom)** | Tags are **predefined** |
| **Whitespace is preserved** | Whitespace is **ignored** |

---

## 📏 Rules of XML

- XML structure follows a **tree structure**.
- It must have **only one root element**.
- All elements can have **child elements**.

### ✔️ Basic Rules

- Every tag must have a **closing tag**.
- XML tags are **case-sensitive**.
- Attribute values must always be **quoted**.
- Comments must not contain **two dashes (`--`) inside**.
- Tag name conflicts can be solved using **prefixes (namespaces)**.

---

## 🌳 Example of XML Structure

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

---

## 🌐 XML Namespaces

- Used to **avoid tag name conflicts**.
- Defined using the `xmlns` attribute.

### 🔸 Syntax

```xml
xmlns:prefix="URI"
```

### 🔸 Example

```xml
<book xmlns:tech="https://example.com/technology">
    <tech:title>XML Guide</tech:title>
</book>
```

---

## ✅ Key Points

- XML is **not a programming language**.
- It is mainly used for:
  - Data storage
  - Data transfer
- XML is **extensible** → You can create your own tags.

---

## 🚀 Conclusion

XML is a flexible and powerful way to store and transport data.  
It focuses on **data structure**, while HTML focuses on **data presentation**.