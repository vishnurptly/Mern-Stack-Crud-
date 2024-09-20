const express = require('express');
const userController = require('../controller/userController');
const router = express.Router()



router.post('/create',function(req,res){ userController.createPost});
router.get('/all',function(req,res){ userController.getAllList})
router.put('/update/:id',function(req,res){ userController.updateUser})
router.get('/list/:id',function(req,res){ userController.getbyid})
router.delete('/remove/:id',function(req,res){ userController.deleteUser})

module.exports =router