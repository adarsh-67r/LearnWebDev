let isLoggedIn = true;
let isPaidUser = false;

if (isLoggedIn && isPaidUser) {
  console.log("Welcome to the premium content!");
} else if (isLoggedIn && !isPaidUser) {
  console.log("Please upgrade to access premium content.");
} else {
  console.log("Please log in to access content.");
}

let isEmailUser = true;
let isGoogleUser = false;

console.log(
  isEmailUser || isGoogleUser ? "User can log in" : "User cannot log in",
);
