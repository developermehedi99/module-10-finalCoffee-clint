import image2 from "../../assets/image/banner/1.jpg"
import image1  from "../../assets/image/banner/3.jpg"
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative">
          <img src={image1} className="w-2/4 rounded-lg shadow-2xl" />
          <img
            src={image2}
            className="w-1/3 absolute top-1/2 border-8 border-white right-[360px] rounded-lg shadow-2xl"
          />
        </div>
        <div>
          <p className="text-xl text-[#ff3811]">About Us</p>
          <h1 className="text-[45px] font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="pt-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>

          <button className="btn btn-primary">Get More info</button>
        </div>
      </div>
    </div>
  );
};

export default About;