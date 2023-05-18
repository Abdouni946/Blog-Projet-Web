const express = require("express")
const router = express.Router()

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


router.get("/", async (req, res) => {
  try {
    const take = parseInt(req.query.take);
    const skip = parseInt(req.query.skip);
    const Users = await prisma.User.findMany({ take, skip, });
    return res.json({ Users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: `Server error: ${error}` });
  }
})

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const User = await prisma.User.findUnique({ where: { id } },);

    if (!User) {
      console.log("id invalid!");
      return res.json({ "message": `${id} is an id invalid!` });
    }

    return res.json({ User });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ "message": `Server error: ${error}` });
  }
})

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const createUser = await prisma.User.create({
      data: {
        name,
        email,
        password,
        role: "AUTHOR",
      },
    })
    return res.json({ "message": "Ajout avec success" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ "message": `Server error: ${error}` });
  }
})

router.patch("/", async (req, res) => {

  try {
    const id = parseInt(req.params.id);
    const { name, email, password } = req.body;
    const updateUsers = await prisma.User.update({
      where: { id },
      data: { name, email, password, role: "AUTHOR" },
    });
    res.status(200).json({ "message ": "User mis à jour avec succés " })
  }

  catch (error) {
    console.error(error);
    return res.status(500).json({ "message": `Server error: ${error}` });
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const Users = await prisma.User.findUnique({ where: { id } });
    if (Users) {
      await prisma.User.delete({ where: { id } });
      res.status(200).json({ " message": "User suprrimé avec succès" })
    }
    else
      res.status(400).json({ "message": "User non trouvé" })
  } catch (error) {
    console.error(error);
    return res.status(500).json({ "message": `Server error: ${error}` });
  }
})


module.exports = router;