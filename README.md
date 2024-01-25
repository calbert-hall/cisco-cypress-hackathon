# Cisco Meraki - Applitools Hackathon: Testing User Journeys

### The Problem
Users of Cisco products have plenty of journeys through their products, with many potential points of functional failure or discrepencies in the UI across browsers and viewport sizes. 
With Cypress + Applitools, you can ensure these workflows are visually perfect at every stage in the development life cycle!

### Hackathon Parameters
1. If you haven't already done so, clone the repo and ensure that you can run the sample Applitools test script. See tutorial info below for details. Don't forget to set your API key in the `applitools.config.js` file!
2. Choose Two user journeys that have at least three functional steps each. 
3. Change the App Name to your App name in `hackathon.cy.js`. 
4. Write and execute your first user journey within the first `it` in `hackathon.cy.js`. 
5. Look for instances of dynamic content in this user journey. Create coded layout regions from the test script, or include Layout regions within the Applitools dashboard UI. 
6. Add two additional browsers/chrome emulated devices for your test to render on in `applitools.config.js`. 
7. Write your other 3+ step user journey in the next eyes test!
8. Time permitting, continue to run your tests and add regions to further stabilize them.  

#### Example User Journey: <br>
 [Cisco Login](https://id.cisco.com/) Workflow starting from [Cisco.com](https://www.cisco.com/). Each step of the process will have its own `cy.eyesCheckWindow` call, resulting in a 3+ step process in the user workflow. The code will go to cisco.com, take a capture, click the login button, take a capture, fill in the username + password and click login, then capture the post-login screen. Alternatily you could write this as a test to ensure the login screen failure appears upon false credentials. 

### Additional Resources:
[Eyes-Cypress Documentation](https://applitools.com/docs/api-ref/sdk-api/cypress/)
<br>
[Eyes-Cypress Browser/Device configuration](https://applitools.com/docs/api-ref/sdk-api/cypress/browserconfiguration)

<i>Below are the instructions for the Eyes-Cypress Quickstart project. You can follow these directions to ensure that you can run Applitools tests, from there create your own according to the hackathon constraints above! </i>

### Applitools Example: Cypress in JavaScript

This is the example project for the [Cypress JavaScript tutorial](https://applitools.com/tutorials/quickstart/web/cypress).
It shows how to start automating visual tests
with [Applitools Eyes](https://applitools.com/platform/eyes/)
and [Cypress](https://www.cypress.io/) in JavaScript.

It uses:

* [JavaScript](https://www.javascript.com/) as the programming language
* [Cypress](https://www.cypress.io/) for browser automation
* [Google Chrome](https://www.google.com/chrome/downloads/) as the local browser for testing
* [npm](https://www.npmjs.com/) for dependency management
* [Applitools Eyes](https://applitools.com/platform/eyes/) for visual testing
* [Applitools Ultrafast Grid](https://applitools.com/platform/ultrafast-grid/) for cross-browser execution

To run this example project, you'll need:

1. An [Applitools account](https://auth.applitools.com/users/register), which you can register for free
2. [Node.js](https://nodejs.org/en/download/) version 16 or higher
3. A good JavaScript editor like [Visual Studio Code](https://code.visualstudio.com/docs/languages/javascript)
4. Up-to-date versions of the following browsers:
   * [Google Chrome](https://www.google.com/chrome/)
   * [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
   * [Microsoft Edge](https://www.microsoft.com/en-us/edge)

To install project dependencies and set up Applitools Eyes, run:

```
npm install
npx eyes-setup
```

The Applitools config file is [`applitools.config.js`](applitools.config.js).
The main test spec is [`acme-bank.spec.js`](cypress/integration/acme-bank.spec.js).

To execute tests, set the `APPLITOOLS_API_KEY` environment variable
to your [account's API key](https://applitools.com/tutorials/guides/getting-started/registering-an-account).

Then, to open the Cypress window for launching tests, run:

```
npx cypress open
```

If you want to run tests directly from the command line, run this instead:

```
npx cypress run
```

**For full instructions on running this project, take our
[Cypress JavaScript tutorial](https://applitools.com/tutorials/quickstart/web/cypress)!**
