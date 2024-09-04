# Pinia

## First installation

### Build docker image

```bash
docker build -t pinia .
```

### Install dependencies

```bash
docker run --rm -it -v $(pwd):/app pinia npm i
```

## Development

### Start the dev server

```bash
docker run --rm -it -v $(pwd):/app -p 8080:8080 pinia npm run dev
```

### Testing

```bash
docker run --rm -it -v $(pwd):/app pinia npm run test:unit
```
