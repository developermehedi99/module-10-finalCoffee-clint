import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center w-1/2 mx-auto my-12">
        <h3 className="text-[#ff3811]">Services</h3>
        <h1 className="font-bold text-[45px] my-4">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {
            services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;