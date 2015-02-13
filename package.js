Package.describe({
    git: "https://github.com/HedCET/polymer-meteor.git",
    name: "hedcet:polymer-meteor",
    summary: "use polymer like blaze",
    version: "15.2.13"
});

Package.onUse(function(api) {
    api.versionsFrom("METEOR@1.0");
});

Package.registerBuildPlugin({
    name: "polymer-meteor-parser",
    use: ["http@1.0.8", "underscore@1.0.2"],
    sources: [
        "parser.js"
    ],
    // npmDependencies: {
    //     "mime": "1.2.11",
    //     "mkdirp": "0.5.0",
    //     "node-echo": "0.1.1",
    //     "rimraf": "2.2.8"
    // }
});
