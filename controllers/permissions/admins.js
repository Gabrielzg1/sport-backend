const Admin = require("../../models/permissions/admin");

class AdminController {
  async index(req, res) {
    try {
      const admins = await Admin.find();
      return res.json(admins).status(200);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.body;
      const admin = await Admin.findById(id);
      if (!admin) return res.status(404).json({ msg: "Admin not found" });
      return res.json(admin);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async create(req, res) {
    try {
      const { username, email, password } = req.body;
      const newAdmin = await Admin.create({
        username,
        email,
        password,
      });

      return res.status(201).json(newAdmin);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });
      if (!admin)
        return res.json({ msg: "Email ou senha incorreto" }).status(404);

      if (admin.password !== password)
        return res.json({ msg: "Email ou senha incorreto" }).status(404);

      return res.json({ msg: true, id: admin.id }).status(200);
    } catch (error) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}
module.exports = new AdminController();
