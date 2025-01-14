import React, { useState, useEffect } from "react";
import i1 from "./images/newbattle.GIF";
import i2 from "./images/Dead.GIF";

function Battle() {
  const [points, setPoints] = useState(() => {
    const savedPoints = localStorage.getItem("points");
    return savedPoints ? JSON.parse(savedPoints) : 100;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [win, setWin] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const rightAnswer = () => {
    setWin(true);
    setIsModalOpen(false);
    setIndex(1);
  };
  const images = [i1, i2];

  useEffect(() => {
    localStorage.setItem("points", JSON.stringify(points));
  }, [points]);

  return (
    <div>
      {/* Header Section */}
      <header style={{ display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#f5f5f5" }}>
        <button style={{ border: "none", background: "none" }} onClick={() => window.history.back()}>
          <img
            src={require(`./images/left-arrow.PNG`)}
            alt="Back"
            style={{ width: "24px", height: "24px" }}
          />
        </button>
        <h1 style={{ margin: 0 }}>Battle</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={require("./images/points.webp")}
            alt="Points"
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
          <p style={{ margin: 0 }}>{points}</p>
        </div>
      </header>

      {/* Battle Background */}
      <div style={{ position: "relative", width: "100%", height: "auto", overflow: "hidden" }}>
        <img src={images[index]} alt="Battle Scene" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <button
          onClick={openModal}
          style={{
            position: "absolute",
            top: "60%",
            left: "30%",
            width: "150px",
            height: "50px",
            background: "red",
            border: "none",
            cursor: "pointer",
          }}
        >
          Attack
        </button>
      </div>

      {/* Question Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "10%",
            height: "10%",
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
              maxWidth: "300px", // Adjust modal width
              width: "90%",
            }}
          >
            <img
              src={require("./images/Question.PNG")}
              alt="Question"
              style={{
                width: "100px", // Force smaller image size
                height: "auto", // Maintain aspect ratio
                maxWidth: "100%", // Prevent overflow
              }}
            />
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={closeModal}
                style={{
                  padding: "5px 10px",
                  fontSize: "12px",
                  backgroundColor: "#f44336",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Battle;
