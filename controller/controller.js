const model=require('../model/model')

post_data = async(req, res) => {

    try {
        const Cource = {
            name:req.body.name,
            company:req.body.company,
            countery:req.body.countery,
            Avalilability:req.body.Avalilability,
            Description:req.body.Description
        }
        console.log(Cource);

        const insertData = await model.Lounchpad_detail.insertMany(Cource)
        res.json({
            message: 'New post Added',
            data: insertData
        })
    } catch (err) {
        console.log(err);
        res.json({
            message: 'post is not inserted sucessfully',
            error: err

        })
    }
}
module.exports={post_data}


