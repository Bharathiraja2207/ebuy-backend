import express from "express";
import nodemailer from 'nodemailer'
import randomstring from 'randomstring'
import * as dotenv from 'dotenv'
import { client } from '../index.js';
import { genhashpassword } from "./login.router.js";

const router = express.Router()
dotenv.config()

router.post("/forget-password", async (req, res) => {
    const { email } = req.body;

    const otp = randomstring.generate({
        length: 6,
        charset: 'numeric',
    });
    const user = await client
        .db("ebay")
        .collection("signup")
        .updateOne({
            username: email
        }, { $set: { otp } })
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Reset your password",
            text: `OTP for change your password is:${otp}`,//Click the link to reset your password: http://localhost:4004/reset-password
        });
        res.send("OTP send successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});


// Verify OTP
router.post('/verifyotp', async (req, res) => {
    const { email, otp, password } = req.body;

    try {
        // Verify OTP
        const user = await client
            .db("ebay")
            .collection("signup")
            .findOne({ username: email })
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        if (user.otp !== otp) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        // Hash password
        // Update password and OTP
        const hashpassword = await genhashpassword(password)
        const users = await client
            .db("ebay")
            .collection("signup")
            .updateOne({ username: email }, { $set: { password: hashpassword, otp: '' } })

        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal Server Error');
    }
});




// router.post("/reset-password", async (req, res) => {
//     const { email, password } = req.body;
//     const hashpassword = await genhashpassword(password)
//     const user = await client
//         .db("workspace")
//         .collection("signup")
//         .updateOne({
//             username: email
//         }, { $set: { password: hashpassword } }, { $unset: { otp: 1 } })

//     //users.find((user) => user.email === email);
//     if (!user) {
//         res.status(404).send("User not found");
//         return;
//     }

//     user.password = password;

//     res.send("Password reset successfully");
// });
export default router