# Untangled HTML: Angle Brackets Hide or Show for VS Code
### Before:
```html
<HTML lang="en">
<HEAD>
    <META charset="UTF-8">
    <META name="viewport" content="width=device-width, initial-scale=1.0">
    <TITLE>Document</TITLE>
</HEAD>
<BODY>
    <H1>Hello, World!</H1>
    <P>This is a simple HTML page.</P>
</BODY>
</HTML>
```

### After:
```js
HTML lang="en"
HEAD
    META charset="UTF-8"
    META name="viewport" content="width=device-width, initial-scale=1.0"
    TITLE Document TITLE
HEAD
BODY
    H1 Hello, World! H1
    SPAN This is a simple HTML page. SPAN
BODY
HTML
```

---

## Usage

Once installed, use the following command to toggle the visibility of HTML angle brackets in your code:

1. Open the **Command Palette** with `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
2. Search for **Toggle HTML Angle Brackets**.
3. Click on it to toggle the visibility.

Alternatively, you can assign a custom keybinding to the toggle command for faster access.

---

## Overview

**HTML Angle Bracket Toggle** is a simple yet powerful VS Code extension designed to give developers full control over the visibility of HTML angle brackets (`< >`). Whether you're working with plain HTML, Vue, or JSX, this extension helps you declutter your code editor by toggling the visibility of HTML tags, making it easier to focus on the structure and logic of your code.

### Key Features:

- **Toggle HTML angle brackets visibility**: Hide or show HTML, Vue, and JSX tag brackets with a single command.
- **Works across all file types**: Supports `.html`, `.vue`, and `.jsx` files, ensuring your entire workflow is streamlined.
- **Customizable**: Automatically adapts to your editor's background color, ensuring a seamless and consistent experience.
- **Quick status updates**: Get instant feedback on the visibility status of your HTML brackets via the VS Code status bar.

---

## Installation

1. Open **VS Code**.
2. Go to the **Extensions** view by clicking the Extensions icon in the Activity Bar on the side of the window or using the shortcut `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
3. Search for **HTML Angle Bracket Toggle**.
4. Click **Install**.

---


## How It Works

When enabled, this extension hides the HTML tags (`< >`) in your code editor, leaving behind a cleaner and more readable code layout. It's perfect for focusing on code structure or reading through code without distraction.

When disabled, it restores the HTML tags, making it easier to visually distinguish HTML elements.

---

## Why Use It?

- **Declutter Your Workspace**: Hiding the angle brackets can reduce visual noise and help you focus on the most important parts of your code.
- **Perfect for Reviewers**: If you're reviewing a large codebase, toggling the tags can help you understand the flow without getting distracted by HTML syntax.
- **Customizable**: Automatically adjusts to your theme and background colors, making it feel like a native feature of your editor.

---

## Contributions

We welcome contributions! Feel free to open an issue or submit a pull request if you'd like to contribute to this extension. Whether it’s adding new features or fixing bugs, we’d love to have your help.

---

## License

This extension is open source and available under the [MIT License](LICENSE).
