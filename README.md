# Fullstack Portfolio Website

A responsive fullstack portfolio website with a red-and-black dark visual style, animated UI effects, and backend API routes for dynamic content.

## Tech Stack

- Node.js
- Express
- Vanilla HTML, CSS, JavaScript

## Features

- Responsive layout for desktop, tablet, and mobile
- Red/black dark mode theme with alternate ember mode toggle
- Keyframe-driven animations:
	- Glowing hero text pulse
	- Scanline effect in hero panel
	- Background drift effect
	- Section reveal animation
- Fullstack API endpoints:
	- `GET /api/profile`
	- `GET /api/projects`
	- `POST /api/contact`
- Contact form submits messages to backend (`data/messages.json`)

## Project Structure

```text
.
|-- data/
|   |-- messages.json
|   `-- projects.json
|-- public/
|   |-- app.js
|   |-- index.html
|   `-- styles.css
|-- server.js
`-- package.json
```
Website Link(Deployed on Render): https://my-portfolio-u2pr.onrender.com/
## Run Locally

Install dependencies:

```bash
npm install
```

Run in development mode:

```bash
npm run dev
```

Run in production mode:

```bash
npm start
```

Open your browser at:

```text
http://localhost:3000
```
