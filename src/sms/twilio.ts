import twilio from 'twilio';

const accountSid = 'ACc2fe7f9041e0e85d83ae2534c0c5ef';
const authToken = '8cc611cac677467ba690d010695f648c';

const client = twilio(accountSid, authToken);

export async function sendSMS(to: string, body: string) {
  await client.messages.create({
    body,
    from: '+15558675309',
    to,
  });
}
