const { markdownSanitizer } = require("../utils/index");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    problemData.description = markdownSanitizer(problemData.description);
    const problem = await this.problemRepository.createProblem(problemData);
    return problem;
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }

  async getProblem(id) {
    const problem = await this.problemRepository.getProblem(id);
    return problem;
  }

  async deleteProblem(id) {
    const problem = await this.problemRepository.deleteProblem(id);
    return problem;
  }

  async updateProblem(id, data) {
    await this.problemRepository.updateProblem(id, data);
    const updatedProblem = await this.problemRepository.getProblem(id);
    return updatedProblem;
  }
}

module.exports = ProblemService;
