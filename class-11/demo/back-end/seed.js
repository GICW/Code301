const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);

const Cat = require('./models/cat');

async function seed() {
  // seed the database with some cats, so I can retrieve them
  const myCat = new Cat({
    name: 'Qilin Xie',
    color: 'orange',
    hasClaws: false,
    location: 'Salem',
  });
  myCat.save(function (err) {
    if (err) console.error(err);
    else console.log('saved Jimmy John');
  });

  // alternately...
  await Cat.create({
    name: 'Paul',
    color: 'calico',
    hasClaws: true,
    location: 'Silverton'
  });

  console.log('saved Paul');

  mongoose.disconnect();
}

seed();
