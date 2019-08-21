# issue summary

when the links are conditionally rendered sometimes class names are not applied to them correctly on the initial page load in production

## steps to reproduce

1. check out this repo
2. npm run build
3. cd public && http-server .
4. open the page and you will see a login link rendered on top
5. set a flag to local storage `localStorage.setItem("test", true)`
6. reload the page

### Expected results:

Since the links depend on the value in the local storage, you expect to see Account and Logout links with correct class names

### Actual results:

You see Account and Logout links but if you check the class name of the Account link, you will see that it says "login". Also the href tag is not updated.
