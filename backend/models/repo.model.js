import mongoose, { Schema } from "mongoose";

const RepositorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
    },

    content: {
      type: [String],
      default: [],
    },

    visibility: {
      type: Boolean,
      default: true, // public by default
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    issues: {
      type: [Schema.Types.ObjectId],
      ref: "Issue",
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Repository = mongoose.model("Repository", RepositorySchema);
export default Repository;
