# EduVideo Web App

## Overview

EduVideo is a modern educational video web application inspired by YouTube's design and user experience. The platform provides a seamless interface for users to browse, watch, and interact with educational videos. Key features include:

- **Video List Page**: Displays a grid of video thumbnails with titles.
- **Video Detail Page**: Dedicated page for each video, featuring a video player, description, and comments section.
- **User Authentication**: Simple login and logout functionality.
- **Video Management**: Users can add new videos with title, description, and URL.
- **Full-Featured Video Player**: Includes full-screen playback, volume control, and playback speed adjustment.
- **Comment Section**: Users can add and view comments on videos.

## Features

- **Browse Videos**: View a list of available videos with thumbnails and titles.
- **Watch Videos**: Click on a video card to open the video detail page and watch the video.
- **Add Videos**: Add new video entries with title, description, and URL.
- **Comment on Videos**: Add comments to videos and view comments from other users.
- **User Authentication**: Login and logout functionality to access the platform.

## Getting Started

### Prerequisites

To run this application, you will need:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/eduvideo.git
   cd eduvideo
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the Application

**USER NAME**username **PASSWORD**password

1. **Start the development server:**

   ```bash
   npm start
   ```

   This will start the React development server. Open your browser and navigate to `http://localhost:3000` to view the application.

2. **Build for production:**

   ```bash
   npm run build
   ```

   This will create an optimized production build in the `build` directory.

## Application Structure

```
src/
├── App.css
├── App.tsx
├── components/
│   ├── AddVideo.tsx
│   ├── AddVideo.css
│   ├── Header.tsx
│   ├── Header.css
│   ├── Login.tsx
│   ├── Login.css
│   ├── Logout.tsx
│   ├── VideoCard.tsx
│   ├── VideoCard.css
│   ├── VideoList.tsx
│   ├── VideoList.css
│   ├── VideoPlayer.tsx
│   ├── VideoPlayer.css
├── pages/
│   ├── VideoDetail.tsx
│   ├── VideoListPage.tsx
├── types.ts
└── index.tsx
public/
├── index.html
├── videos.json
```

## Screenshots

1. **Authentication Page**:
   ![Login Page](<Screenshot 2024-06-14 at 13.27.18.png>)
2. **Home Page**:
   ![Home](<Screenshot 2024-06-14 at 13.28.13.png>)
3. **Video Detail Page**:
   ![Video Detail Page](<Screenshot 2024-06-14 at 13.28.32.png>)
   ![Comment section](<Screenshot 2024-06-14 at 13.28.39.png>)
4. **Add Video Page**:
![Add video form](<Screenshot 2024-06-14 at 13.28.13-1.png>)
## Testing the Application

To test the application, follow these steps:

1. **Login**: Use the login form to authenticate yourself. Currently, the application uses local storage for a simple authentication mechanism.
2. **Browse Videos**: On the home page, browse through the available videos.
3. **Watch a Video**: Click on a video thumbnail to navigate to the video detail page and watch the video.
4. **Add a Video**: Use the 'Add Video' form to add a new video entry. Fill in the title, description, and URL.
6. **Comment on Videos**: Add comments to a video on the video detail page and view comments from other users.

This README provides an overview, setup instructions, and testing guidelines for your educational video web app. Feel free to customize it further based on your specific needs and environment.
