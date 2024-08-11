
# Star Wars Heroes

## Overview

**Star Wars Heroes** is a web application built using React and TypeScript that provides detailed information about characters from the Star Wars universe. The application follows the Feature-Sliced Design (FSD) architecture, promoting modularity, scalability, and maintainability.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Character List**: View a list of Star Wars characters with basic details.
- **Character Details**: Click on a character to view more detailed information.
- **Responsive Design**: The application is optimized for various screen sizes.
- **Error Handling**: Custom error boundaries to handle unexpected errors gracefully.
- **Unit Tests**: Comprehensive unit tests for critical components.

## Project Structure

The project is structured following the Feature-Sliced Design (FSD) methodology, which divides the application into distinct layers and slices for better modularity.

```
src/
├── app/                # Application-level components and setup
│   ├── App.tsx         # Main application component
│   ├── store.ts        # Redux store setup
├── features/           # Features, each feature has its own slice
│   ├── characterDetails/
│   │   ├── model.ts    # State management logic
│   │   ├── ui.tsx      # UI components
│   ├── characterList/
│       ├── model.ts    # State management logic
│       ├── ui.tsx      # UI components
├── entities/           # Domain entities, reused across features
│   ├── character/
│       ├── index.ts    # Character entity logic
├── pages/              # Pages containing multiple feature slices
│   ├── CharacterPage/
│   ├── CharacterDetailsPage/
├── shared/             # Shared components and utilities
│   ├── ui/
│       ├── CharacterCard.tsx  # Reusable UI component
│       ├── ErrorBoundary.tsx  # Global error boundary
├── widgets/            # Standalone widgets like Header, Footer
│   ├── Header/
│   ├── Footer/
```

## Installation

### Prerequisites

Ensure that you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/star-wars-heroes.git
   ```

2. Navigate to the project directory:

   ```bash
   cd star-wars-heroes
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

The application should now be running on `http://localhost:3000`.

## Usage

### Running the Application

To run the application locally, use the following command:

```bash
npm start
# or
yarn start
```

### Building for Production

To create an optimized production build, run:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory.

## Testing

The project includes unit tests for core components and features. To run the tests, use the following command:

```bash
npm test
# or
yarn test
```

Test files are located alongside their respective components, following the `*.test.tsx` naming convention.

## Architecture

This project follows the Feature-Sliced Design (FSD) architecture, which helps in structuring the application based on business and UI requirements. The FSD approach divides the codebase into independent modules (slices) that can be developed and maintained separately. This modular approach ensures better scalability and maintainability.

### Layers in FSD:

- **App**: Application-wide setup, configurations, and main components.
- **Features**: Modules responsible for specific business features.
- **Entities**: Business logic and domain models.
- **Shared**: Reusable components and utilities used across multiple slices.
- **Widgets**: Independent UI components like headers, footers, etc.
- **Pages**: Combination of features to form complete pages.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript.
- **Redux**: State management library.
- **Jest**: JavaScript testing framework.
- **React Testing Library**: Utility for testing React components.

## Contributing

We welcome contributions to the project. Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a Pull Request.

Please ensure all tests pass and the code adheres to the established guidelines before submitting a PR.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
# star-wars-heroes
