const { StatusCodes } = require("http-status-codes");
const { ProblemService } = require("../services/index");
const { ProblemRepository } = require("../repositories/index");

function pingProblemController(req, res) {
  return res.status(200).json({ message: "Ping Problem Controller" });
}

const problemService = new ProblemService(new ProblemRepository());

async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully Created A New Problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully Fetched A Problem",
      error: {},
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully Fetched All Problems",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req, res, next) {
  try {
    const deletedProblem = await problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully Deleted A Problem",
      error: {},
      data: deletedProblem,
    });
  } catch (error) {
    next(error);
  }
}

async function updateProblem(req, res, next) {
  try {
    const updatedProblem = await problemService.updateProblem(
      req.params.id,
      req.body
    );
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully Updated A Problem",
      error: {},
      data: updatedProblem,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
