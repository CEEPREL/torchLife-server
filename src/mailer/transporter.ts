import nodemailer, { SentMessageInfo } from "nodemailer"

let transport: nodemailer.Transporter<SentMessageInfo> | null = null
const host = "smtp.ethereal.mail"

export const getTransport = async ()=>{
    if (transport) return transport

    const {user, pass} = await nodemailer.createTestAccount()

    transport = nodemailer.createTransport({
        host,
        port:587,
        secure: process.env.NODE_ENV === 'production',
        auth:{user, pass},
    }); return transport
}