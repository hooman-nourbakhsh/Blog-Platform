# Blog Platform

A modern, responsive blog platform built with React, GraphQL, and Material UI, integrated with Hygraph for content management. The project features dynamic routing, RTL support, and a comment system, developed using the Conventional Commits standard.

## 🚀 Features
- **Dynamic Blog and Author Pages**: Display blog posts and author details fetched from Hygraph using GraphQL queries.
- **Comment System**: Users can submit comments for blog posts with real-time feedback via toast notifications.
- **Responsive Design**: Built with Material UI for a mobile-friendly, visually appealing interface.
- **RTL Support**: Right-to-left styling for languages like Persian, including proper TextField alignment.
- **Custom Typography**: Uses the YekanBakh font with multiple weights for a localized experience.
- **Loading States**: Integrated `react-loader-spinner` for smooth loading animations.
- **Sanitized Content**: Secure rendering of HTML content using `sanitize-html`.
- **Routing**: Client-side navigation with `react-router-dom` for blog and author pages.

## 🛠️ Technologies
- **Frontend**: React 18.2, Material UI 5, react-router-dom 6
- **Build Tool**: Vite 5.4
- **Backend**: Hygraph (GraphQL CMS)
- **GraphQL**: Apollo Client for queries and mutations
- **Styling**: Emotion, stylis-plugin-rtl for RTL support
- **Notifications**: react-toastify
- **Loading**: react-loader-spinner
- **Sanitization**: sanitize-html
- **Fonts**: YekanBakh
- **Version Control**: Git with Conventional Commits

## 🏗️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/hooman-nourbakhsh/Blog-Platform.git
   ```
2. Navigate to the project directory:
   ```bash
   cd blog-platform
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your Hygraph API endpoint:
   ```env
   REACT_APP_GRAPHCMS_URI=https://your-hygraph-api-endpoint
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## 🎯 Usage
- **Homepage**: Displays a list of authors and blog posts in a responsive grid layout.
- **Blog Page**: Shows detailed post content, author info, and a comment section.
- **Author Page**: Lists author details and their published posts.
- **Comment Form**: Allows users to submit comments with validation and success notifications.
- Access the app at `http://localhost:5173` (or the port specified by Vite) after starting the server.

## 📂 Project Structure
```
src/
├── components/               # Reusable components
│   ├── author/               # Author-related components (AuthorPage, Authors)
│   ├── blog/                 # Blog-related components (BlogPage, Blogs)
│   ├── comment/              # Comment-related components (CommentForm, Comments)
│   ├── home/                 # Homepage component
│   ├── layout/               # Layout components (Header, Footer, Layout)
│   ├── shared/               # Shared components (CardEL, Loader)
├── graphql/                  # GraphQL queries and mutations
│   ├── queries.js            # GraphQL queries (posts, authors, comments)
│   ├── mutations.js          # GraphQL mutations (comment submission)
├── mui/                      # Material UI theme configuration
│   ├── theme.js              # Custom theme with YekanBakh font and RTL
├── styles/                   # Global styles
│   ├── fonts.css             # YekanBakh font definitions
│   ├── index.css             # Global CSS
├── fonts/                    # YekanBakh font files
├── App.js                    # Main app with routing
├── main.js                   # Entry point with Apollo, Theme, and RTL setup
```

## 📜 License
This project is licensed under the Apache License 2.0.

You are free to use, modify, and distribute this software, but you must provide proper attribution to the original authors. For more details, see the [`Apache License`](./LICENSE) file.