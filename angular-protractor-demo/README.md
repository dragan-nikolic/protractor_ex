# End-to-End Tests with Protractor and Angular

This is a simple Pastebin Application built using Angular. This application serves as an introduction to testing using Protractor.

For more info refer to https://code.tutsplus.com/tutorials/getting-started-with-end-to-end-testing-in-angular-using-protractor--cms-29318.

## How to get started?

If you want to go through the tutorial from the beginning switch to the 'starter' branch.
If you want to continue working through the tutorial switch to the 'work' branch.
If you want to explore final solution switch to the 'final' branch.

## Running the Application
Once you are on the branch of your choice, head to a terminal and run `npm install`.

If vulnerabilities are found try to resolve them usinf `npm audit fix`.

Now run `npm run ng serve` (or `./node_modules/.bin/ng serve`) for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running Protractor Tests

Open another terminal and run `npm run ng e2e` (or `./node_modules/.bin/ng e2e`) to execute the tests on Chrome. For more configurations, see protractor.conf.js
