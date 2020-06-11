const natural = require("natural");
const fs = require("fs");

require("yargs")
  .scriptName("natural-classifier")
  .usage("$0 <cmd> [args]")
  .command("train bayes <datafile> <outputfile>", "train classifier and output it to file", (yargs) => {
    yargs.positional("datafile", {
      type: "string",
      default: "trainingData.json",
      describe: "the JSON file that contains training data"
    });
    yargs.positional("outputfile", {
      type: "string",
      default: "classifier.json",
      describe: "the file to output classifier to"
    });
  }, function (argv) {
    console.log("Starting initialization")
    var classifer = new natural.BayesClassifier();
    var training = JSON.parse(fs.readFileSync(argv.datafile))
    if (!training.documents) {
      throw new Error("No documents field in training data file!");
    }
    console.log("Commencing training")
    for (const i in training.documents) {
      if (!training.documents[i].data || !training.documents[i].class) {
        throw new Error("Document does not contain data or class field!");
      }
      classifer.addDocument(training.documents[i].data, training.documents[i].class);
    }
    classifer.train();
    classifer.save(argv.outputfile, function (err, classifer) {
      if (err) {
        console.error(err);
      }
      console.log("Classifier saved!")
    })
  })
  .help()
  .argv;
