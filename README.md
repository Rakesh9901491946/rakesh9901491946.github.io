# Rakesh Portfolio

Static bilingual portfolio with recruiter-facing AI assistant.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push this folder to `Rakesh9901491946/portfolio` on `main`.
2. In GitHub: `Settings -> Pages -> Deploy from branch`.
3. Select `main` and `/ (root)`.
4. Replace `CNAME` with your real domain.
5. Configure DNS:
   - `A` records for apex to GitHub Pages IPs.
   - `CNAME` for `www` to `Rakesh9901491946.github.io`.
6. Enable HTTPS in Pages settings after DNS propagates.

## Content updates

- Project/chatbot content: `assets/app.js`
- Styling: `assets/style.css`
- Images: `assets/images`
