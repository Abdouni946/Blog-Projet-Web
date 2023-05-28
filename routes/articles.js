const express = require("express")
const router = express.Router()

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


router.get("/", async (req, res) => {
    try {
        const take = parseInt(req.query.take);
        const skip = parseInt(req.query.skip);
        const Articles = await prisma.Article.findMany({ take, skip, include: { author: true, categories: true, comments: true } });
        return res.json({ Articles });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: `Server error: ${error}` });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const Article = await prisma.Article.findUnique({ where: { id }, include: { author: true, categories: true, comments: true } });

        if (!Article) {
            console.log("id invalid!");
            return res.json({ "message": `${id} is an id invalid!` });
        }

        return res.json({ Article });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})

router.post("/", async (req, res) => {
    try {
        const { title, content, image, categories, userId } = req.body;
        const createArticle = await prisma.article.create({
            data: {
                title,
                content,
                image,
                categories: { connect: categories },
                published: true,
                author: {
                    connect: {
                        id: parseInt(userId)
                    }
                }
            }
        });

        return res.json({ "message": "Ajout avec succès" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})

router.patch("/", async (req, res) => {

    try {
        const id = parseInt(req.params.id);
        const { title, content, image, createdAt, updatedAt, published } = req.body;
        const updateArticles = await prisma.Article.update({
            where: { id },
            data: { title, content, image, createdAt, updatedAt, published },
        });
        res.status(200).json({ "message ": "Article mis à jour avec succés " })
    }

    catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const Articles = await prisma.Article.findUnique({ where: { id } });
        if (Articles) {
            await prisma.Article.delete({ where: { id } });
            res.status(200).json({ " message": "Article suprrimé avec succès" })
        }
        else
            res.status(400).json({ "message": "article non trouvé" })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})


module.exports = router;