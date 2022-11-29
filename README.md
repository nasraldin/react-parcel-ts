# Frontend

Frontend project build with [React](https://reactjs.org).

</br>

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

</br>

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t frontend .`
1. Run your container: `docker run -p 3000:3000 frontend`.

or use docker compose
`docker compose up --build -d --force-recreate`

You can view your images created with `docker images`.

</br>

## Test and Deploy

Deploy to vercel.com
https://frontend-ajrly.vercel.app
https://frontend-dun-psi.vercel.app

https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html
