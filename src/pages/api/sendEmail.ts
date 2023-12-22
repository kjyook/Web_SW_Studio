import type { NextApiRequest, NextApiResponse } from 'next';
import mailjet from 'node-mailjet';

const mailjetClient = mailjet.apiConnect(
  process.env.MAILJET_API_KEY as string,
  process.env.MAILJET_API_SECRET as string
);

interface EmailRequest {
  senderEmail: string;
  recipientEmail: string;
  subject: string;
  message: string;
}

interface EmailResponse {
  message: string;
  response?: unknown;
  error?: string;
  details?: string; // Added optional details property
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailResponse>
) {
  if (req.method === 'POST') {
    const { senderEmail, recipientEmail, subject, message } = req.body as EmailRequest;

    try {
      const request = await mailjetClient
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: senderEmail,
                Name: 'Sender Name',
              },
              To: [
                {
                  Email: recipientEmail,
                  Name: 'Recipient Name',
                },
              ],
              Subject: subject,
              TextPart: message,
            },
          ],
        });

      res.status(200).json({ message: 'Email sent successfully', response: request.body });
    } catch (error) {
      console.error(error);
    }
  }
}