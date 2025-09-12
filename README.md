# Netflix GPT

- create-react-app
- Configured tailwind css
- Header
- Routing of App
- Login / Sign Up Form
- Form Validation
- useRef hook()
- Firebase Setup
- Deploying App to Prod (using Firebase)
- Create Sign up User Account (in Firebase)
- Implement Sign In User
- Created Redux Store with User Slice
- Implemented Sign out
- Update Profile
- BUG FIX: Restricting redirection to Login and Browse on basis of auth
- Unsubscribed to the onAuthStateChanged callback
- FIX: Assigning Random Profile Icons during signups
- Register for TMDB API, get Access Token
- Fetch Movies from Now Playing List in Documentation (API Reference)
- Custom Hook for fetching Now Playing Movies
- Created Movie Slice and updated it with Now Playing Movie
- Planned and Designed MainContainer
- Fetch Trailer from Movies (Video) List in Documentation (API Reference)
- Custom Hook for fetching Trailer
- Updated Movie Slice with Trailer
- Embedded the Trailer (YouTube) with autoplay and mute
- Planned and Designed SecondaryContainer
- Implemented Movie List and Movie Cards
- TMDB Image CDN for Poster
- GPT Search Page
- Created GPT Slice and implemented toggling of GPT Search page
- GPT Search Bar and Button
- Created AppConfig Slice in Redux to store app based features (like multi-ligual, theme, etc)
- FEATURE: Added Multi-lingual feature in GPT Search Bar
- Configured OPEN AI Keys
- Implemented Searching of Movies through OpenAI (3.5-gpt-turbo)
- Implemented Memoization --> Making API calls only when Redux is empty

# Features

1. Login/SignUp Page

- Sign In / Sign Up Form
  - Redirect to Browse Page

2. Browse

- Header
- Main Movie
  - Backgound Trailer
  - Movie Title & Description
- Movie Suggestions
  - Movie List x N rows

3. NetflixGPT

- Search Bar
  - Movie Suggestions
