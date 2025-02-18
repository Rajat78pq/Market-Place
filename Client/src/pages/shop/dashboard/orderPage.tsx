import { useState } from "react";

const OrderPage = () => {
  const [details, setDetails] = useState(false);
  const [track, setTrack] = useState(false);
  const OrderList = [
    {
      name: "Hart Hagerty",
      img: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      location: "India",
      product: "Macbook m3 air",
      spec: "16gb ram 512ssd",
      price: "150$",
    },
    {
      name: "Herry cotly",
      img: "https://img.daisyui.com/images/profile/demo/3@94.webp",
      location: "USA",
      product: "Macbook m3 pro",
      spec: "16gb ram 512ssd",
      price: "200$",
    },
    {
      name: "Darry mitchell",
      img: "https://img.daisyui.com/images/profile/demo/4@94.webp",
      location: "France",
      product: "iphone 20 pro",
      spec: "16gb ram 512rom",
      price: "150$",
    },
    {
      name: "sneha sen",
      img: "https://img.daisyui.com/images/profile/demo/5@94.webp",
      location: "India",
      product: "Appel Watch",
      spec: "Brand new",
      price: "100$",
    },
  ];

  return (
    <>
      <div className="overflow-x-auto mt-16">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Product</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {OrderList.map((item) => (
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">{item.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.product}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item.spec}
                  </span>
                </td>
                <td>{item.price}</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => setDetails(true)}
                  >
                    details
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {details && (
          <dialog id="" className="modal modal-bottom sm:modal-middle" open>
            <div className="modal-box">
              <h2 className="text-xl font-bold mb-4">Order Details</h2>

              {/* Customer Info */}
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h3 className="font-semibold mb-2">Customer Info</h3>
                <p>
                  <span className="font-medium">Name:</span> John Doe
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  johndoe@example.com
                </p>
                <p>
                  <span className="font-medium">Address:</span> 1234 Market St,
                  San Francisco, CA
                </p>
              </div>

              {/* Payment Status */}
              <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4">
                <h3 className="font-semibold">Payment Status</h3>
                <span className="badge badge-success">Paid</span>
              </div>

              {/* Shipping Method */}
              <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4">
                <h3 className="font-semibold">Shipping Method</h3>
                <span className="badge badge-primary">Express</span>
              </div>

              {/* Track Order Button */}
              <div className="flex justify-center">
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => {
                    setTrack(true);
                  }}
                >
                  Track Order
                </button>
              </div>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn" onClick={() => setDetails(false)}>
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        )}

        {track && (
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
            open
          >
            <div className="modal-box">
              <ul className="timeline timeline-vertical">
                <li>
                  <div className="timeline-start timeline-box">
                    First Macintosh computer
                  </div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">iMac</div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-start timeline-box">iPod</div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">iPhone</div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-start timeline-box">Apple Watch</div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn" onClick={() => setTrack(false)}>
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </>
  );
};

export default OrderPage;
