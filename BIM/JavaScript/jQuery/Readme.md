# 📖 jQuery Complete Guide

## 🔰 Introduction

jQuery is a fast, lightweight JavaScript library designed to simplify
HTML DOM manipulation, event handling, animations, and AJAX
interactions.

👉 It reduces complex JavaScript code into simple and short syntax.

👉 Motto: **"Write less, do more."**

---

## ⚡ Advantages of jQuery

- Simple syntax
- Cross-browser compatibility
- Easy DOM manipulation
- Built-in effects and animations
- Strong community support
- Simple event handling
- Built-in animations
- AJAX support
- Lightweight and fast

---

## 🧩 Adding jQuery

### ✅ CDN Method (Recommended)

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

```javascript
$(selector).action();
```

# 🚀 jQuery Complete Step-by-Step Guide

---

# 📌 Why jQuery is used?

- To write less code
- To make web pages interactive
- To simplify JavaScript tasks
- To handle browser differences automatically

---

# 📌jQuery Syntax (Definition)

## 📖 Syntax

\$(selector).action();

## 📌 Diagram

    $ → jQuery function
    (selector) → HTML element
    action() → task to perform

## Example

```javascript
$("#demo").hide();
```

---

# 📌 jQuery Selectors (Definition)

## 📖 Definition

Selectors are used to select and manipulate HTML elements.

---

## Types of Selectors

```javascript
$("#id"); // ID selector
$(".class"); // Class selector
$("p"); // Element selector
$("p, h1"); // Multiple selector
$("a[href='#']"); // Attribute selector
```

---

## 📌 Diagram (Selector Flow)

    HTML Element → jQuery Selector → Action
    <p id="demo"> → $("#demo") → hide()

---

# 📌 Document Ready (Important Theory)

## 📖 Definition

It ensures the code runs only after the HTML document is fully loaded.

```javascript
$(document).ready(function () {
  // code
});
```

## Short Form

```javascript
$(function () {});
```

---

## 📌 Diagram

    Page Load → DOM Ready → jQuery Executes

---

# 📌 Events (Definition)

## 📖 Definition

Events are actions performed by the user like click, hover, or typing.

---

## Common Events

- click()
- dblclick()
- hover()
- focus()
- blur()
- submit()

---

## 📌 Diagram

    User Action → Event Trigger → Function Runs

---

# 📌DOM Manipulation (Theory)

## 📖 Definition

DOM manipulation means changing HTML elements using jQuery.

---

## Methods

### Get

```javascript
.text()
.html()
.val()
```

### Set

```javascript
.text("Hello")
.html("<b>Hello</b>")
```

---

## 📌 Diagram

    HTML DOM → jQuery → Modified DOM

---

# 📌CSS Manipulation

## 📖 Definition

Used to change CSS properties dynamically.

```javascript
.css("color", "red");
```

---

# 📌Effects (Definition)

## 📖 Definition

Effects are used to add visual animations.

---

## Types

### Show/Hide

```javascript
.hide()
.show()
.toggle()
```

### Fade

```javascript
.fadeIn()
.fadeOut()
```

### Slide

```javascript
.slideUp()
.slideDown()
```

---

## 📌 Diagram

    Action → jQuery Effect → Visual Change

---

# 📌Animation

## 📖 Definition

Used to create custom movement effects.

```javascript
.animate({
  left: "100px"
})
```

---

## 📌 Diagram

    Start Position → Animation → End Position

---

# 📌AJAX (Definition)

## 📖 Definition

AJAX allows loading data without refreshing the page.

---

## Methods

```javascript
.load()
$.get()
$.post()
```

---

```javascript
.load()

$.get("url", function(data) {
  console.log(data);
});

$.post("url", {name: "Anuj"}, function(data) {
  console.log(data);
});
```

## 📌 Diagram

    Browser ↔ Server ↔ Data Update (No Refresh)

---

# 📌 Traversing

## 📖 Definition

Used to move between HTML elements.

```javascript
.parent()
.children()
.siblings()
```

---

# 📌 Mini Project (Example)

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  </head>
  <body>
    <p id="demo">Hello jQuery</p>
    <button id="btn">Toggle</button>

    <script>
      $(function () {
        $("#btn").click(function () {
          $("#demo").toggle();
        });
      });
    </script>
  </body>
</html>
```

---

# 📌 Exam Short Questions (Important)

## Q1: What is jQuery?

👉 jQuery is a JavaScript library used to simplify web development.

## Q2: What is DOM?

👉 DOM is a structure of HTML elements.

## Q3: What is event?

👉 Event is an action like click or hover.

---

# 📌 Summary

- jQuery simplifies JavaScript
- Uses `$()` syntax
- Helps in DOM, events, AJAX, animations
- Reduces coding complexity
- Useful for quick UI development

---
