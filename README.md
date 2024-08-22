# NewsMonkey

NewsMonkey is a React application that provides users with the latest news using the NewsAPI. It allows users to view and search for news articles from various sources and categories.

### Landing Page

![Screenshot 2024-08-21 223910](https://github.com/user-attachments/assets/0e11723c-9993-4101-a248-22ddd2617f0e)

### Specific News Page (for example, Science)

![Screenshot 2024-08-21 223934](https://github.com/user-attachments/assets/2b5277a5-5ab8-4dcf-ad4e-2a2fc92506f1)



## Features

- Fetches news articles from NewsAPI
- Search functionality to find specific news topics
- Responsive design for a seamless experience on various devices

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

- Clone the repository

```bash
git clone https://github.com/yourusername/newsmonkey.git
```

- Navigate into the project directory

```bash
cd newsmonkey
```

- Install dependencies

```bash
npm install
```

### Configuration

You need to set up your NewsAPI key. Create a .env.local file in the root of the project and add your API key:

```env
REACT_APP_NEWS_API=your_api_key_here
```

Replace *your_api_key_here* with your actual NewsAPI key.

### Running the Application

To start the development server and run the app:

```bash
npm start
```

This command will start the development server and open the app in your default web browser. The app will be available at http://localhost:3000.

### Building for Production

To create a production-ready build of the app:

```bash
npm run build
```

The build files will be output to the build directory. You can deploy these files to your preferred hosting service.

### Running Tests

To run the tests for the application:

```bash
npm test
```

## Folder Structure

- src/ - Contains the React components and application logic
- public/ - Contains the static assets and HTML file
- .env.local - Configuration file for environment variables

## Troubleshooting

- Ensure you have the correct API key and it is set in the .env.local file.
- Check the console for any errors and refer to the NewsAPI documentation for API usage issues.

## Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the Apache License 2.0 - see the LICENSE file for details.
