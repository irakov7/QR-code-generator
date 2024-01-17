

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const qrCodeWrapper = document.querySelector('#card-qr');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	if (input.value.trim() === '') {
        // If the input field is empty, clear the contents of qrCodeWrapper and do not continue further
        qrCodeWrapper.innerHTML = '';
        return;
    }

	//Cleaning the wrapper for the picture
	qrCodeWrapper.innerHTML = "";

	const api = 'http://api.qrserver.com/v1/create-qr-code/?size=160x160&data=';
	//We form a request - aka - the address of the image
	const request = api + input.value;
	
	//Generates HTML markup for the image
	const img = `<img src="${request}" alt="QR code">`;

	//Adding a picture to the page
	qrCodeWrapper.insertAdjacentHTML('beforeend', img)
	
	//the input field will be cleared every time after generation
	input.value = '';
	
});


