# Bug description

When I call `signInWithRedirect({ provider: 'Google' })` and I have previously logged into multiple google accounts, and I click back in my browser the `getCurrentUser` function never resolves or rejects.

# Steps to reproduce:
1. Login to two different Google accounts
2. run `yarn start --port 3000`
3. Open http://localhost:3000/ui/components/authenticator/sign-in-federated
4. Click "Sign In"
5. See multiple accounts on [Google Accounts page](https://accounts.google.com/)
6. Don't login, click the back button
7. Notice that neither then nor catch resolves for getCurrentUser()

This was tested in both Chrome and Firefox
