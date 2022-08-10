import async from "async--await";
import ContactList from "../Models/Contact.js";

export const getContact = async (req, res) => {
  try {
    const allStudent = await ContactList.find();
    res.status(200).json(allStudent);
  } catch (errr) {
    res.status(404).json({ message: errr.message });
  }
};

export const getone = async (req, res) => {
  const id = req.params.id;
  try {
    const allStudent = await ContactList.findById(id);
    res.status(200).json(allStudent);
  } catch (errr) {
    res.status(404).json({ message: errr.message });
  }
};
export const createContact = async (req, res) => {
  const contacts = req.body;
  const newContact = new ContactList(contacts);

  try {
    if (newContact) {
      await newContact.save();
      res.send(newContact);
    } else {
      res.send("punda");
    }
  } catch (errr) {
    res.status(409).json({ message: errr.message });
  }
};

export const deletestudent = async (req, res) => {
  const id = req.params.id;

  try {
    await ContactList.findByIdAndDelete(id).exec();
    res.send("succesfully Deleted");
  } catch (err) {
    console.log(err);
  }
};

export const editstudent = async (req, res) => {
  const id = req.params.id;
  const asd = req.body.name;
  const allStudent = await ContactList.findByIdAndUpdate(id, { name: asd });

  try {
    res.send("updated successfully");
  } catch (err) {
    console.log(err);
  }
};
