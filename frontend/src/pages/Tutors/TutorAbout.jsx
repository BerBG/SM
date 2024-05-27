import { formateDate } from "../../utils/formatDate";

const TutorAbout = ({name, about, qualifications, experiences}) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Muhibur Rahman
          </span>
        </h3>
        <p className="text__para">
          Muhibur Rahman is an experienced tutor specializing in various
          programming languages and technologies. With a passion for teaching
          and years of practical experience, Muhibur is dedicated to helping
          students develop their coding skills and achieve their learning goals.
          His teaching approach focuses on practical, hands-on learning,
          ensuring that students not only understand the theoretical concepts
          but also gain real-world coding experience. Muhibur believes in
          creating a supportive and collaborative learning environment where
          students feel motivated and empowered to succeed in their programming
          journey.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("09-13-2014")} - {formateDate("09-13-2016")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">
                PhD in Computer Science
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                University of ABC, New York
              </p>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2010")} - {formateDate("09-13-2014")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">
                Bachelor of Science in Computer Engineering
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                University of XYZ, California
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("12-04-2010")} - {formateDate("09-13-2014")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>

            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("12-04-2010")} - {formateDate("09-13-2014")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>

            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TutorAbout;
