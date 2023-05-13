const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Retrieve all comments
router.get('/', async (req, res) => {
    try {
        const comments = await prisma.comment.findMany();
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve comments.' });
    }
});
// Retrieve a specific comment
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await prisma.comment.findUnique({
            where: { id: parseInt(id) },
        });
        if (comment) {
            res.json(comment);
        } else {
            res.status(404).json({ error: 'Comment not found.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve comment.' });
    }
});
// Create a new comment
router.post('/', async (req, res) => {
    const { contenu, articleId, userId } = req.body;
    try {
        const newComment = await prisma.comment.create({
            data: {
                contenu,
                articleId: parseInt(articleId),
                userId: parseInt(userId),
            },
        });
        res.json(newComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create comment.' });
    }
});
// Update a comment
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { contenu } = req.body;
    try {
        const updatedComment = await prisma.comment.update({
            where: { id: parseInt(id) },
            data: { contenu },
        });
        res.json(updatedComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update comment.' });
    }
});
// Delete a comment
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedComment = await prisma.comment.delete({
            where: { id: parseInt(id) },
        });
        res.json(deletedComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete comment.' });
    }
});