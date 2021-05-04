class UserController {
  async list(req, res) {
    return res.json({ message: 'success' });
  }
}

export default new UserController();
