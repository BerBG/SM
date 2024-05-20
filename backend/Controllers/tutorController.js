import Tutor from "../models/TutorSchema.js";
import Booking from "../models/BookingSchema.js";

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
    const tutor = await Tutor.findById(id)
      .populate("reviews")
      .select("-password");

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
      tutors = await Tutor.find({ isApproved: "approved" }).select("-password");
    }

    res.status(200).json({
      success: true,
      message: "Users found",
      data: tutors,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const getTutorProfile = async (req, res) => {
  const tutorId = req.userId;

  try {
    const tutor = await Tutor.findById(tutorId);

    if (!tutor) {
      return res
        .status(404)
        .json({ success: false, message: "Tutor not found" });
    }

    const { password, ...rest } = tutor._doc;
    const appointments = await Booking.find({tutor: tutorId})

    res.status(200).json({
      success: true,
      message: "Profile info is getting",
      data: { ...rest, appointments },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong, cannot get" });
  }
};
