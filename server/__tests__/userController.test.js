const { createUser } = require('../controllers/userController');
const User = require('../models/User');

jest.mock('../models/User');

describe('createUser', () => {
  it('should create a new user successfully', async () => {
    const req = {
      body: {
        email: 'testuser@example.com',
        password: 'testpassword',
        aboutMe: 'I am a test user.',
        streetAddress: '123 Test St',
        city: 'Testville',
        state: 'TS',
        zip: '12345',
        birthdate: '1990-01-01',
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    User.create.mockResolvedValue(req.body);

    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });

  it('should return a 500 error if something goes wrong', async () => {
    const req = { body: { email: 'testuser@example.com', password: 'testpassword' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock an error during User.create
    User.create.mockRejectedValue(new Error('Database Error'));

    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Database Error' });
  });
});
