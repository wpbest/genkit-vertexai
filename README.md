# GenkitVertexai

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.10.

# genkit-vertexai
genkit-vertexai using Genkit with a sample flow

```bash
firebase init genkit
```
Documentation (Gemini says it's incorrect)
https://genkit.dev/docs/frameworks/angular/

https://youtu.be/TGHua_RtUjs

Install the core Genkit library:
```bash
npm install genkit
```

Install Vertex AI model plugin.
```bash
npm install @genkit-ai/vertexai
```

Install the Genkit Express library:
```bash
npm install @genkit-ai/express
```

Install the Genkit CLI. The tsx tool is also recommended as a development dependency, as it makes testing your code more convenient. 

```bash
npm install genkit-cli
npm install --save-dev tsx
```

npm install -D @genkit-ai/cli
```bash
npm run build
```

```bash
npm install @genkit-ai/google-genai
```

Run Genkit
```bash
genkit flow:run menuSuggestionFlow '"banana"' -a {}
```

ng new genkit-vertexai --routing --style scss --skip-install --skip-git --strict --skip-tests

## Add Angular Firebase
```bash
ng add @angular/fire
```

## Create a Firebase Functions Secretes (Sample API Key)
```bash
echo "AIzaSyDNOwL8XJPuqtJS6Gj1h_Bs-RgeUUaXkH4" | firebase functions:secrets:set GEMINI_API_KEY --data-file=- --project genkit-vertexai
```
npm install --save firebase-functions@latest

# Deploy Firebase Fuctions
firebase deploy --only functions
## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
