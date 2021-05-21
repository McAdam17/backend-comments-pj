const router = require('express').Router();
const CommentController = require('../../controllers/CommentController');

router.get('/comments', CommentController.listAll);
router.get('/comments/:id', CommentController.getOne);
router.post('/comments', CommentController.createOne);
router.put('/comments', CommentController.updateOne);
router.delete('/comments/:id', CommentController.deleteOne);

module.exports = router;