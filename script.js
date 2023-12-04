const set = document.getElementById('btn-set');
const get = document.getElementById('btn-get');
const otp = document.getElementById('otp');
set.addEventListener('click', (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append('company_id', '5f2b8c736047c32705e97d82');
    body.append('user_id', '5f5a1681b117ba0230ab7ba8');
    body.append('otp', otp.value);
    fetch('http://localhost:5002/api/v2/admin/login/validateOtp', {headers: {'Accept': 'application/json'}, body, method: 'POST'})
    .then((response) => {
        console.log(response.headers);
        return response.json()
        .then((responseData) => {
            console.log(responseData.cookie);
            document.cookie = responseData.cookie;
            // document.cookie = 'session_id=38568da0-6c82-48a1-81a1-11206c04b0af; Path=/; Expires=Fri, 01 Dec 2023 16:41:01 GMT; Secure';
        });
    }).catch((err) => console.log(err));
    console.log('Set button clicked');
})
get.addEventListener('click', (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append('user_id', '5f5a1681b117ba0230ab7ba8')
    body.append('company_id', '5f2b8c736047c32705e97d82')
    body.append('user_first_name', 'Abhishek')
    body.append('user_last_name', 'Shivhare')
    fetch('https://unicorn-amazing-rhino.ngrok-free.app/api/v2/admin/login/sendOtp', {headers: {'ngrok-skip-browser-warning': 'true', 'Access-Control-Allow-Origin': true}, method: 'POST', body})
    .then((response) => {
        response.json()
        .then((responseData) => console.log(responseData));
    }).catch((err) => console.log(err));
    console.log('Get button clicked');
})