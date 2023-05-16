const express = require("express")
const router = express.Router()

const categories = [
    {
        title: "Article 1",
        content: "This is the content of Article 1",
        image: "image1.jpg",
        createdAt: new Date(2022, 0, 1),
        updatedAt: new Date(2022, 2, 15),
        published: true,
    },
    {
        title: "Article 2",
        content: "This is the content of Article 2",
        image: "image2.jpg",
        createdAt: new Date(2022, 1, 10),
        updatedAt: new Date(2022, 3, 5),
        published: false,
    },
    {
        title: "Article 3",
        content: "This is the content of Article 3",
        image: "image3.jpg",
        createdAt: new Date(2022, 3, 20),
        updatedAt: new Date(2022, 4, 25),
        published: true,
    },
    {
        title: "Article 4",
        content: "This is the content of Article 4",
        image: "image4.jpg",
        createdAt: new Date(2022, 5, 5),
        updatedAt: new Date(2022, 7, 1),
        published: true,
    },
    {
        title: "Article 5",
        content: "This is the content of Article 5",
        image: "image5.jpg",
        createdAt: new Date(2022, 7, 10),
        updatedAt: new Date(2022, 9, 15),
        published: false,
    },
    {
        title: "Article 6",
        content: "This is the content of Article 6",
        image: "image6.jpg",
        createdAt: new Date(2022, 9, 20),
        updatedAt: new Date(2022, 11, 5),
        published: true,
    },
    {
        title: "Article 7",
        content: "This is the content of Article 7",
        image: "image7.jpg",
        createdAt: new Date(2022, 11, 10),
        updatedAt: new Date(2023, 0, 1),
        published: true,
    },
    {
        title: "Article 8",
        content: "This is the content of Article 8",
        image: "image8.jpg",
        createdAt: new Date(2023, 0, 5),
        updatedAt: new Date(2023, 2, 20),
        published: false,
    },
    {
        title: "Article 9",
        content: "This is the content of Article 9",
        image: "image9.jpg",
        createdAt: new Date(2023, 2, 25),
        updatedAt: new Date(2023, 4, 1),
        published: true,
    },
    {
        title: "Article 10",
        content: "This is the content of Article 10",
        image: "image10.jpg",
        createdAt: new Date(2023, 4, 5),
        updatedAt: new Date(2023, 5, 10),
        published: true,
    },
];

router.get("/", (req, res) => {
    try {
        const take = parseInt(req.query.take);
        const skip = parseInt(req.query.skip);

        const ret_articles = categories.splice(skip, skip + take);
        return res.json({ ret_articles });
    } catch (error) {
        console.error(error);
    }
})

router.get("/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (id < 0 || id >= categories.length) {
            console.log("id invalid!");
            return res.json({ "message": `${id} is an id invalid!` });
        }

        const categorie = categories[id];

        return res.json({ categorie });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})

router.post("/", (req, res) => {
    try {
        const categorie = {
            title: req.body.title,
            content: req.body.content,
            image: req.body.image,
            createdAt: req.body.createdAt,
            published: req.body.published,
            updatedAt: req.body.updatedAt,
        }

        categories.push(categorie);

        return res.json({ "message": "Ajout avec success" });



    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})

router.delete("/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const index = categories.findIndex(categorie => categorie.id === id);
        if (index !== -1) {
            categories.splice(index, 1);
            res.status(200).json({ " message": "categorie suprrimé avec succès" })
        }
        else
            res.status(400).json({ "message": "categorie non trouvé" })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})


module.exports = router;