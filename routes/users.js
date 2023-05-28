const express = require("express")
const router = express.Router()

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


router.get("/", async (req, res) => {
  try {
    const take = parseInt(req.query.take);
    const skip = parseInt(req.query.skip);
    const Users = await prisma.User.findMany({ take, skip, include: { articles: true } });
    return res.json({ Users });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: `Server error: ${error}` });
  }
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const user = await prisma.user.findUnique({
      where: { id }, include: { articles: true }
    });


    if (user) {
      res.send(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving user from the database');
  }
});

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

router.patch("/:id", async (req, res) => {

  try {
    const id = parseInt(req.params.id);
    const { name, email, password } = req.body;
    const updateUsers = await prisma.User.update({
      where: { id }, data: { name, email, password, role: "AUTHOR" },
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