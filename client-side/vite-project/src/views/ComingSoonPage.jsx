import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import loaderImage from "../assets/images/loader-image.png";
import image from "../assets/images/side-login.png";

function ComingSoonPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Ganti angka 2000 dengan durasi loading yang diinginkan dalam milidetik
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container fluid className="mt-5">
      {loading ? (
        <div className="loader">
          <img src={loaderImage} alt="" style={{ width: "100%" }} />
        </div>
      ) : (
        <>
          <div
            className="text-center"
            style={{
              color: "white",
              fontSize: "2em",
              fontFamily: "'Merienda One', sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Menambahkan bayangan pada teks
            }}
          >
            Coming soon, stay tuned on andri_aan1 instagram!
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              width: "100%",
              height: "300px", // Sesuaikan tinggi dengan gambar
            }}
          >
            <img
              src={image}
              alt=""
              style={{
                width: "30%",
                position: "absolute",
                animation: "moveRandom 5s infinite", // Animasi bergerak
                marginTop: "150px"
              }}
            />
          </div>
        </>
      )}
    </Container>
  );
}

export default ComingSoonPage;
