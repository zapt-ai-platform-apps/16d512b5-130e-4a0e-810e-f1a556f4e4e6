# Business Grant Finder

Welcome to the Business Grant Finder! This app helps UK business owners find potential sources of funding that may support their business.

## User Journeys

1. [Introduction](docs/journeys/introduction.md) - Understand what the app does.
2. [Provide Business Information](docs/journeys/provide-business-information.md) - Answer questions about your business.
3. [View Grant Results](docs/journeys/view-grant-results.md) - See a list of grants suitable for your business.
4. [Export, Share, and Print Results](docs/journeys/export-and-share-results.md) - Export results to MS Word, share, or print the full grant information.

---

## External APIs Used

- **Perplexity AI**: Used to generate a list of grants based on user input.
- **Sentry**: Used for error logging and monitoring on both frontend and backend.
- **Umami Analytics**: Used to track website analytics.

---

## Important Information

- This is a mobile-first application. For the best experience, use it on a mobile device.
- All data processing happens via secure backend services.
- The app is free to use.

---

## Environment Variables

The following environment variables need to be set (add them to a `.env` file in the root directory):

- `VITE_PUBLIC_PERPLEXITY_API_KEY`: Your Perplexity AI API key.
- `VITE_PUBLIC_SENTRY_DSN`: Your Sentry DSN for error logging on frontend.
- `VITE_PUBLIC_APP_ENV`: The current environment ('development' or 'production').
- `PROJECT_ID`: Your Sentry project ID for backend error logging.
- `VITE_PUBLIC_APP_ID`: Your application ID.
- `VITE_PUBLIC_UMAMI_WEBSITE_ID`: Your Umami website ID for analytics.

---