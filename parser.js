var parser_handler = function(compileStep) {
    console.log(compileStep.inputPath);
};

Plugin.registerSourceHandler("polymer.parse.html", parser_handler);
