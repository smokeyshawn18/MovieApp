## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)

## 🚨 Tutorial

## <a name="introduction">🤖 Introduction</a>

Built with React.js for the user interface, Appwrite for backend services, and styled with TailwindCSS, this Movie App lets users browse trending movies, search titles, and explore content using the TMDB API. It features a responsive layout and a sleek, modern design.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **[Appwrite](https://appwrite.io/)** is an open-source Backend-as-a-Service (BaaS) platform that provides developers with a set of APIs to manage authentication, databases, storage, and more, enabling rapid development of secure and scalable applications.

- **[React.js](https://react.dev/reference/react)** is a JavaScript library developed by Meta for building user interfaces. It allows developers to create reusable UI components that manage their own state, leading to more efficient and predictable code. React is widely used for developing single-page applications (SPAs) due to its virtual DOM that improves performance and ease of maintenance.

- **[React-use](https://github.com/streamich/react-use)** is a collection of essential React hooks that simplify common tasks like managing state, side effects, and lifecycle events, promoting cleaner and more maintainable code in React applications.

- **[Tailwind CSS](https://tailwindcss.com/)** is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing custom CSS, enabling rapid and responsive UI development.

- **[Vite](https://vite.dev/)** is a modern build tool that provides a fast development environment for frontend projects. It offers features like hot module replacement (HMR) and optimized builds, enhancing the development experience and performance.

## <a name="features">🔋 Features</a>

👉 **Browse All Movies**: Explore a wide range of movies available on the platform.

👉 **Search Movies**: Easily search for specific movies using a search function.

👉 **Trending Movies Algorithm**: Displays trending movies based on a dynamic algorithm.

👉 **Modern UI/UX**: A sleek and user-friendly interface designed for a great experience.

👉 **Responsiveness**: Fully responsive design that works seamlessly across devices.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

````

**Installation**

Install the project dependencies using npm:

```bash
npm install
````

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
VITE_TMDB_API_KEY=

VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
```

Replace the placeholder values with your actual **[TheMovieDatabase API](https://developer.themoviedb.org/reference/intro/getting-started)** and **[Appwrite](https://apwr.dev/JSM050)** credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>index.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

@import "tailwindcss";

@theme {
  --color-primary: #030014;

  --color-light-100: #cecefb;
  --color-light-200: #a8b5db;

  --color-gray-100: #9ca4ab;

  --color-dark-100: #0f0d23;

  --font-dm-sans: DM Sans, sans-serif;

  --breakpoint-xs: 480px;

  --background-image-hero-pattern: url("/hero-bg.png");
}

@layer base {
  body {
    font-family: "DM Sans", serif;
    font-optical-sizing: auto;
    background: #030014;
  }

  h1 {
    @apply mx-auto max-w-4xl text-center text-5xl font-bold leading-tight tracking-[-1%] text-white sm:text-[64px] sm:leading-[76px];
  }

  h2 {
    @apply text-2xl font-bold text-white sm:text-3xl;
  }

  main {
    @apply min-h-screen relative bg-primary;
  }

  header {
    @apply sm:mt-10 mt-5;
  }

  header img {
    @apply w-full max-w-lg h-auto object-contain mx-auto drop-shadow-md;
  }
}

@layer components {
  .pattern {
    @apply bg-hero-pattern w-full h-screen bg-center bg-cover absolute z-0;
  }

  .wrapper {
    @apply px-5 py-12 xs:p-10 max-w-7xl mx-auto flex flex-col relative z-10;
  }

  .trending {
    @apply mt-20;

    & ul {
      @apply flex flex-row overflow-y-auto gap-5 -mt-10 w-full hide-scrollbar;
    }

    & ul li {
      @apply min-w-[230px] flex flex-row items-center;
    }

    & ul li p {
      @apply fancy-text mt-[22px] text-nowrap;
    }

    & ul li img {
      @apply w-[127px] h-[163px] rounded-lg object-cover -ml-3.5;
    }
  }

  .search {
    @apply w-full bg-light-100/5 px-4 py-3 rounded-lg mt-10 max-w-3xl mx-auto;

    & div {
      @apply relative flex items-center;
    }

    & img {
      @apply absolute left-2 h-5 w-5;
    }

    & input {
      @apply w-full bg-transparent py-2 sm:pr-10 pl-10 text-base text-gray-200 placeholder-light-200 outline-hidden;
    }
  }

  .all-movies {
    @apply space-y-9;

    & ul {
      @apply grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4;
    }
  }

  .movie-card {
    @apply bg-dark-100 p-5 rounded-2xl shadow-inner shadow-light-100/10;

    & img {
      @apply rounded-lg h-auto w-full;
    }

    & h3 {
      @apply text-white font-bold text-base line-clamp-1;
    }

    & .content {
      @apply mt-2 flex flex-row items-center flex-wrap gap-2;
    }

    & .rating {
      @apply flex flex-row items-center gap-1;
    }

    & .rating img {
      @apply size-4 object-contain;
    }

    & .rating p {
      @apply font-bold text-base text-white;
    }

    & .content span {
      @apply text-sm text-gray-100;
    }

    & .content .lang {
      @apply capitalize text-gray-100 font-medium text-base;
    }

    & .content .year {
      @apply text-gray-100 font-medium text-base;
    }
  }
}

@utility text-gradient {
  @apply bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] bg-clip-text text-transparent;
}

@utility fancy-text {
  -webkit-text-stroke: 5px rgba(206, 206, 251, 0.5);
  font-size: 190px;
  font-family: "Bebas Neue", sans-serif;
}

@utility hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
```

</details>

<details>
<summary><code>components/Spinner.jsx</code></summary>

```jsx
import React from "react";

const Spinner = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
export default Spinner;
```

</details>

## 🔐 Adding Clerk Authentication

### **Step 1: Install Clerk Dependencies**

```bash
npm install @clerk/clerk-react
```

### **Step 2: Get Your Clerk API Keys**

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application
3. Copy your `Publishable Key` from the API Keys section
4. Add to `.env.local`:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
```

### **Step 3: Wrap Your App with ClerkProvider**

Update `main.jsx`:

```jsx
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.jsx";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
);
```

### **Step 4: Add Sign-In/Sign-Out UI**

Update `App.jsx` header:

```jsx
import { UserButton, SignInButton, useUser } from "@clerk/clerk-react";

export const App = () => {
  const { isSignedIn } = useUser();

  return (
    <header>
      {/* existing header content */}
      <div className="auth-buttons">
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignInButton mode="modal" />
        )}
      </div>
    </header>
  );
};
```

---

## 🎬 Adding Movie Detail Page

### **Step 1: Install React Router**

```bash
npm install react-router-dom
```

### **Step 2: Create MovieDetails Component**

Create `src/components/MovieDetails.jsx`:

```jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/movie/${movieId}?language=en-US`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
          },
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-details">
      <button onClick={() => navigate("/")}>← Back</button>

      <div className="details-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="details-content">
          <h1>{movie.title}</h1>
          <p className="tagline">{movie.tagline}</p>

          <div className="info">
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Rating:</strong> {movie.vote_average.toFixed(1)}/10
            </p>
            <p>
              <strong>Runtime:</strong> {movie.runtime} minutes
            </p>
          </div>

          <div className="genres">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genre-tag">
                {genre.name}
              </span>
            ))}
          </div>

          <h3>Overview</h3>
          <p className="overview">{movie.overview}</p>

          <p>
            <strong>Budget:</strong> ${movie.budget.toLocaleString()}
          </p>
          <p>
            <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
```

### **Step 3: Update App.jsx with Router**

Wrap your App with BrowserRouter and define routes:

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}
```

### **Step 4: Make MovieCard Clickable**

Update `MovieCard.jsx`:

```jsx
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/movie/${movie.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
      />
      {/* rest of the card */}
    </div>
  );
};

export default MovieCard;
```

### **Step 5: Add CSS for Movie Details**

Add to `index.css`:

```css
.movie-details {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.movie-details button {
  background: #6366f1;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  margin-bottom: 2rem;
}

.details-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
}

.details-content h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.tagline {
  font-style: italic;
  color: #9ca4ab;
  margin-bottom: 2rem;
}

.info {
  display: flex;
  gap: 2rem;
  margin: 1.5rem 0;
}

.genres {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1.5rem 0;
}

.genre-tag {
  background: #6366f1;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
}

.overview {
  line-height: 1.6;
  color: #9ca4ab;
  margin: 1rem 0;
}
```

---

## <a name="links">🔗 Assets</a>

Assets and snippets used in the project can be found in the **[video kit](https://jsm.dev/react25-kit)**.

<a href="https://jsm.dev/react25-kit" target="_blank">
  <img src="public/readme/videokit.png" alt="Video Kit Banner">
</a>

## <a name="more">🚀 More</a>

**Advance your skills with Next.js Pro Course**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with
detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://jsm.dev/react25-jsmpro" target="_blank">
  <img src="public/readme/jsmpro.png" alt="Project Banner">
</a>
