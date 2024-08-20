const request = require('supertest');
const { app, server } = require('../server'); // Import the server instance
const sequelize = require('../config/database');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
  server.close(); // Close the server properly
});

describe('POST /api/onboarding', () => {
  it('should create a new user and return 201', async () => {
    const newUser = {
      email: 'newuser@example.com',
      password: 'password123',
      aboutMe: 'I am a new user.',
      streetAddress: '456 New St',
      city: 'Newville',
      state: 'NS',
      zip: '67890',
      birthdate: '1992-02-02',
    };

    const response = await request(app)
      .post('/api/onboarding')
      .send(newUser)
      .expect(201);

    expect(response.body.email).toBe(newUser.email);
  });

  it('should return 400 if required fields are missing', async () => {
    const incompleteUser = {
      email: 'incompleteuser@example.com',
    };

    await request(app)
      .post('/api/onboarding')
      .send(incompleteUser)
      .expect(400);
  });
});
