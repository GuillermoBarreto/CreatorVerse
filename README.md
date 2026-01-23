CreatorVerse is a React app where you can discover, organize, and manage your favorite content creators. From Twitch streamers to YouTube channels or TikTok stars, CreatorVerse lets you add, view, edit, and delete creators with ease. The app uses Supabase as the backend database and supports full CRUD functionality.

Features

View all content creators on the homepage

See details for each creator on their individual page

Add a new content creator with name, URL, description, and optional image

Edit an existing creator’s information

Delete a creator you no longer want in your list

(Optional stretch) Styled with Picocss for a clean and minimal design

<!-- Installation

Clone the repo:

git clone https://github.com/GuillermoBarreto/CreatorVerse.git
cd CreatorVerse


Install dependencies:

npm install


Add your Supabase credentials in src/client.js:

const URL = 'YOUR_PROJECT_URL'
const API_KEY = 'YOUR_ANON_KEY'


Run the app locally:

npm run dev -->


Open the URL provided by Vite in your browser (usually http://localhost:5173)

Usage

Add a Creator: Click “Add Creator”, fill the form, and submit.

View Creator: Click “View” on any creator card.

Edit Creator: Click “Edit” to change details.

Delete Creator: Click “Delete” to remove a creator.