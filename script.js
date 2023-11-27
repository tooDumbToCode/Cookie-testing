const set = document.getElementById('btn-set');
const get = document.getElementById('btn-get');

set.addEventListener('click', (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append('company_id', '5f2b8c736047c32705e97d82');
    body.append('user_id', '5f5a1681b117ba0230ab7ba8');
    body.append('otp', '2287');
    fetch('https://unicorn-amazing-rhino.ngrok-free.app/api/v2/admin/login/validateOtp', {headers: {'Accept': 'application/json'}, body, method: 'POST'})
    .then((response) => {
        console.log(response);
        return response.json()
        .then((responseData) => {
            console.log(responseData);
            const cookie = 'session_id=116bb4c3-1404-416f-8627-d905c4341713; Path=/; Expires=Mon, 27 Nov 2023 15:43:58 GMT; HttpOnly';
            document.cookie = cookie;
        });
    }).catch((err) => console.log(err));
    console.log('Set button clicked');
})
// get.addEventListener('click', (e) => {
//     e.preventDefault();
//     fetch('https://unicorn-amazing-rhino.ngrok-free.app/api/v2/sessionCookie/get', {headers: {'ngrok-skip-browser-warning': 'true', 'Access-Control-Allow-Origin': true, credentials: 'include'}})
//     .then((response) => {
//         response.json()
//         .then((responseData) => console.log(responseData));
//     }).catch((err) => console.log(err));
//     console.log('Get button clicked');
// })