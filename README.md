# MEMOGATE APP

---

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

A simple and convenient mobile application for saving quick notes and bookmarks. Capture URLs, titles, descriptions, and organize everything with tags.

## Features

- **Quick Bookmarking:** Save links and ideas in just a few taps.
- **Flexible Tagging:** Organize your notes with custom tags for easy categorization.
- **Powerful Search:** Instantly find any note by its title, description, or by one or more tags.
- **Full CRUD:** Create, read, update, and delete your notes with ease.
- **Polished UI:** Includes an animated splash screen for a smooth user experience.

## Tech Stack

- **Frontend:** React Native / TypeScript
- **Navigation:** React Navigation
- **State Management:** Redux Toolkit & RTK Query
- **Backend:** Express.js
- **Database:** PostgreSQL

## Getting start

### Prerequisites

- Node.js (v18 or newer)
- Yarn
- Android Studio / Xcode to run the simulator/emulator

### Installation

**Install dependencies:**

---

```bash
  yarn install
```

**Create and configure the `.env` file in the project root:**

1. Create a `.env` file in the root directory of the project.
2. Configure it according to the `example.env`:
   - Set the `API_URL` - path to your backend

**Start the project:**

```bash
  # For Android
  yarn android

  # For iOS
  # Note: The app has not been tested on physical iOS devices
  yarn ios
```

## Contributing

---

Pull requests are welcome.

> Note: If you're editing this README, please follow the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

---

[MIT © Ilia Dorovskih.](./LICENSE)
