import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg03 from "../assets/images/hero-img03.png";
import heroImg02 from "../assets/images/hero-img02.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import TutorList from "../components/Tutors/TutorList";
import FaqList from "../components/Faq/FaqList";

const Home = () => {
  return (
    <>
      {/* ---------- hero section ---------- */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ---------- hero content ---------- */}
            <div>
              <div className="lg:w-[570px]">
                <h1
                  className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
                md:leading-[70px]"
                >
                  We help students master programming skills effectively.
                </h1>
                <p className="text__para">
                  Unlock your potential and dive into the world of coding with
                  our expert-led courses. Whether you're a beginner or an
                  experienced coder looking to level up, we've got you covered.
                  Our interactive lessons, practical exercises, and supportive
                  community will guide you every step of the way towards
                  becoming a proficient programmer.
                </p>

                <button className="btn">Schedule a session</button>
              </div>

              {/* ---------- hero counter ---------- */}
              <div
                className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5
                 lg:gap-[30px]"
              >
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                    text-headingColor"
                  >
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                    text-headingColor"
                  >
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Number of Tutors</p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                    text-headingColor"
                  >
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Student Satisfaction</p>
                </div>
              </div>
            </div>
            {/* ---------- hero content ---------- */}

            <div className="flex gap-[30px] justify-end mt-[-165px]">
              <div>
                <img className="w-full rounded-md" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img
                  className="w-full mb-[30px] rounded-md"
                  src={heroImg02}
                  alt=""
                />
                <img className="w-full rounded-md" src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- hero section end ---------- */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best educational services
            </h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
             lg:mt-[55px]"
          >
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Tutor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Find qualified tutors to assist you in your programming
                  learning journey. Our tutors are ready to provide personalized
                  guidance and help you succeed in your coding journey.
                </p>

                <Link
                  to="/tutors"
                  className="w-[44px] h-[44px] rounded-full border border-solid
                border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
                hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Tutor Registration
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Are you a programming expert? Register as a tutor and help
                  students enhance their coding skills. Join our community of
                  tutors today!
                </p>

                <Link
                  to="/tutors"
                  className="w-[44px] h-[44px] rounded-full border border-solid
                border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
                hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Browse Tutors
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Browse through our list of experienced tutors and find the
                  perfect match for your learning needs. Start your coding
                  journey with the right mentor today!
                </p>

                <Link
                  to="/tutors"
                  className="w-[44px] h-[44px] rounded-full border border-solid
                border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
                hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* ---------- services section ---------- */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Educational Services</h2>
            <p className="text__para text-center">
              Providing top-notch educational services for all. Our platform
              offers unparalleled expertise and guidance to help you succeed in
              your programming journey.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* ---------- services section end ---------- */}

      {/* ---------- our great tutors ---------- */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great tutors</h2>
            <p className="text__para text-center">
              Providing top-notch educational services for all. Our platform
              offers unparalleled expertise and guidance to help you succeed in
              your programming journey.
            </p>
          </div>

          <TutorList />
        </div>
      </section>
      {/* ---------- our great tutors end---------- */}

      {/* ---------- fac section ---------- */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} className="rounded-xl" alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved students
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* ---------- fac section end ---------- */}
    </>
  );
};

export default Home;
