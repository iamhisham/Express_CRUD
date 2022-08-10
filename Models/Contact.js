import mongoose from "mongoose";

const studetSchema = mongoose.Schema({
  name: String,
  mobile: Number,
  type: String,
  email: String,
  address: String,
});

const ContactList = mongoose.model("ContactList", studetSchema);

export default ContactList;
