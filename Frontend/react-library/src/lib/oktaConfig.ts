export const oktaConfig = {
    clientId: '0oafan4dqiFhc5Gbp5d7',
    issuer: 'https://dev-28133913.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid','profile','email'],
    pkce: true,
    disableHttpsCheck: true,
}