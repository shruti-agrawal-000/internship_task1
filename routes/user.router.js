const router = require("express").Router();
const { checkToken } = require("../middleware/auth");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser,
  deactivateUser
} = require("../controllers/user.controller");
router.get("/", checkToken, getUsers);
router.post("/",  createUser);
router.get("/:id", checkToken,getUserByUserId);
router.post("/login", login);
router.patch("/",  checkToken,updateUsers);
router.patch("/deactivateUser",deactivateUser)
router.delete("/", checkToken, deleteUser);

module.exports = router;