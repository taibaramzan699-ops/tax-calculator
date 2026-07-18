# Tax Calculator

A simple web-based tax calculator built with HTML, CSS, and JavaScript, containerized with Docker and deployed via a Tekton CI/CD pipeline on IBM Cloud.

## Files

- `index.html`, `style.css`, `script.js`, `taxCalculator.js`, `favicon.ico` — the web app
- `spec/taxCalculator.spec.js` — Jasmine unit tests
- `Dockerfile` — container definition (nginx-based)
- `tasks.yaml` — Tekton task definitions (npm-install, jasmine-test)
- `pipeline.yaml` — Tekton pipeline chaining install → test → build
- `run.yaml` — PipelineRun to trigger the pipeline

## Run tests locally

```bash
npm install
npx jasmine
```

## Build and run with Docker

```bash
docker build -t tax-calculator .
docker run -d -p 8080:80 --name tax-calculator tax-calculator
```

Visit `http://localhost:8080`.
