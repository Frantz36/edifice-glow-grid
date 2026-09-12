# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Prévisualisation Docker (flux de production)

L'image exécute le même build que Vercel (`npm run build`), puis lance la
prévisualisation recommandée par Nitro/Vite sur le port 3000.

```sh
docker build -t 2hnour-local .
docker run --rm -p 3000:3000 2hnour-local
```

Ouvrez ensuite `http://localhost:3000`. Les variables `VITE_*` sont intégrées
au moment du build : si l'application en utilise, déclarez-les explicitement
avec `ARG` et `ENV` dans le `Dockerfile`, puis renseignez-les également dans les
variables d'environnement du projet Vercel.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
