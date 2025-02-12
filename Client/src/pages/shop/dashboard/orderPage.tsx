import { useState } from "react";

const OrderPage = () => {
  const [visible, setVisible] = useState(false);
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
                    onClick={() => setVisible(true)}
                  >
                    details
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {visible && (
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
            open
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn" onClick={() => setVisible(false)}>
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
