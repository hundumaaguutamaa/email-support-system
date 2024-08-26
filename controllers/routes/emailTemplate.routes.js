module.exports = app => {
    const emailTemplates = require('../controllers/emailTemplate.controller.js');
    const router = require('express').Router();
  
    router.post('/', emailTemplates.create);
    router.get('/', emailTemplates.findAll);
    router.get('/:id', emailTemplates.findOne);
    router.put('/:id', emailTemplates.update);
    router.delete('/:id', emailTemplates.delete);
  
    app.use('/api/emailTemplates', router);
  };
  