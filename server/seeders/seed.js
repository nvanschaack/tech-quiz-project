const db = require('../config/connection');
const { User, Quiz } = require('../models');
const UserSeed = require('./UserSeed.json');
const QuizSeed = require('./QuizSeed.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Quiz', 'Quiz');

    await cleanDB('User', 'User');

    await User.create(UserSeed);
    await Quiz.create(QuizSeed);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});