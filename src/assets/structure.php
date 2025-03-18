girlfriend-app/
│── public/                  # Public assets (favicon, images, etc.)
│   ├── index.html           # Main HTML file
│   ├── assets/              # Store static images, icons, etc.
│   │   ├── images/
│   │   ├── icons/
│   ├── manifest.json
│
│── src/                     # Main source code
│   ├── components/          # Reusable UI components
│   │   ├── OrionConstellation.js
│   │   ├── Star.js          # If we separate logic for each star
│   │   ├── MapMarker.js     # Marker component for Love Map
│   │   ├── QuizQuestion.js  # Component for quiz questions
│   │   ├── MusicPlayer.js   # Music box functionality
│   │
│   ├── pages/               # Pages for routing
│   │   ├── Home.js
│   │   ├── LoveMap.js
│   │   ├── Scrapbook.js
│   │   ├── Quiz.js
│   │   ├── MusicBox.js
│   │
│   ├── styles/              # Separate CSS styles for components
│   │   ├── OrionConstellation.css
│   │   ├── LoveMap.css
│   │   ├── Scrapbook.css
│   │   ├── Quiz.css
│   │   ├── MusicBox.css
│   │   ├── global.css       # Global styles (fonts, body, resets)
│   │
│   ├── data/                # Store JSON or other static data (optional)
│   │   ├── quizQuestions.json
│   │   ├── loveMapLocations.json
│   │
│   ├── utils/               # Utility/helper functions
│   │   ├── localStorageUtils.js   # Store quiz progress, treasure hunt progress
│   │   ├── formatDate.js         # Helper for formatting dates
│   │
│   ├── App.js               # Main component defining routes
│   ├── index.js             # Entry point
│
│── package.json             # Project metadata & dependencies
│── README.md                # Project documentation
│── .gitignore               # Ignore unnecessary files for Git
