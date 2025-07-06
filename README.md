Project Title
The Blog is a modern, responsive blogging platform built to deliver a seamless reading and content discovery experience. It allows users to explore categorized posts, read detailed blog articles, and engage with rich UI animations and transitions. The platform is optimized for performance, accessibility, and responsiveness across all devices.

## 🚀 Features

- ✅ **Home Page** with featured and recent blog sections
- ✅ **Blog Details Page** with structured content (titles, paragraphs, images, styled spans, lists)
- ✅ **Dynamic Routing** using React Router DOM
- ✅ **Animated Page Transitions** using Framer Motion
- ✅ **Scroll to Top Button** with custom bird animation
- ✅ **Dark Mode Toggle** with persistence
- ✅ **Floating Action Tabs** for "Call Us", "Subscribe", and "FAQ"
- ✅ **Responsive Design** across all screen sizes (mobile, tablet, desktop)
- ✅ **Redux Toolkit** for managing blog state, filters, pagination, and loading states
- ✅ **Newsletter Section** integrated with local/global state
- ✅ **Mouse Hover Effects and Scroll-based Animations**
- ✅ **Custom Scrollbar Styles** using Tailwind and CSS
- ✅ **Structured JSON-Based Content** for easy blog creation and update

## 🛠️ Technologies Used

- **React** (with Functional Components)
- **TypeScript** (for static typing)
- **Redux Toolkit** (for state management)
- **Tailwind CSS** (for utility-first responsive design)
- **Framer Motion** (for smooth UI animations)
- **React Router DOM** (for navigation)
- **clsx** (for conditional classNames)
- **React Icons** (for scalable and accessible icons)


## 📁 Project Structure
src/
│
├── assets/ # Static images and icons
├── components/ # Reusable UI components (BlogCard, ScrollToTop, etc.)
├── pages/ # Route-based page components
├── redux/ # Redux slices and store setup
├── types/ # TypeScript type definitions
├── utils/ # Helper functions
├── App.tsx # Main component
├── main.tsx # Entry point
└── index.css # Global styles


## 🧩 Components

Here are some of the custom and reusable components we built:

### 📚 BlogCard
- Displays the blog summary with image, title, date, author, and tag labels.
- Props to customize layout and styles.

### 🔄 ScrollToTop
- Automatically appears after scrolling down.
- Click scrolls smoothly to top using `window.scrollTo`.

### 🧠 ParagraphRenderer
- Handles rendering paragraphs with conditional logic:
  - Supports text with bold or underline span styling
  - Renders lists and structured content dynamically

### 🔧 FloatingTabs
- Interactive tabs pinned to the side of the screen
- Fully responsive with hover and animation effects
- Uses icons from `react-icons`

---

## 🗂️ Redux State Management

🗂️ Redux State Management
We use Redux Toolkit to manage all blog-related state, such as pagination, post details, and recent posts.

📦 blogSlice.ts – Blog State Management
This slice handles all Redux state related to blog posts, including fetching, filtering, and pagination. Here's a breakdown of the managed state and reducers:

🧠 State Structure
    interface PostsState {
      blogs: Post[];             // All blog posts (from static or fetched data)
      recentPosts: Post[];       // Latest or related blog posts
      currentPosts: Post[];      // Currently paginated posts (used in home or blog listing)
      currentPage: number;       // Current page number for pagination
      totalPages: number;        // Calculated total number of pages
      selectedPost: Post | null; // Currently selected blog post for details page
    }

🔧 Reducers
fetchAllBlogs({ page, itemsPerPage })

Reverses the blog array to show the latest posts first.

Extracts a slice of posts based on the current pagination.

Updates currentPosts and currentPage.

fetchRecentBlogs({ len, id })

Retrieves the latest len number of posts.

If an id is provided (e.g., from blog details), it excludes that specific post (for showing “Related Posts”).

fetchBlogDetails({ id })

Finds and sets the blog post by its id to selectedPost.


🌓 modeSlice.ts – Dark Mode Toggle
This slice manages the application's theme mode (dark or light) and synchronizes it with the DOM and localStorage.

🧠 State Structure
ts
Copy
Edit
interface ModeInterface {
  isDark: boolean; // true if dark mode is enabled
}
🧩 Initialization Logic
isDark is initialized by:

Checking if the user has a saved theme in localStorage ("dark" or "light").

If not set, it falls back to the user's system preference using window.matchMedia('(prefers-color-scheme: dark)').

🔧 Reducers
toggleDarkMode()

Flips the current theme mode between light and dark.

Applies or removes the dark class from the root <html> element.

Saves the updated theme to localStorage.

setDarkMode(payload: boolean)

Explicitly sets the theme based on a boolean value.

Updates DOM and persists the preference to localStorage.


🎞️ Animations & Interactions
We used Framer Motion and Tailwind transitions for:
Page entrance/exit (AnimatePresence, motion.div)
Hover effects on buttons and cards
Smooth fade-in and slide-up on scroll
Typing effect for the hero title
Animated scroll-to-top rocket


📱 Responsive Design
All components are built mobile-first using Tailwind’s responsive utilities:
sm, md, lg, xl breakpoints
Flex and Grid-based layouts
Buttons and cards resize and reposition on different screens


🌗 Dark Mode Support
Toggle between light and dark themes
Uses Tailwind’s dark: variants
State managed via Redux and saved in localStorage
Applied globally via class on <body>

🔮 Future Enhancements
✍️ Add a CMS backend (e.g., Strapi, Contentful, Sanity)
🧑‍💻 Authentication for authors (login/signup)
💬 Comments section per blog post
🧠 Search functionality across all posts
📈 Analytics dashboard for admin
🌐 Multi-language support





👤 Devloper
Name: Mustafa Rashid Abbas
Email: mustafa.rashid.abbas@gmail.com
LinkedIn: linkedin.com/in/mustafarashid93/
Phone: +964 771 609 1119