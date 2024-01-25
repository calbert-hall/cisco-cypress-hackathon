module.exports = {
    // Specify the number of visual checkpoints Applitools will perform in parallel.
    // Warning: If you have a free account, then concurrency will be limited to 1.
    testConcurrency: 5,

    //TODO Uncomment the below line and paste in your API key as an alternative to using an environment variable
    // apiKey: '',

    batchName: 'Cypress Quickstart',
    // set the to true to debug eyes issues
    showLogs: false,

    // Select the browsers and devices to run your tests on via the Ultrafast Grid
    browser: [
        {width: 800, height: 600, name: 'chrome'},
        {width: 1600, height: 1200, name: 'firefox'},
        {width: 1024, height: 768, name: 'safari'}
    ]
}