🪪 Profile Card — HNG-13 Internship Task stage-0

A small, accessible, and responsive Profile Card built using semantic HTML, modern CSS, and vanilla JavaScript.
This task fulfills the HNG Internship requirement for creating a profile component that meets specific accessibility and testing standards.

📋 Features

✅ Fully semantic HTML (article, figure, section, nav, etc.)

✅ All elements include the required data-testid attributes for automated testing

✅ Responsive design using Flexbox — stacks on mobile, side-by-side on desktop

✅ Dynamic current time displayed in milliseconds (Date.now())

✅ Avatar image with alt text and lazy loading for performance

✅ Keyboard-accessible and focus-visible social links

✅ Clean, aesthetic layout with dark theme and modern typography

🧱 Project Structure
project/
│
├── index.html      # Main HTML file (semantic + data-testid)
├── style.css       # Responsive styling and layout
└── script.js       # JavaScript for live time updates

⚙️ Technologies Used

HTML5 — Semantic and accessible markup

CSS3 — Flexbox layout, modern styling, responsiveness

Vanilla JavaScript — For dynamic time updates

No frameworks or libraries — built entirely from scratch

🧩 Accessibility & Testing

Each visible element includes a unique data-testid for stable automated tests:

Element	data-testid
Root container	test-profile-card
Name	test-user-name
Bio	test-user-bio
Current time	test-user-time
Avatar image	test-user-avatar
Social links container	test-user-social-links
Individual social links	test-user-social-<network>
Hobbies list	test-user-hobbies
Dislikes list	test-user-dislikes
🧠 Implementation Details

The current time updates automatically every second using:

```
setInterval(() => {
  document.getElementById("time").textContent = Date.now();
}, 1000);
```


Avatar supports both local and external image URLs.

Social links open in a new tab using target="_blank" and rel="noopener noreferrer".

Responsive behavior:

On small screens → stacked vertical layout

On large screens → avatar on the left, details on the right

💅 Preview

<img width="1365" height="624" alt="image" src="https://github.com/user-attachments/assets/2830cf24-b2d4-4e2c-91f0-f2a0a812292c" />


🚀 How to Run

Clone or download this repository.

Open the folder in VS Code or any text editor.

Launch a local server (e.g. using Live Server extension).

Open index.html in your browser.

👤 Author

Omorugie Oyibotha
