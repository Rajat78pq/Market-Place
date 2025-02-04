import "../App.css";

const HeroPage = () => {
  const offerImg = [
    { id: 1, src: "50%off image" },
    { id: 2, src: "30%off image" },
    { id: 3, src: "70%off image" },
    { id: 4, src: "20%off image" },
  ];

  const category = [
    { id: 1, name: "Cloths" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Electronics" },
    { id: 4, name: "Books" },
    { id: 5, name: "Sports" },
    { id: 6, name: "Accessories" },
    { id: 7, name: "Furniture" },
    { id: 8, name: "Toys" },
    { id: 9, name: "Jewellery" },
    { id: 10, name: "Cosmetics" },
  ];
  return (
    <>
      <div className="w-full min-h-screen pt-16 px-5">
        {/* offer showcase */}
        <div className="w-full pt-5 overflow-x-auto md:overflow-visible">
          {/* Flex for small screens, Grid for medium screens and above */}
          <div className="flex flex-row gap-3 w-full flex-nowrap md:grid md:grid-cols-4 md:gap-4 md:justify-center">
            {offerImg.map((item) => (
              <div className="bg-red-500 h-[10rem] min-w-[300px] w-full p-4 rounded-md">
                {item.src}
              </div>
            ))}
          </div>
        </div>
        {/* category */}
        <div className="w-full pt-5 overflow-x-auto ">
          <div className="w-full flex flex-row gap-5 md:grid md:grid-cols-10 md:justify-center">
            {category.map((item) => (
              <div className="h-20 min-w-20 p-2 text-center bg-blue-300 text-[12px] break-words rounded-md">
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Opened shop */}
        <div className="w-full pt-5">
          <h3 className="font-bold text-lg">Opened shops</h3>
          <div className="w-full mt-2 overflow-x-auto">
            <div className="w-full flex flex-row gap-5 md:grid md:grid-cols-10 md:justify-center">
              {category.map((item) => (
                <div className="h-16 min-w-16 p-2 text-center bg-blue-300 text-[12px] break-words rounded-[50%] md:rounded-2xl">
                  {item.name}
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
