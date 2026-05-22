# Beat Store Redirect

This repository is configured to redirect all incoming traffic to the Traktrain beats page at **[https://traktrain.com/troo](https://traktrain.com/troo)**.

## How it works

1. **Vercel Edge Redirect (`vercel.json`)**:
   Incoming requests are matched and redirected instantly at Vercel's edge network, ensuring the fastest redirection possible.
2. **Client-Side Fallback (`index.html`)**:
   If the edge redirect is bypassed or when run locally, a `<meta http-equiv="refresh">` and a JavaScript script will redirect the browser to the destination URL.

## Deployment

Simply commit these changes and push to Vercel:
```bash
git add .
git commit -m "Configure simple Vercel redirect to Traktrain"
git push
```
