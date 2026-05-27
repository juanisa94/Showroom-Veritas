# Agents

## Cursor Cloud specific instructions

This is a static React SPA (no backend, no database, no external services required).

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (serves at http://localhost:5173) |
| Lint | `npm run lint` |
| Build | `npm run build` |

### Notes

- The dev server (Vite) starts nearly instantly (~200ms) and supports HMR.
- There are no automated test suites (no `test` script in `package.json`). Validation is lint + build + manual browser testing.
- The app has no authentication, no API keys, and no environment variables required.
- Product catalog data is currently placeholder items defined in source code (`src/App.jsx`).
- Contact phone numbers follow a strict bimodal rule documented in `README.md` — do not interchange them.
