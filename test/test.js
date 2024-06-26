const { generateOTP, hashOTP, verifyOTP } = require('../lib/otp');

// Generate OTP
const otp = generateOTP(6);
console.log('Generated OTP:', otp);

// Simulating user input
const userInputOTP = '123456'; // Replace with actual user input

// Hash OTP
const hashedOTP = hashOTP(userInputOTP);

// Verify OTP
const isValidOTP = verifyOTP(userInputOTP, hashedOTP);
if (isValidOTP) {
    console.log('OTP verification successful');
} else {
    console.log('Invalid OTP');
}

