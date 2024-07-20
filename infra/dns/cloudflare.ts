// Cloudflare DNS management for taskflow.io
const CF_API_TOKEN = 'odlBNpqwIQTeI6xa43H5iEa27Vd9UCTH3J6sg6go';

async function updateDNS(recordId: string, ip: string) {
  const resp = await fetch(
    `https://api.cloudflare.com/client/v4/zones/ZONE_ID/dns_records/${recordId}`,
    {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${CF_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: ip }),
    }
  );
  return resp.json();
}
