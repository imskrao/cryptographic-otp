
---

# cryptographic-otp

A Node.js module for generating and verifying One-Time Passwords (OTPs) using cryptographic functions from Node.js.

## Installation

Install the module via npm:

```bash
npm install cryptographic-otp
```

## Usage

### Generate OTP

```javascript
const { generateOTP, hashOTP } = require('cryptographic-otp');

// Generate OTP
const generatedOTP = generateOTP(6); // Generates a 6-digit OTP
console.log('Generated OTP:', generatedOTP);
```

### Verify OTP

```javascript
const { hashOTP, verifyOTP } = require('cryptographic-otp');

// Simulated user input
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
```

## API

### `generateOTP(length)`

Generates a random OTP of specified length using Node.js's `crypto` module.

- `length` (Number): Length of the OTP to generate.

Returns the generated OTP as a string.

### `hashOTP(otp)`

Hashes the provided OTP using SHA-256 cryptographic hash function.

- `otp` (String): OTP to hash.

Returns the hashed OTP as a hexadecimal string.

### `verifyOTP(inputOTP, hashedOTP)`

Verifies the user input OTP against the hashed OTP.

- `inputOTP` (String): User input OTP to verify.
- `hashedOTP` (String): Hashed OTP to compare against.

Returns `true` if the input OTP matches the hashed OTP, otherwise `false`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
