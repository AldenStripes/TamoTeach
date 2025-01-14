import React, { useState, useEffect } from "react";

function Shop() {
  const [points, setPoints] = useState(() => {
    const savedPoints = localStorage.getItem("points");
    return savedPoints ? JSON.parse(savedPoints) : 100;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("points", JSON.stringify(points));
  }, [points]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const decreasePoints = (num) => {
    setPoints((prevPoints) => Math.max(prevPoints - num, 0));
  };

  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <button
          style={{ border: "none", background: "none" }}
          onClick={() => window.history.back()}
        >
          <img
            src={require("./images/left-arrow.PNG")}
            alt="Back"
            style={{ width: "24px", height: "24px" }}
          />
        </button>
        <h1 style={{ margin: 0 }}>Shop</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={require("./images/points.webp")}
            alt="Points"
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
          <p style={{ margin: 0 }}>{points}</p>
        </div>
      </header>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
          overflow: "hidden",
        }}
      >
        <img
          src={require("./images/Shop.PNG")}
          alt="Shop"
          style={{ width: "100%", height: "auto" }}
        />
        <button
          onClick={() => {
            openModal();
            decreasePoints(15);
          }}
          style={{
            position: "absolute",
            top: "30%",
            left: "36%",
            width: "100px", // Adjust the size of the clickable area
            height: "150px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        />
      </div>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "center",
              maxWidth: "200px", // Ensures the modal is compact
              width: "90%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={require("./images/cake-popup.PNG")}
              alt="Cake"
              style={{
                width: "100px", // Smaller popup image
                height: "auto",
              }}
            />
            <button
              onClick={closeModal}
              style={{
                marginTop: "10px",
                padding: "6px 12px",
                fontSize: "12px",
                border: "none",
                backgroundColor: "#f44336",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
