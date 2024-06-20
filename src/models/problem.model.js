const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title Cannot Be Empty"],
  },
  description: {
    type: String,
    required: [true, "Description Cannot Be Empty"],
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: [true, "Difficulty Cannot Be Empty"],
  },
  testcases: [
    {
      input: {
        type: String,
        required: true,
      },
      output: {
        type: String,
        required: true,
      },
    },
  ],
  codeStubs: [
    {
      language: {
        type: String,
        enum: ["CPP", "JAVA", "PYTHON", "NODEJS"],
        required: true,
      },
      startSnippet: {
        type: String,
      },
      endSnippet: {
        type: String,
      },
      userSnippet: {
        type: String,
      },
    },
  ],
  editorial: {
    type: String,
  },
});

const Problem = mongoose.model("Problem", problemSchema);

module.exports = Problem;
