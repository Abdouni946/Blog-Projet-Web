const express = require("express")
const router = express.Router()

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


router.get("/", async (req, res) => {
    try {
        const take = parseInt(req.query.take);
        const skip = parseInt(req.query.skip);
        const categorys = await prisma.category.findMany({ take, skip, });
        return res.json({ categorys });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: `Server error: ${error}` });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const category = await prisma.category.findUnique({ where: { id }, });

        if (!category) {
            console.log("id invalid!");
            return res.json({ "message": `${id} is an id invalid!` });
        }

        return res.json({ category });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})

router.post("/", async (req, res) => {
    try {
        const { name, articles } = req.body;
        const createcategory = await prisma.category.create({
            data: {
                name,
                articles,
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
        const { name, articles } = req.body;
        const updatecategorys = await prisma.category.update({
            where: { id },
            data: { name, articles },
        });
        res.status(200).json({ "message ": "category mis à jour avec succés " })
    }

    catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const categorys = await prisma.category.findUnique({ where: { id } });
        if (categorys) {
            await prisma.category.delete({ where: { id } });
            res.status(200).json({ " message": "category suprrimé avec succès" })
        }
        else
            res.status(400).json({ "message": "aticle non trouvé" })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})


module.exports = router;