import Mailchimp from '@mailchimp/mailchimp_marketing';

Mailchimp.setConfig({
  apiKey: '57f765cbc6d6744d8e684890e905d384-us17',
  server: 'us17',
});

export async function addSubscriber(email: string) {
  await Mailchimp.lists.addListMember('audience_id', {
    email_address: email,
    status: 'subscribed',
  });
}
