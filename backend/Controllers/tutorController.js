import Tutor from "../models/TutorSchema.js";

export const updateTutor = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTutor = await Tutor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTutor,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteTutor = async (req, res) => {
  const id = req.params.id;

  try {
    await Tutor.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

export const getSingleTutor = async (req, res) => {
  const id = req.params.id;

  try {
    const tutor = await Tutor.findById(id).select("-password");

    res.status(200).json({
      success: true,
      message: "Tutor found",
      data: tutor,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "No Tutor found" });
  }
};

export const getAllTutor = async (req, res) => {
  try {
    const { query } = req.query;
    let tutors;

    if (query) {
      tutors = await Tutor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      tutors = await Tutor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res.status(200).json({
      success: true,
      message: "Tutors found",
      data: tutors,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};
