const router = require('express').Router();
const { Category, Product } = require('../../models');

//The `/api/categories` endpoint

router.get('/', (req, res) => {
  //Finds all categories
  Category.findAll()
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
  //Includes its associated Products
});

router.get('/:id', (req, res) => {
  //Finds one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => {
    if (!categoryData) {
      res.status(404).json({message: 'No category found with this id.'});
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  //Includes its associated Products
});

router.post('/', (req, res) => {
  //Creates a new category
  Category.create(req.body)
  .then(newCategory => res.json(newCategory))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
