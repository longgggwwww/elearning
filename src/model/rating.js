const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      unique: true,
      required: true,
    },
    range: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    publish: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
    },
  },
  {
    collection: "Rating",
    toJSON: {
      transform(_doc, ret, _options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

const Rating = mongoose.model("rating", schema);

module.exports = Rating;