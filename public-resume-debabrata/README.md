
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
docker build -f public-resume/Dockerfile -t magic-portfolio:prod .
```

**2. Run container**
```bash
docker run --rm -p 3000:3000 magic-portfolio:prod
```


Open `http://localhost:3000`.


