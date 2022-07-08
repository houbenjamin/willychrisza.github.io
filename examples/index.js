import extensibilitySdk from '../src'
import { displayAccountInfo, displayProspectInfo, displayUserInfo } from './helpers';

document.addEventListener('DOMContentLoaded', async () => {
  console.log('Initializing SDK');

  // initialize SDK and get the data available for this extension

  const { user, prospect, organization } = await extensibilitySdk.init();
  console.log(organization);

  // Now render data that came from Outreach.
  // Replace with what you usually use for rendering in your framework. For example React components.

  console.log('SDK initialized');
  console.log(prospect);
  console.log(user)
  displayUserInfo(user);
  displayProspectInfo(prospect);
  displayAccountInfo(account);
});