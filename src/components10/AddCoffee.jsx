import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to server
    fetch('http://localhost:5000/coffee',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newCoffee)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'coffee added successfully',
                icon: 'success',
                confirmButtonText: 'ok'
              })
        }
    })
  };
  return (
    <div className="mx-auto bg-[#F4F3F0] py-16 px-24">
      <h1 className="text-center text-4xl font-bold">Add New Coffee</h1>
      <p className="text-center max-w-3xl text-lg py-8 mx-auto">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>

      <form onSubmit={handleAddCoffee}>
        <div className="flex gap-6 mb-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
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
              placeholder="Photo url"
              className="input input-bordered full"
            />
          </div>
        </div>
        <div>
          <input
            className=" btn bg-[#D2B48C] btn-block"
            type="submit"
            value="Add coffee"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
