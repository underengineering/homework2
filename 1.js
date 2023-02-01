"use strict";

const email = "robin_singh@example.com";

const [username, domain] = email.split("@");
const protectedUsername = username.slice(0, username.length / 2);

console.log(`${protectedUsername}...@${domain}`);
