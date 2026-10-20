# Borra Monika — Portfolio

A responsive React + Vite portfolio prepared using the resume details shared in chat.

## Run locally (Windows / VS Code)

1. Install Node.js LTS from https://nodejs.org/ if you do not already have it.
2. Extract this ZIP file.
3. Open the extracted `monika-portfolio` folder in VS Code.
4. In VS Code, select **Terminal → New Terminal**.
5. Run:

   ```bash
   npm install
   npm run dev
   ```

6. Open the local URL printed in the terminal (usually http://localhost:5173).

## Personalize before publishing

Open `src/App.jsx`:
- Confirm the education, training, internship and project descriptions.
- Replace each project's GitHub profile link with its exact repository URL, once verified.
- Add a professional email to the `EMAIL` constant in `src/App.jsx`.

If you want a resume download button, place your final resume PDF in `public` as `resume.pdf` and add a link to `/resume.pdf`.

## Deploy to Vercel

1. Push the project folder to a new GitHub repository.
2. Sign in to https://vercel.com using GitHub.
3. Choose **Add New → Project** and import your portfolio repository.
4. Keep the detected Vite settings and click **Deploy**.

Build command: `npm run build`
Output directory: `dist`

## Note about GitHub project links

The current project cards link to your GitHub profile rather than claiming unverified individual repository URLs. Replace them with direct repository links after checking which public repositories correspond to each project.
