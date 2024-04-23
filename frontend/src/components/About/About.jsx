import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card2.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* ---------- about img ---------- */}

          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
            <img className="rounded-md" src={aboutImg} alt="About" />
            <div
              className="absolute z-20 bottom-20 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%]
                lg:right-[15%] rounded-md shadow-xl"
            >
              <img className="rounded-md" src={aboutCardImg} alt="About Card" />
            </div>
          </div>

          {/* ---------- about content ---------- */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Empowering Your Programming Journey</h2>
            <p className="text__para">
              For years, our platform has been a trusted resource for students seeking to master programming skills. Whether you're a beginner or an experienced coder, our expert tutors are here to guide you every step of the way.
            </p>

            <p className="text__para mt-[30px]">
              Our commitment to excellence drives us to continually enhance our platform and services. Join our community today and embark on your coding journey with confidence!
            </p>

            <Link to='/'>
                <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
