const express = require('express');
const TicketController = require('../controllers/TicketController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, TicketController.createTicket);
router.get('/fetch', authMiddleware, TicketController.fetchTickets);

module.exports = router;
