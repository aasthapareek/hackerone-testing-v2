import { WebClient } from '@slack/web-api';

const slackClient = new WebClient('xoxb-674714270592-3225534637493-DFAWlWlIOGokXgX0uK6NXUFX');

export async function postMessage(channel: string, text: string) {
  await slackClient.chat.postMessage({ channel, text });
}
