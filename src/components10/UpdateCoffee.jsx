import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { name, quantity, supplier, taste, category, details, photo, _id } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);

    // send data to server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully!",
            text: "Coffee update is done",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="mx-auto bg-[#F4F3F0] py-16 px-24">
      <h1 className="text-center text-4xl mb-6 font-bold">
        Update coffee on : {name}
      </h1>
      <form onSubmit={handleUpdateCoffee}>
        <div className="flex gap-6 mb-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="add coffee name"
              className="input input-bordered full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Available quantity
              </span>
            </label>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="available quantity"
              className="input input-bordered full"
            />
          </div>
        </div>
        <div className="flex gap-6 mb-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Enter coffee Supplier"
              className="input input-bordered full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Taste"
              className="input input-bordered full"
            />
          </div>
        </div>
        <div className="flex gap-6 mb-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold">Category</span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="add coffee category"
              className="input input-bordered full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold">Details</span>
            </label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Details"
              className="input input-bordered full"
            />
          </div>
        </div>
        <div className=" mb-4">
          <div className="form-control full">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                photo url
              </span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo url"
              className="input input-bordered full"
            />
          </div>
        </div>
        <div>
          <input
            className=" btn bg-[#D2B48C] btn-block"
            type="submit"
            value="Update coffee"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
