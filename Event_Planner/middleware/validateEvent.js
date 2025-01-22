const Joi = require("joi");

const eventValidationSchema = Joi.object({
    title: Joi.string().min(3).required(),
    date: Joi.string().required(),
    location: Joi.string().required(),
});

const validateEvent = (req, res, next) => {
    const { error } = eventValidationSchema.validate(req.body);
    if (error) {
        const errorMessage = error.details.map((detail) => detail.message).join(", ");
        return res.status(400).json({ error: errorMessage });
    }
    next();
};

module.exports = validateEvent;
