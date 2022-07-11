const Mailjet = require('node-mailjet');
const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

export const handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
    };
  }
  if (!event.body) {
    return {
      statusCode: 400,
    };
  }
  console.log(event.body);
  const { title, cost, articleUrl, message, email } = JSON.parse(event.body);
  const HTMLPart = `
  <p>Tytuł: ${title}</p>
  <p>Koszt: ${cost}</p>
  <p>Artykuł: ${articleUrl}</p>
  <p>Wiadomość: ${message}</p>
  <p>Email: ${email}</p>
  `;

  try {
    await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'jozollo@gmail.com',
            Name: 'Dewitalizacja',
          },
          To: [
            {
              Email: 'jozollo@gmail.com',
              Name: 'Józef',
            },
          ],
          ...(email ? { ReplyTo: { Email: email } } : {}),
          Subject: 'Kontakt z dewitalizacja',
          HTMLPart,
        },
      ],
    });

    return {
      statusCode: 200,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
    };
  }
};
