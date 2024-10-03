export const environment = {
    production: false,
    authorize_uri: 'http://localhost:9000/oauth2/authorize?',
    client_id: 'client-angular',
    redirect_uri: 'http://localhost:4200/authorize',
    scope: 'openid profile',
    response_type: 'code',
    response_mode: 'form_post',
    code_challenge_method: 'S256',
    code_verifier: 'lJoczNsB9lCJ2hVG174AtaXjYcIxLxbIVQ2La7Yxk4d',
    code_challenge: '5t796pVGz5Nq3tPIfZo2XCAq28_Hc8QCWJqwY_Po7LQ',
    token_url: 'http://localhost:9000/oauth2/token',
    grant_type: 'authorization_code',
};
