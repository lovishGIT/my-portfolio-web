export async function POST(req: Request) {
    const { email, name, message } = await req.json();

    try {
        const response = await fetch(
            `${process.env.NEXT_SECRET_EMAIL_SERVICE_URL}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: email,
                    subject: `${name} sent a message`,
                    text: message,
                    html: `<h1>Thanks! Your Message will be seen shortly.</h1><p>This was the message. <br />${message}</p>`,
                }),
            }
        );

        if (!response.ok) {
            return new Response(
                JSON.stringify({ error: 'Failed to send email' }),
                { status: 500 }
            );
        }

        return new Response(
            JSON.stringify({ message: 'Email sent successfully' }),
            { status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500 }
        );
    }
}
