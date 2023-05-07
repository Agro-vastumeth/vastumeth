var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const elementalSchema = new Schema({
  carbon: {
    type: Number,
    required: true,
  },
  hydrogen: {
    type: Number,
    required: true,
  },
  nitrogen: {
    type: Number,
    required: true,
  },
  oxygen: {
    type: Number,
    required: true,
  },
  ash: {
    type: Number,
    required: true,
  },
  carbon_mol: Number,
  norm_carbon_mol: Number,
  hydrogen_mol: Number,
  norm_hydrogen_mol: Number,
  nitrogen_mol: Number,
  norm_nitrogen_mol: Number,
  oxygen_mol: Number,
  norm_oxygen_mol: Number,
  tmp_L_per_g: Number,
  tmp_L_per_Kg: Number,
  volatile_solid: Number,
  process: String,
  experimental_L_par_Kg: Number,
  references: String,
});

module.exports = elementalSchema;
