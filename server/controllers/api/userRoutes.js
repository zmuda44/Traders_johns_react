const router = require('express').Router();
const { User } = require('../../models');

router.get('/:userId', async (req, res) => {
  console.log("hit")
    try {
      const userData = await User.findByPk(req.session.user_id, {
          attributes: { exclude: ['password'] },
          // include: [
          //     { model: Product },
          //     { model: Product, through: WatchedProduct, as: 'user_watched_products' },

          // ]     
      });   
      
      if (!userData) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(userData)



    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.create(req.body);


    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      //see where this number is returned
      res.status(201).end();
    });
  } catch (error) {
    console.error('Failed to create new user', error);
    res.status(500).json({message: 'failed to create user'});
  }
});

router.post('/login', async (req, res) => {
  console.log(req);
  try {
    const username = req.body.username;
    const password = req.body.password;

    const userData = await User.findOne({ where: { username: username } });
    if (!userData) {
      return       res
      .status(400)
      .json({ message: 'Incorrect username or password, please try again' });
    }
    const validPassword = userData.checkPassword(password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.dataValues.id;
      req.session.logged_in = true;

      res.status(204).end();
      
    });

  } catch (error) {
    console.error('Failed to login.', error);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end()
    })
  } else {
    res.status(404).end()
  }
});

module.exports = router;

