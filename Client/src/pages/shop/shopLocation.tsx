import location from "../../assets/imgs/location.png";
import { motion } from "framer-motion";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface JWTPayload {
  email: string;
  role: string;
  userId: string;
}

const ShopLocation = () => {
  // const [currentShop, setCurrentShop] = useState();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const queryClient = useQueryClient();
  const shop_id: number = queryClient.getQueryData(["currentShop"])?.shopId;
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (latitude === 0 && longitude === 0) {
      handleLocation();
    }
  }, [latitude, longitude]);

  // console.log(shopId, currentLocation);

  const handleLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    console.log(latitude, longitude, shop_id);
  };

  const handelSubmit = async () => {
    const token = localStorage.getItem("token");
    const user: JWTPayload = jwtDecode(token as string);
    const result = await fetch("http://localhost:3000/api/shop/location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        latitude,
        longitude,
        shop_id: shop_id,
        user_id: user.userId,
      }),
    });

    if (!result.ok) {
      const errorData = await result.json();
      throw new Error(errorData.message || "Registration failed");
    }
    const dataLog = await result.json();
    if (dataLog.token) {
      localStorage.setItem("token", dataLog.token);
    }
    console.log(dataLog.token);
    return dataLog;
  };

  const shopLocationMutation = useMutation({
    mutationFn: handelSubmit,
    onSuccess: () => {
      console.log("Registration successful");
      if (modalRef.current) {
        (modalRef.current as HTMLDialogElement).showModal();
      }
    },
    onError: () => {
      console.log("Registration failed");
    },
  });

  return (
    <div className="hero bg-base-200 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-5xl font-bold">Let Customers Find You!</h1>
        <p className="py-6">
          Share your shop's location and watch your business grow faster than
          your morning chai disappears! 🚀
        </p>
        <div className="relative flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="p-5 rounded-lg shadow-md lg:w-2/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
            <h3 className="text-xl font-bold">Shop Location</h3>
            <div className="text-sm mt-2">
              We will provide your location to your efficient customers.
            </div>
          </div>

          {/* Button */}
          <button
            className="btn btn-primary lg:absolute lg:right-5 lg:top-10 mt-6 lg:mt-0"
            onClick={() => {
              handleLocation();
              shopLocationMutation.mutate();
            }}
          >
            Share Your Location
          </button>

          {/* Animated Image */}
          <motion.img
            src={location}
            alt="Shop Location"
            className="rounded-md h-32 w-32 mt-4 lg:mt-0"
            initial={{ x: 0, y: 0, scale: 1 }}
            whileInView={{
              x: window.innerWidth < 1024 ? 0 : 200, // Move right only on large screens
              y: window.innerWidth < 1024 ? 50 : 0, // Move down on mobile screens
              scale: 0.8, // Shrink a bit
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              duration: 1.2,
            }}
          />
        </div>

        <dialog ref={modalRef} id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Congratulation 🎉</h3>
            <p className="py-4">
              Finally your shop is visible to the customers. Now you can start
              selling your products.
            </p>
            <div className="modal-action">
              <form method="dialog" className="flex gap-2">
                {/* if there is a button in form, it will close the modal */}
                <Link to="/shop/dashboard" className="btn">
                  Go to Dashboard 🛍️
                </Link>
                <button
                  className="btn"
                  onClick={() => {
                    (modalRef.current as HTMLDialogElement).close();
                  }}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ShopLocation;
