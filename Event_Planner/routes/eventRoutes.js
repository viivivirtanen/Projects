const express = require("express");
const router = express.Router();
const { 
    getAllEvents, 
    getEventById, 
    createEvent, 
    updateEvent, 
    deleteEvent 
} = require("../controllers/eventController");
const validateEvent = require("../middleware/validateEvent");
const authenticate = require("../middleware/authenticate");

router.get('/', authenticate(['admin', 'regular']), getAllEvents);
router.get('/:id', authenticate(['admin', 'regular']),  getEventById);
router.post('/', authenticate(['admin']), validateEvent, createEvent);
router.put('/:id', authenticate(['admin']), validateEvent, updateEvent);
router.delete('/:id', authenticate(['admin']), deleteEvent);



module.exports = router;