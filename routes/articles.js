const express = require("express")
const router = express.Router()

const articles = [
    {
        id: 1,
        title: "Article 1",
        content: "This is the content of Article 1",
        image: "image1.jpg",
        createdAt: new Date(2022, 0, 1),
        updatedAt: new Date(2022, 2, 15),
        published: true,
    },
    {
        id: 2,
        title: "Article 2",
        content: "This is the content of Article 2",
        image: "image2.jpg",
        createdAt: new Date(2022, 1, 10),
        updatedAt: new Date(2022, 3, 5),
        published: false,
    },
    {
        id: 3,
        title: "Article 3",
        content: "This is the content of Article 3",
        image: "image3.jpg",
        createdAt: new Date(2022, 3, 20),
        updatedAt: new Date(2022, 4, 25),
        published: true,
    },
    {
        id: 4,
        title: "Article 4",
        content: "This is the content of Article 4",
        image: "image4.jpg",
        createdAt: new Date(2022, 5, 5),
        updatedAt: new Date(2022, 7, 1),
        published: true,
    },
    {
        id: 5,
        title: "Article 5",
        content: "This is the content of Article 5",
        image: "image5.jpg",
        createdAt: new Date(2022, 7, 10),
        updatedAt: new Date(2022, 9, 15),
        published: false,
    },
    {
        id: 6,
        title: "Article 6",
        content: "This is the content of Article 6",
        image: "image6.jpg",
        createdAt: new Date(2022, 9, 20),
        updatedAt: new Date(2022, 11, 5),
        published: true,
    },
    {
        id: 7,
        title: "Article 7",
        content: "This is the content of Article 7",
        image: "image7.jpg",
        createdAt: new Date(2022, 11, 10),
        updatedAt: new Date(2023, 0, 1),
        published: true,
    },
    {
        id: 8,
        title: "Article 8",
        content: "This is the content of Article 8",
        image: "image8.jpg",
        createdAt: new Date(2023, 0, 5),
        updatedAt: new Date(2023, 2, 20),
        published: false,
    },
    {
        id: 9,
        title: "Article 9",
        content: "This is the content of Article 9",
        image: "image9.jpg",
        createdAt: new Date(2023, 2, 25),
        updatedAt: new Date(2023, 4, 1),
        published: true,
    },
    {
        id: 10,
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

        const ret_articles = articles.splice(skip, skip + take);
        return res.json({ ret_articles });
    } catch (error) {
        console.error(error);
    }
})

router.get("/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (id < 0 || id >= articles.length) {

            console.log("id invalid!", articles.length);
            return res.json({ "message": `${id} is an id invalid!` });
        }

        const article = articles[id];

        return res.json({ article });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})

router.post("/", (req, res) => {
    try {
        const article = {
            title: req.body.title,
            content: req.body.content,
            image: req.body.image,
            createdAt: req.body.createdAt,
            published: req.body.published,
            updatedAt: req.body.updatedAt,
        }
        articles.push(article);
        return res.json({ "message": "Ajout avec success" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})

router.patch("/", (req, res) => {

    try {

        const { id, title, content, image, createdAt, updatedAt, published } = req.body;
        const index = articles.findIndex(article => article.id === id)

        if (index !== -1) {
            articles[index].title = title || articles[index].title;
            articles[index].content = content || articles[index].content;
            articles[index].image = image || articles[index].image;
            articles[index].createdAt = createdAt || articles[index].createdAt;
            articles[index].updatedAt = updatedAt || articles[index].updatedAt;
            articles[index].published = published || articles[index].published;
            res.status(200).json({ "message ": "Article mis à jour avec succés " })
        }

        else {
            res.status(500).json({ "message": "article non trouvé" })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})

router.delete("/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const index = articles.findIndex(article => article.id === id)
        if (index !== -1) {
            articles.splice(index, 1);
            res.status(200).json({ " message": "article suprrimé avec succès" })
        }
        else
            res.status(400).json({ "message": "aticle non trouvé" })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": `Server error: ${error}` });
    }
})


module.exports = router;