// eslint-disable-next-line react/prop-types
const ServiceCard = ({ service }) => {
    // eslint-disable-next-line react/prop-types
    const { title, price, img } = service;
    return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions ">
            <button className="btn font-bold text-[#FF3811]">price: ${price}</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceCard;