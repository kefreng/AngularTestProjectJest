# AngularTestProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Install Jest (Angular 8-10) Tutorial

Video guide: https://www.youtube.com/watch?v=Dt8RtykEglo

## Introduction:

By working through steps 1-7, you will be able to set up Jest in any Angular v8-v10 project. Step 8 is an optional clean-up step. If you would like to install a Jest/Karma hybrid, you can also leave `karma.conf.js` in, and rename `test.ts` to something like `karmaTest.ts`.

## Steps:

1. Remove karma & jasmine stuff with
   `npm remove karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter @types/jasmine @types/jasminewd2 jasmine-core jasmine-spec-reporter`

2. Install `npm install --save-dev jest jest-preset-angular @types/jest`

3. Create `setup-jest.ts` to project root and add the following:

```ts
import "jest-preset-angular";
```

4. Create `jest.config.js` in project root and add the following:

```ts
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  transformIgnorePatterns: [
    "node_modules/(?!@ngrx|ngx-socket-io)", // List any packages here that error
  ],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/cypress/",
    "<rootDir>/src/test.ts",
  ],
};
```

5. Add the following `types` array to `compilerOptions` in `tsconfig.json`:

```json
    "compilerOptions": {
        "types": [
            "jest"
        ]
    }
```

6. Replace `jasmine` with `jest` in `types` array of `compilerOptions` in `tsconfig.spec.json`:

```json
"compilerOptions": {
    "types": [
        "jest",
        "node"
    ],
}
```

7. Add jest scripts to `package.json`:

```json
"scripts": {
    "test": "jest",
    "test-watch": "jest --watch"
}
```

8. _(Optional)_ Remove `karma.conf.js` and `test.ts`
   `rm ./karma.conf.js ./src/test.ts`

## RUN TEST

npm test
