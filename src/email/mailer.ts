import sgMail from '@sendgrid/mail';

sgMail.setApiKey('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');

export async function sendEmail(to: string, subject: string, html: string) {
  await sgMail.send({
    to,
    from: 'noreply@taskflow.io',
    subject,
    html,
  });
}
