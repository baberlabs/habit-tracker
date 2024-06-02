# Habit Tracker

## Overview

The Habit Tracker is a minimalist and intuitive application designed to help users develop and maintain good habits. With a simple interface and essential features, users can easily add, view, and track their habits on a daily basis.

## Features

- **Add Habits**: Users can easily add new habits with a specified name.
- **View Current Habits**: View a list of all current habits.
- **Track Habits**: Mark habits as completed for each day of the year.
- **Persistent Storage**: Utilizes `localStorage` to save habits and track progress.

## Screenshots

### Adding a habit:
![image](https://github.com/baberlabs/habit-tracker/assets/125814185/126335c6-d439-44e1-9ab5-15a048addfd7)

### Current habits list:
![image](https://github.com/baberlabs/habit-tracker/assets/125814185/a8bdb06b-4c3e-44dc-a57d-3f539f6812f7)

### Viewing a habit (track):
![image](https://github.com/baberlabs/habit-tracker/assets/125814185/cfde3d8d-8dbc-4331-8198-95ccf0d724f4)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/habit-tracker.git
   cd habit-tracker
   ```

2. **Install dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

### Running the Application

To start the application in development mode:

Using npm:

```bash
npm start
```

Using yarn:

```bash
yarn start
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Building for Production

To build the application for production:

Using npm:

```bash
npm run build
```

Using yarn:

```bash
yarn build
```

The optimized and minified build will be in the `build` directory.

## Usage

### Adding a Habit

1. Enter the name of the habit in the input field.
2. Click the "Start Tracking" button.
3. The new habit will appear in the "Current Habits" section.

### Viewing and Tracking Habits

1. Click on any habit name in the "Current Habits" section to view and track it.
2. Check or uncheck the boxes corresponding to each day to mark the habit as completed or not.

## Project Structure

```css
habit-tracker/
├── public/
│   ├── index.html
│   └── ...
├── src/
│
├── components/
│   │   ├── AddHabit.jsx
│   │   ├── CurrentHabits.jsx
│   │   └── ViewHabit.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please submit a pull request or open an issue.

### Steps to Contribute

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any inquiries or support, please reach out to:

- **Name**: Baber Khan
- **GitHub**: github.com/baberlabs
