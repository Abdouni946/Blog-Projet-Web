const express = require('express');
const router = express.Router();
const { PrismaClient, Role } = require('@prisma/client');

const prisma = new PrismaClient();

// Retrieve all users
router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve users.' });
  }
});

// Retrieve a user by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve user.' });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  const { nom, email, password, role } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        nom,
        email,
        password,
        role: role || Role.USER,
      },
    });
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user.' });
  }
});

// Update a user
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { nom, email, password, role } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        nom,
        email,
        password,
        role,
      },
    });
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update user.' });
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete user.' });
  }
});

module.exports = router;
