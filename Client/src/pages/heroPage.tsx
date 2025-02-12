import "../App.css";
import {
  FaTshirt,
  FaHatCowboy,
  FaLaptop,
  FaBook,
  FaFootballBall,
  FaGem,
  FaCouch,
  FaPuzzlePiece,
  FaRing,
  FaPaintBrush,
  FaArrowRight,
} from "react-icons/fa";

const HeroPage = () => {
  const offerImg = [
    {
      id: 1,
      src: "https://imgs.search.brave.com/eTPup4jFXQfQo--sNgSfGh_Vnn2fUstJ6dgEohj1SVI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLWNk/bi5waG9uZWFyZW5h/LmNvbS9pbWFnZXMv/cmV2aWV3cy8yNjE3/NDctaW1hZ2UvaVBo/b25lLTE2LVByby12/cy0xNi1jYW1lcmFz/LTIuanBn",
    },
    {
      id: 2,
      src: "https://imgs.search.brave.com/eNy-Hq8tUIuxeH_WVGkGYAspCqwL5F2lqE0ZEawFi6o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwbGUuY29tL3Yv/aXBob25lL2hvbWUv/Y2EvaW1hZ2VzL292/ZXJ2aWV3L2NvbnNp/ZGVyX21vZGFscy9k/ZXNpZ25lZC10by1s/YXN0L21vZGFsX2xh/c3RfX2NyMGx4MDY5/dnp1Nl9sYXJnZS5q/cGc",
    },
    {
      id: 3,
      src: "https://imgs.search.brave.com/yURpdkUC2bo7H1nukJA2OQ7TXBnaQVlt-bRPlH7eD_o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzk4LzMwLzg3/LzM2MF9GXzM5ODMw/ODc5NV9OOTZNaHl2/R215anRmRm9GRDdy/aHNaYVVORk1tQkFN/Ty5qcGc",
    },
    {
      id: 4,
      src: "https://imgs.search.brave.com/4x7kPuyBFa5c351OYnWSysq1qG0QX6Sq8noZXEFsAH8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZWRlbGl2ZXJ5Lm5l/dC82ZlBVU05jUWhv/RWU0bmRZbEZPRDZ3/L2QyZWNiMjUyLWMz/MmUtNDQ2ZS04Njc0/LTI3NGMyMDU5ZGUw/MC9lbWFpbDYwMA",
    },
  ];

  const category = [
    {
      id: 1,
      name: "Cloths",
      icon: <FaTshirt />,
      bgColor: "bg-blue-100",
    },
    {
      id: 2,
      name: "Fashion",
      icon: <FaHatCowboy />,
      bgColor: "bg-pink-100",
    },
    {
      id: 3,
      name: "Electronics",
      icon: <FaLaptop />,
      bgColor: "bg-yellow-100",
    },
    { id: 4, name: "Books", icon: <FaBook />, bgColor: "bg-green-100" },
    {
      id: 5,
      name: "Sports",
      icon: <FaFootballBall />,
      bgColor: "bg-red-100",
    },
    {
      id: 6,
      name: "Accessories",
      icon: <FaGem />,
      bgColor: "bg-purple-100",
    },
    {
      id: 7,
      name: "Furniture",
      icon: <FaCouch />,
      bgColor: "bg-orange-100",
    },
    { id: 8, name: "Toys", icon: <FaPuzzlePiece />, bgColor: "bg-teal-100" },
    {
      id: 9,
      name: "Jewellery",
      icon: <FaRing />,
      bgColor: "bg-indigo-100",
    },
    {
      id: 10,
      name: "Cosmetics",
      icon: <FaPaintBrush />,
      bgColor: "bg-pink-200",
    },
  ];

  const onlyForYou = [
    {
      id: 1,
      name: "Zen g Shirts",
      img: "https://imgs.search.brave.com/W2dSkrQiCLtIKoGCtrgWZUaA7VBUInw-V-oPyQ2pI-s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/b25wb2ludGZyZXNo/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wNS9kMjZj/ZmI4ZjA3ZGYxMjI2/OWQ5ZTdlNDM5NTIz/OGU0ZC5qcGc",
    },
    {
      id: 2,
      name: "Most Trending Shirts",
      img: "https://imgs.search.brave.com/_S2FI0BVwYWEh35fmQtMM9fx1H7yia127Em-6S_syxY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVkLzJl/LzljLzVkMmU5Y2Nl/YjBkNTRmYTg4NjM0/OTQxNzIwNWEzMDMy/LmpwZw",
    },
    {
      id: 3,
      name: "Best Selling MacBook M3 Air",
      img: "https://imgs.search.brave.com/qHWbQbcdcgjIcEmAZohe6fRVRlaDWuKhp0FcoEmuSBA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBj/bWFnLmNvbS9pbWFn/ZXJ5L3Jldmlld3Mv/MDJkaVB1bDFIclZL/cHNEUjNER3FKVXct/MS5maXRfc2NhbGUu/c2l6ZV83NjB4NDI3/LnYxNzA5NzcwOTcx/LmpwZw",
    },
    {
      id: 4,
      name: "Product 4",
      img: "https://imgs.search.brave.com/AP0N96n5nqYNd18ayERBQUgpoIxhR9b_o3iYfoJ763A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iZ3Iu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA5L2lQaG9u/ZS0xNi1wcm8tNS5q/cGc_cXVhbGl0eT04/MiZzdHJpcD1hbGw",
    },
  ];

  const onlyForGirls = [
    {
      id: 1,
      name: "Girls Product 1",
      img: "https://imgs.search.brave.com/Re4kI5telFsGzxTIRQjctQPCrqlZEwxHc8YaraDPKsY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAx/ODIvMTQ3MS81NDcw/L3Byb2R1Y3RzLzEx/NzZfOGJlNzY0OTct/NDBhZC00NGQ1LTgy/YTMtZmJiNjhlZWI1/MDM5XzE1MDB4MTUw/MC5qcGc_dj0xNjY2/Nzg3NTAw",
    },
    {
      id: 2,
      name: "Girls Product 2",
      img: "https://imgs.search.brave.com/Q-HZHKNFytZ-_-KAZowGbtvKEzrPHmU1euTci5oQj7Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGF0a2F5LmNvbS9j/ZG4vc2hvcC9maWxl/cy9icmFxbmQtbWFz/dGVyXzEuanBnP3Y9/MTY1NTM4MjUyNw",
    },
    {
      id: 3,
      name: "Girls Product 3",
      img: "https://imgs.search.brave.com/XA3bQAgbENSZdN_ZWcOFYeaBm8Fkm54pqyjklzf9pSU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTFFS0RVV1cxeUwu/anBn",
    },
    {
      id: 4,
      name: "Girls Product 4",
      img: "https://imgs.search.brave.com/AZu6QcUpWeKPjpS6LPYhAIBlyIcUMTnHsvCsH48IN_w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFwTFhSUEN0U0wu/anBn",
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen pt-16 pb-5 px-5">
        {/* offer showcase */}
        <div className="w-full pt-5 overflow-x-auto md:overflow-visible">
          {/* Flex for small screens, Grid for medium screens and above */}
          <div className="flex flex-row gap-3 w-full flex-nowrap md:grid md:grid-cols-4 md:gap-4 md:justify-center">
            {offerImg.map((item) => (
              <div
                key={item.id}
                className="h-[10rem] min-w-[300px] w-full rounded-md"
              >
                <img
                  src={item.src}
                  alt={`Offer ${item.id}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
        {/* category */}
        <div className="w-full pt-5 overflow-x-auto">
          <div className="w-full flex flex-row gap-5 md:grid md:grid-cols-10 md:justify-center">
            {category.map((item) => (
              <div
                key={item.id}
                className={`h-20 min-w-20 p-2 text-center ${item.bgColor} text-[12px] break-words rounded-md flex flex-col items-center justify-center shadow-md`}
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Opened shop */}
        <div className="w-full pt-5">
          <h3 className="font-bold text-lg">Opened shops</h3>
          <div className="w-full mt-2 overflow-x-auto">
            <div className="w-full min-h-24 flex flex-row gap-5 md:gap-8 md:grid md:grid-cols-10 md:justify-center">
              {category.map((item) => (
                <div
                  key={item.id}
                  className="h-16 min-w-16 p-2 text-center bg-blue-300 text-[12px] break-words rounded-[50%] md:rounded-2xl"
                >
                  <div className="w-full h-full mb-1"></div>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Only For Boys and Only For Girls */}
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 mt-6">
          {/* Only For Boys */}
          <div className="w-full bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg p-6 lg:p-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold lg:text-2xl">
                Only For Boys
              </h3>
              <button className="text-blue-500 lg:text-lg">
                <FaArrowRight />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 lg:gap-6">
              {onlyForYou.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center lg:p-6"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-32 object-cover rounded-md mb-2 lg:h-60"
                  />
                  <h4 className="text-sm font-semibold lg:text-base">
                    {item.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Only For Girls */}
          <div className="w-full bg-gradient-to-b from-pink-100 to-pink-200 rounded-lg p-6 lg:p-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold lg:text-2xl">
                Only For Girls
              </h3>
              <button className="text-pink-500 lg:text-lg">
                <FaArrowRight />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 lg:gap-6">
              {onlyForGirls.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center lg:p-6"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-32 object-cover rounded-md mb-2 lg:h-60"
                  />
                  <h4 className="text-sm font-semibold lg:text-base">
                    {item.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
