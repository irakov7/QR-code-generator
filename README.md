This code allows you to generate a QR code based on data from the input field and automatically clean this field after generation. Cleaning the input field makes the interface more convenient for the user if he needs to create several QR codes in a row.</br>
Element Selection: You select the elements of the form, the input field, and the container for the QR code.

<strong>Form Submission Event Handler:</strong></br>
Prevents the default behavior of the form (page reload) upon its submission.
Checks if the input field is empty. If yes, clears the qrCodeWrapper and stops further execution of the function.

<strong>Clearing the Container for the QR Code:</strong></br>
Clears the qrCodeWrapper, removing the previous QR code if it exists.</br>

<strong>Forming the Request to the API and Generating the QR Code Image:</strong></br>
Forms a URL for the API using data from the input field.
Creates HTML markup for the QR code image. Adds the image to the qrCodeWrapper.

<strong>Clearing the Input Field:</strong></br>
Clears the input field after generating the QR code.
