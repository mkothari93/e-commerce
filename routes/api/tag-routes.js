const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

//The `/api/tags` endpoint

router.get('/', (req, res) => {
  //Find all tags
  Tag.findAll({
    //Include its associated Product data
    include:[
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      }
    ]
  })
  .then(tagData => res.json(tagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  //Find a single tag by its `id`
  Tag.fineOne({
    where: {
      id: req.params.id
    },
    //Include its associated Product data
    include:[
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(tagData => {
    if (!tagData) {
      res.status(404).json({message: 'No tag found with this id.'});
      return;
    }
    res.json(tagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  //Create a new tag
  Tag.create(req.body)
  .then(newTag => res.json(newTag))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  //Update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(updatedTag => {
    if (!updatedTag[0]) {
      res.status(404).json({message: 'No tag found with this id'})
      return;
    }
    res.json(updatedTag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  //Delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deletedTag => {
    if (!deletedTag) {
      res.status(404).json({message: 'No tag found with this id'});
      return;
    }
    res.json(deletedTag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
