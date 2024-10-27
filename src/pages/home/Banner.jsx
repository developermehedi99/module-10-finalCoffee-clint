import img1  from "../../assets/image/banner/1.jpg"
import img3  from "../../assets/image/banner/3.jpg"

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] pl-10  left-0  bottom-0">
          <div className="text-white">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-lg my-5">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn border-none mr-4 text-white bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white border-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] pl-10  left-0  bottom-0">
          <div className="text-white">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-lg my-5">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn border-none mr-4 text-white bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white border-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] pl-10  left-0  bottom-0">
          <div className="text-white">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-lg my-5">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn border-none mr-4 text-white bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white border-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] pl-10  left-0  bottom-0">
          <div className="text-white">
            <h2 className="text-6xl font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="text-lg my-5">
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn border-none mr-4 text-white bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn btn-outline text-white border-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;