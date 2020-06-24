# natural-classifier
A command line tool to train natural classifiers in NodeJS from JSON data.
The natural language processing NodeJS library uses classifiers that you must call methods on to add training data. This seems needless because if you get more data, you are required to change your code. This is a simple command line tool that can read JSON files and train and export a classifier from it.

## Dependencies
This project was built with:
* NodeJS
* yargs
* natural
* fs

## Installation

You can install this repository and use ```npm publish -g``` in it, or you can download it from the Github npm registry with this:
```
> npm install @shadowtime2000/natural-classifier
```

## Usage
Your training data must be structered like this:
```
{
  "documents": [
    {"data": "gold", "class": "sell"},
    {"data": "silver", "class": "buy"}
  ]
}
```
To train a model from it:
```
> natural-classify <training data file name> <export model file name>
```
