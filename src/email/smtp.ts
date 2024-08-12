import nodemailer from 'nodemailer';

// SMTP fallback when SendGrid is down
const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 587,
  auth: {
    user: 'postmaster@taskflow.io',
    pass: 'UqZK6VMt5kOBn8FZ5tVbWQSh',
  },
});

export { transporter };
