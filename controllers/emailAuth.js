const Email = require('../models/Emails')

exports.createEmail = async (req, res) => { 
    try {
        const body = req.body

        const email = await Email.create(body);

        res.status(201).json({
            success: true,
            data: email
        })
    } catch (err) {
        console.error(err)
      res.status(400).json({success: false, error: err.message})  
    }
}