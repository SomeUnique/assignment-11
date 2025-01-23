/* eslint-disable @next/next/no-img-element */




const ArrayMap = () => {
    const CarName = [
      {
        carName: "Toyota Corolla",
        price: "PK 80.6- 100.8 Lacs",
        reviews: "⭐⭐⭐⭐⭐",
        image: "/toyota-corolla-front-angle-low-view.avif",
      },
      {
        carName: "Land Cruiser",
        price: "PK 100.5-300.8 Lacs",
        reviews: "⭐⭐⭐⭐⭐",
        image: "/land cruiser.jpeg",
      },
      {
        carName: "Honda Civics",
        price: "PK  1.40 Cr",
        reviews: "⭐⭐⭐⭐⭐",
        image: "/honda civic.jpg",
      },
      {
        carName: "Mahindra Thar",
        price: "PK  5.40 Cr",
        reviews: "⭐⭐⭐⭐⭐",
        image: "/mahindra.jpg",
      },
      {
        carName: "Toyota Hilux Revo",
        price: "PK  3.40 Cr",
        reviews: "⭐⭐⭐⭐⭐",
        image: "/Toyota_Hilux_Revo_GR-S_2023_.png",
      },
    ];
  
    return (
      <div className="p-4">
        <h1 className="flex justify-center uppercase text-4xl font-semibold mt-4">
          Featuring New Cars with Array Component
        </h1>
        <div className="flex gap-4 justify-center mt-9 overflow-x-auto">
          {CarName.map((car, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-600 w-56 p-4 rounded-lg text-white"
            >
              <img
                src={car.image}
                alt={car.carName}
                className="w-full h-32 object-cover mb-7 rounded"
              />
              <h3 className="text-lg font-bold">{car.carName}</h3>
              <p>{car.price}</p>
              <p>{car.reviews}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ArrayMap;