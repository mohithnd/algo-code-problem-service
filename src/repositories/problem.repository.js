const { Problem } = require("../models/index");
const NotFound = require("../errors/notFound.error");
// const logger = require("../config/logger.config");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        difficulty: problemData.difficulty ? problemData.difficulty : "easy",
        testcases: problemData.testcases ? problemData.testcases : [],
        codeStubs: problemData.codeStubs ? problemData.codeStubs : [],
        editorial: problemData.editorial ? problemData.editorial : "",
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFound("Problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const deletedProblem = await Problem.findByIdAndDelete(id);
      if (!deletedProblem) {
        // logger.error(`Problem With ID: ${id} Not Found In The DB`);
        throw new NotFound("Problem", id);
      }
      return deletedProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
