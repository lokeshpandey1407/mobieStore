import React from "react";
import "./Accessories.css";
const Accessories = () => {
  const [accessoriesData, setAccessoriesData] = React.useState([]);
  const [isAccessoreisLoading, setIsAccessoriesLoading] = React.useState(false);

  const fetchData = async () => {
    setIsAccessoriesLoading(true);
    const response = await fetch("Data/accessoriesData.json");
    const data = await response.json();
    setAccessoriesData(data.accessoriesData);
    setIsAccessoriesLoading(false);
    console.log(data.accessoriesData);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="accessories-section">
        <div className="accessories-container">
          <nav className="accessories-navbar">
            <h3>Accessories</h3>
            <div className="accessories-categories">
              <button>All</button>
              <button>Earphones</button>
              <button>Data Cable</button>
              <button>Pen drive</button>
            </div>
          </nav>
          <div className="accessories">
            {accessoriesData.map((data, index) => {
              return (
                <div key={index} className="accessory-item">
                  <img src={data.image} alt={data.title} />
                  <p>{data.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Accessories;
