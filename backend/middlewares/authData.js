const { check, validationResult } = require('express-validator')

const expressValidator = (req, res, next) => {
    try {
        const validationRules = [
            check('user').exists().not().isEmpty(),
            check('password').exists().not().isEmpty(),
            check('email').exists().isEmail()
        ];

        validationRules.forEach(validation => validation.run(req));

        const errors = validationResult(req);

        if (errors.isEmpty()) {
            next();
        } else {
            res.status(400).json({
                errors: errors.array()
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports = expressValidator;
