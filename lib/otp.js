// otpUtils.js

const crypto = require('crypto');

// Generate OTP using crypto module
function generateOTP(length) {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        const index = crypto.randomInt(0, digits.length);
        otp += digits[index];
    }
    return otp;
}

// Hash OTP using SHA-256
function hashOTP(otp) {
    const hash = crypto.createHash('sha256');
    hash.update(otp);
    return hash.digest('hex');
}

// Verify OTP
function verifyOTP(inputOTP, hashedOTP) {
    const hash = hashOTP(inputOTP);
    return hash === hashedOTP;
}

module.exports = { generateOTP, verifyOTP, hashOTP };
