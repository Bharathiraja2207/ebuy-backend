import express from "express"; // "type": "module"
import { client } from "../index.js"
import { auth } from "../middleware/auth.js";

const router = express.Router()

router.post("/dashboard", async function (request, response) {
    const result = request.body
    const data = await client
        .db("ebay")
        .collection("dashboard")
        .insertMany(result)
    response.send(data)
})

router.get("/dashboard", async function (request, response) {
    const detail = await client
        .db("ebay")
        .collection("dashboard")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/dashboard/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("ebay")
        .collection("dashboard")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})


router.post("/cars", async function (request, response) {
    const result = request.body
    const data = await client
        .db("ebay")
        .collection("cars")
        .insertMany(result)
    response.send(data)
})

router.get("/cars", async function (request, response) {
    const detail = await client
        .db("ebay")
        .collection("cars")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/cars/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("ebay")
        .collection("cars")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})


router.post("/bikes", async function (request, response) {
    const result = request.body
    const data = await client
        .db("ebay")
        .collection("bikes")
        .insertMany(result)
    response.send(data)
})

router.get("/bikes", async function (request, response) {
    const detail = await client
        .db("ebay")
        .collection("bikes")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/bikes/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("ebay")
        .collection("bikes")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})

router.post("/phones", async function (request, response) {
    const result = request.body
    const data = await client
        .db("ebay")
        .collection("phones")
        .insertMany(result)
    response.send(data)
})

router.get("/phones", async function (request, response) {
    const detail = await client
        .db("ebay")
        .collection("phones")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/phones/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("ebay")
        .collection("phones")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})
router.post("/watches", async function (request, response) {
    const result = request.body
    const data = await client
        .db("ebay")
        .collection("watches")
        .insertMany(result)
    response.send(data)
})

router.get("/watches", async function (request, response) {
    const detail = await client
        .db("ebay")
        .collection("watches")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/watches/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("ebay")
        .collection("watches")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})

router.post("/washingMachines", async function (request, response) {
    const result = request.body
    const data = await client
        .db("ebay")
        .collection("washingMachines")
        .insertMany(result)
    response.send(data)
})

router.get("/washingMachines", async function (request, response) {
    const detail = await client
        .db("ebay")
        .collection("washingMachines")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/washingMachines/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("ebay")
        .collection("washingMachines")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})
router.post("/laptops", async function (request, response) {
    const result = request.body
    const data = await client
        .db("ebay")
        .collection("laptops")
        .insertMany(result)
    response.send(data)
})

router.get("/laptops", async function (request, response) {
    const detail = await client
        .db("ebay")
        .collection("laptops")
        .find({})
        .toArray();
    response.send(detail)
})
router.get("/laptops/:id", async function (request, response) {
    const { id } = request.params
    const detail = await client
        .db("ebay")
        .collection("laptops")
        .findOne({ id: id })
    detail ? response.send(detail) : response.status(404).send({ message: "Detail is not found" })
})

router.post("/chat", async function (request, response) {
    const result = request.body
    const data = await client
        .db("ebay")
        .collection("chat")
        .insertOne(result)
    response.send(data)
})

// router.get("/chat", async function (request, response) {
//     const detail = await client
//         .db("Olx")
//         .collection("chat")
//         .find({})
//         .toArray();
//     response.send(detail)
// })

export default router