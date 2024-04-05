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
}

module.exports = ProblemService;
