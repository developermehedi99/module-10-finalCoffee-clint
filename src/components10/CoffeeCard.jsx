import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const CoffeeCard = ({ coffee }) => {
    // eslint-disable-next-line react/prop-types
    const { name, quantity, supplier, category, details, photo, _id } = coffee;
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side bg-[#F5F4F1] shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex ml-5 justify-between w-full">
                <div className="text-left">
                    <h2 className="card-title">{name}</h2>
                    <p>{supplier}</p>
                    <p>{quantity}</p>
                    <p>{details}</p>
                    <p>{category}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical">
                        <button className="btn my-2 bg-slate-500 join-item">view</button>
                        <Link to={`updateCoffee/${_id}`}>
                        <button className="btn my-2 bg-[#D2B48C] join-item">edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn my-2 bg-[#EA4744] join-item">delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;