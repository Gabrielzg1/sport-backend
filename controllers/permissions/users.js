const User = require("../../models/permissions/user");

class UsersController {
  async index(req, res) {
    try {
      const users = await User.find();
      return res.json(users).status(200);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) return res.status.User(404).json();
      return res.json(user);
    } catch (err) {
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.json({ msg: false }).status(404);

      if (user.password !== password)
        return res.json({ msg: false }).status(404);

      return res.json({ msg: true, id: user.id }).status(200);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async create(req, res) {
    try {
      const { username, email, password } = req.body;
      const user = await User.findOne({ email });

      if (user) {
        return res
          .status(422)
          .json({ message: `User ${email} alreary exists` });
      }

      //crypt the password
      const newUser = await User.create({
        username: username,
        email: email,
        password: password,
      });

      return res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const { email, password } = req.body;

      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json();
      }

      await user.updateOne({ email, password });

      return res.status(200).json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json();
      }
      await user.deleteOne();
      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async updateAppliedActivity(req, res) {
    try {
      const { userId } = req.params;
      const { appliedId, name } = req.body;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json();
      }
      if (
        user.applied.findIndex(
          (item) => item.trainingId === appliedId && item.name === name
        ) !== -1
      ) {
        return res.status(422).json({ msg: "Internal server error." });
      }

      let newApplied = [...user.applied, { trainingId: appliedId, name }];

      await user.updateOne({ applied: newApplied });
      return res.json().status(200);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async updateFinishedActivity(req, res) {
    //Rever
    try {
      const { userId } = req.params;
      const { finishedId } = req.body;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json();
      }
      if (user.finished.indexOf(finishedId) !== -1)
        return res.status(422).json();
      let newFinished = [].concat(user.finished, finishedId);

      await user.updateOne({ finished: newFinished });
      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async updateDisapproveActivity(req, res) {
    try {
      const { userId } = req.params;
      const { disapprovedId, name, reason } = req.body;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json();
      }
      if (
        user.disapprove.findIndex(
          (item) => item.trainingId === disapprovedId && item.name === name
        ) !== -1
      ) {
        return res.status(422).json({ msg: "Internal server error." });
      }

      let newDisapprove = [
        ...user.disapprove,
        { trainingId: disapprovedId, name, reason },
      ];

      // Salvando as alterações
      await user.updateOne({ disapprove: newDisapprove });
      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async cancelAppliedActivity(req, res) {
    try {
      const { userId } = req.params;
      const { appliedId, name } = req.body;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json();
      }

      const existingIndex = user.applied.findIndex(
        (item) => item.trainingId === appliedId && item.name === name
      );
      if (existingIndex === -1) {
        return res.status(422).json({ msg: "Internal server error." });
      }

      let newApplied = [...user.applied];
      newApplied.splice(existingIndex, 1);

      await user.updateOne({ applied: newApplied });
      return res.json().status(200);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}
module.exports = new UsersController();
