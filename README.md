# Music App Frontend (Next.js)

Frontend for the Music App project built with **Next.js**.
This app consumes the Django backend API.

---

## Tech Stack
- Next.js
- React
- TypeScript 
- Tailwind CSS + shadcn/ui 

---

## Setup (Local Development)

Follow these steps to run the project locally.

1. Clone the repo

```bash
git clone https://github.com/itskhashman/Music-frontend.git
cd Music-frontend
```


2. Install dependencies
```bash
npm install
```

3. Configure environment variables

Create a `.env` file in the project root.

`.env` file :

```Example:

NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
NEXT_PUBLIC_GRAPHQL_ENDPOINT=/graphql/
```

4) Run the app

```bash
npm run dev
```
App will run on:
```bash
http://localhost:3000/
```


