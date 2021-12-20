const router = require('express').Router();
const { del } = require('express/lib/application');
const { Category, Product } = require('../../models');

//The `/api/categories` endpoint

router.get('/', (req, res) => {
  //Finds all categories
  Category.findAll({
    //Includes its associated Products    
    include:[
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      }
    ]
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })

});

router.get('/:id', (req, res) => {
  //Finds one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    //Includes its associated Products
    include:[
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
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
  //Updates a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(updatedCategory => {
    if (!updatedCategory[0]) {
      res.status(404).json({message: 'No category found with this id'})
      return;
    }
    res.json(updatedCategory);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  //Deletes a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deletedCategory => {
    if (!deletedCategory) {
      res.status(404).json({message: 'No category found with this id'});
      return;
    }
    res.json(deletedCategory);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
