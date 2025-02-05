import {
  FaBox,
  FaHeart,
  FaTicketAlt,
  FaQuestionCircle,
  FaUserEdit,
  FaMapMarkerAlt,
  FaBell,
} from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">User Name</h3>
            <p className="text-gray-600">user@example.com</p>
            <div className="flex flex-wrap justify-center mt-4">
              <button className="btn bg-white border-gray-300 m-2">
                <FaBox className="mr-2" /> Orders
              </button>
              <button className="btn bg-white border-gray-300 m-2">
                <FaHeart className="mr-2" /> Wishlist
              </button>
              <button className="btn bg-white border-gray-300 m-2">
                <FaTicketAlt className="mr-2" /> Coupons
              </button>
              <button className="btn bg-white border-gray-300 m-2">
                <FaQuestionCircle className="mr-2" /> Help Center
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">About</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque leo nec magna fermentum, a dictum libero facilisis.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Details</h3>
            <ul className="text-gray-700">
              <li>Location: City, Country</li>
              <li>Joined: January 2021</li>
              <li>Interests: Coding, Music, Travel</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h3 className="text-xl font-semibold mb-2">Account Settings</h3>
        <div className="flex flex-col">
          <div className="flex items-center m-2">
            <FaUserEdit className="mr-2" />
            <span>Edit Profile</span>
          </div>
          <div className="flex items-center m-2">
            <FaMapMarkerAlt className="mr-2" />
            <span>Address</span>
          </div>
          <div className="flex items-center m-2">
            <FaBell className="mr-2" />
            <span>Notifications</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
