import nodemailer from 'nodemailer';

export default async function sendEmail (
    name: string,
    email: string,
    message: string
): Promise<void> {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        logger: true,
        debug: true,
    });

    // Define email options
    const mailOptions = {
        from: `Message Sent! <process.env.EMAIL_USER>`,
        to: email,
        subject: 'Portfolio Website Contact Form',
        text: `Message from ${name}:- ${message}`,
        html: `
            <h1>Message from ${name}</h1>
            <p>Email: ${email}</p>
            <p>${message}</p>
        `,
    };

    // Send email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email: ' + error);
    }
};