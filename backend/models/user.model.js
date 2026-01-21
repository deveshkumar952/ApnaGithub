import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    repositories: {
      type: [Schema.Types.ObjectId],
      ref: "Repository",
      default: [],
    },

    followedUser: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },

    starRepos: {
      type: [Schema.Types.ObjectId],
      ref: "Repository",
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
