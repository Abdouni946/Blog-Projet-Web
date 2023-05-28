const express = require("express")
const router = express.Router()

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


router.get("/", async (req, res) => {
    try {
        const take = parseInt(req.query.take);
        const skip = parseInt(req.query.skip);
        const comments = await prisma.comment.findMany({ take, skip, });
        return res.json({ comments });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: `Server error: ${error}` });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const comments = await prisma.comment.findUnique({ where: { id } });

        if (!comments) {
            console.log("id invalid!");
            return res.json({ "message": `${id} is an id invalid!` });
        }

        return res.json({ comments });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})

router.post("/", async (req, res) => {
    try {
        const { email, content, articlesId } = req.body;
        const createcomment = await prisma.comment.create({
            data: {
                email,
                content,
                articlesId,
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
        const { email, content, articleId } = req.body;
        const updatecomments = await prisma.comment.update({
            where: { id },
            data: { email, content, articleId },
        });
        res.status(200).json({ "message ": "comment mis à jour avec succés " })
    }

    catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const comments = await prisma.comment.findUnique({ where: { id } });
        if (comments) {
            await prisma.comment.delete({ where: { id } });
            res.status(200).json({ " message": "comment suprrimé avec succès" })
        }
        else
            res.status(400).json({ "message": "aticle non trouvé" })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})


module.exports = router;