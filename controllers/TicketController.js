const Ticket = require('../models/Ticket');

const TicketController = {
  createTicket: async (req, res) => {
    try {
      const { ticketNumbers } = req.body;
      const userId = req.user.id; // Assuming you have implemented authentication middleware to attach the user to the request object

      // Validate ticketNumbers array and generate a unique ticketNumber

      const ticket = new Ticket({ ticketNumber: uniqueTicketNumber, userId });
      await ticket.save();

      return res.status(201).json({ ticketId: ticket._id });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  fetchTickets: async (req, res) => {
    try {
      const { page, limit } = req.query;
      const userId = req.user.id; // Assuming you have implemented authentication middleware to attach the user to the request object

      const tickets = await Ticket.find({ userId })
        .skip((page - 1) * limit)
        .limit(limit);

      return res.status(200).json({ tickets });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = TicketController;
