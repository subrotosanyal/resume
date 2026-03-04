
### Local development

**Run the dev server**
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Production run (without Docker)

```bash
npm run build
npm run start
```

### Run with Docker (production mode)

The repository includes a production `Dockerfile`.

**1. Build image**
```bash
docker build -t magic-portfolio:prod .
```

**2. Run container**
```bash
docker run --rm -p 3000:3000 --env-file .env magic-portfolio:prod
```

If you do not have a `.env` file, you can omit `--env-file .env`.

Open `http://localhost:3000`.



