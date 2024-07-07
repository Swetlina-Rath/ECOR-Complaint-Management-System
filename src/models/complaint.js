const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    employeeNo: { type: String, required: true, maxlength: 11 },
    employeeName: { type: String, required: true },
    divisionContact: { type: String, required: true },
    department: { type: String, required: true },
    website: { type: String, required: true },
    module: { type: String, required: true },
    description: { type: String, required: true, maxlength: 2000 },
    reference: { type: String },
    complaintNo: { type: Number, required: true, unique: true }, // Ensure the database enforces this uniqueness
    currentAdmin: { type: String, default: '' }
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
