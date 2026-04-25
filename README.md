---

**Authors:**  Minami Jones, Briana Ramos Hernandez, Katherine Howells
**Instructor:** Jeffery Yee
**Course:** Web Programming (Spring 2023–2024, Mission Vista High School)

---
## Project Description

travelShare is a full-stack web application designed to provide basic information about continents and allow users to share travel experiences and images through a simple interactive interface.

# Server Setup Guide

## Overview

This project is a Node.js + Express web application for the travelShare platform. It runs a local development server that serves the frontend and backend functionality.

## Requirements

Make sure you have installed:

* Node.js (recommended LTS version)

---

## Default Server Port

* The server runs on **Port 3003** by default
* If 3003 is in use, it may fall back to another port depending on configuration

---

## How to Run the Project

### 1. Open a Terminal / Shell

* You can use any command-line interface (CLI), such as:

  * Command Prompt (Windows)
  * PowerShell (Windows)
  * Terminal (macOS / Linux)

### 2. Navigate to Project Folder

Copy the full path to the project folder, then run:

```bash
cd "PASTE_YOUR_PROJECT_PATH_HERE"
```

Example:

```bash
cd "C:\Users\YourName\Desktop\travelShare"
```

---

### 3. Install Dependencies (if not already installed)

```bash
npm install
```

---

### 4. Start the Server

```bash
node indext3.js
```

You should see output indicating the server is running.

---

### 5. Open in Browser

Open Google Chrome (or any browser) and go to:

```
http://localhost:3003
```

> If your terminal shows a different port number, replace `3003` with that port.

---

## Notes

* Make sure no other application is using port 3003
* If the server does not start, ensure all dependencies are installed using `npm install`
* Keep the terminal open while using the website

---

## Troubleshooting

* **"Cannot find module 'express'"** → run `npm install`
* **Port already in use** → change port in `index.js` or close conflicting application
* **Page not loading** → confirm server is running in terminal

---
