import "../App.css";
import { ReactTyped } from "react-typed";
import { GiGate } from "react-icons/gi";

const Hero = () => {
  return (
    <div
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-6 bg-zinc-900 text-white"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left Text */}
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 text-center md:text-left">
          <span className="font-bold">Welcome, to Mili Fabrication</span>
          <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1 className="ml-14 md:ml-0 font-bold text-lg md:text-3xl">Hello,We are </h1>
            <ReactTyped
              className="text-yellow-700 font-bold text-lg md:text-3xl"
              strings={[
                "Best in Fabrication",
                "Wholseller",
                "Provide Best Quality",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <br />
          <p className="md:text-md text-justify md:text-[17px] md:w-[80%]">
            At Mili Enterprise, we are dedicated to delivering top-tier
            fabrication solutions tailored to meet your unique business needs.
            With a commitment to excellence and innovation, we specialize in
            providing high-quality fabrication services that combine precision
            engineering with superior craftsmanship.
          </p>
          <br /> <br />
         
        </div>
        {/* Right Image */}
        <div className="md:w-1/2 order-1">
          <img
            src="newlogo.png"
            className="md:h-[450px] md:ml-10 mt-8 rounded-full hover:scale-105 duration-200"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
