const mongoose = require('mongoose');
const Event = require("../models/event");

const getAllEvents = async( req, res ) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const getEventById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid event ID format" });
    }

    try {
        const event = await Event.findById(id);
        if (!event) {
            return res.status(404).json({ error: "Event not found" });
        }
        res.status(200).json(event);
    } catch (err) {
        console.error("Error fetching event by ID:", err);
        res.status(500).json({ error: "Failed to fetch event by ID", details: err });
    }
};


const createEvent = async (req, res) => {
    try {
        console.log("Request body:", req.body);
        const event = new Event(req.body);
        const savedEvent = await event.save();
        res.status(201).json(savedEvent);
    } catch (err) {
        console.error("Error creating event:", err);
        res.status(500).json({ error: "Failed to create event", details: err });
    }
};


const updateEvent = async( req, res ) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!event) return res.status(404).json({ error: "Event not found" });
        res.status(200).json(event);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteEvent = async( req, res ) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) return res.status(404).json({ error: "Event not found" });
        res.status(200).json({ message: "Event deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent
};

