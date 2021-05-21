const Comment = require('../db/models/Comment');

const listAll = async (req,res)=>{
    const query = {};
    const {limit} = req.query;
    if (limit) query.limit = parseInt(limit);
    try{
        const comments = await Comment.findAll(query);
        res.status(200).json(comments);
    }catch(err){
        res.status(500).json({
            message: err
        });
    }
};

const getOne = async(req,res)=>{
    if(!req.params.id) return res.status(400).json({
        message: 'Bad request'
    });
    const id = parseInt(req.params.id);
    try{
        const comment = await Comment.findAll({
            where: {
              id
            }
        });
        res.status(200).json(comment[0] || {});
    }catch(err){
        res.status(500).json({
            message: err
        });
    }
};

const createOne = async (req,res)=>{
    if(!req.body.name || !req.body.email) return res.status(400).json({
        message:'You must send a name and an email.'
    });
    const commentBody = {name: req.body.name, email: req.body.email};
    if(req.body.website) commentBody.website = req.body.website;
    if(req.body.message) commentBody.message = req.body.message;
    try{
        const comment = await Comment.create(commentBody);
        res.status(201).json(comment);
    }catch(err){
        res.status(500).json({
            message: err
        });
    }
};

const updateOne = async (req,res)=>{
    const id = req.body.id;
    const commentBody = {};
    if(req.body.name) commentBody.name = req.body.name;
    if(req.body.email) commentBody.email = req.body.email;
    if(req.body.website) commentBody.website = req.body.website;
    if(req.body.message) commentBody.message = req.body.message;

    try{
        const commentAux = await Comment.findAll({
            where: {
              id
            }
        });
        if(commentAux[0]){
            await Comment.update(commentBody, {
                where: {
                  id
                }
            });
        }else{
            const comment = await Comment.create(commentBody);
            return res.status(201).json(comment);
        }
        
        const comment = await Comment.findAll({
            where: {
              id
            }
        });
        res.status(200).json(comment[0] || {});
    }catch(err){
        res.status(500).json({
            message: err
        });
    }
};

const deleteOne = async (req,res) => {
    if(!req.params.id) return res.status(400).json({
        message: 'Bad request'
    });
    const id = parseInt(req.params.id);
    try{
        const comment = await Comment.findAll({
            where: {
              id
            }
        });
        await Comment.destroy({
            where: {
              id
            }
        });
        res.status(200).json({
            deleted: true,
            lastData: comment[0]
        });
    }catch(err){
        res.status(500).json({
            message: err
        });
    }
};

module.exports ={
    listAll,
    getOne,
    createOne,
    updateOne,
    deleteOne
}