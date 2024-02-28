import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import loaderImage from "../assets/images/loader-image.png";
import Container from "react-bootstrap/Container";
import { Card, Row, Col, Button } from "react-bootstrap";

import karakterImage from "../assets/images/Karakter.png";
import pekerjaanImage from "../assets/images/Pekerjaan.png";
import pasanganImage from "../assets/images/Pasangan.png";
import jodohImage from "../assets/images/Jodoh.png";
import asmaraImage from "../assets/images/asmara.png";
import rezekiImage from "../assets/images/Rezeki.png";
import keberuntunganImage from "../assets/images/Keburuntungan.png";
import sialImage from "../assets/images/Hari Sial.png";
import karirImage from "../assets/images/karir.png";
import kesehatanImage from "../assets/images/Kesehatan.png";

// Import semua gambar yang diperlukan
const images = {
  karakterImage,
  pekerjaanImage,
  pasanganImage,
  jodohImage,
  asmaraImage,
  rezekiImage,
  keberuntunganImage,
  sialImage,
  karirImage,
  kesehatanImage,
};

// Array untuk menyimpan detail Card
const cards = [
  {
    title: "Karakterku (On Trial)",
    description:
      "Kamu akan menemukan bagaimana karakter kamu sebenarnya yang belum kamu sadari.",
    image: images.karakterImage,
    link: "/karakterku",
  },
  {
    title: "Pekerjaanku",
    description:
      "Temukan elemen apa yang cocok untuk pekerjaanmu. Dengan menemukannya, akan membuat kamu lebih mudah menuju kesuksesan.",
    image: images.pekerjaanImage,
    link: "/comingsoon",
  },
  {
    title: "Kecocokan Pasangan",
    description:
      "Jika kamu memiliki pasangan, masukkan nama kamu dan pasanganmu dan bacaaku akan memberikan jawaban apakah kamu cocok berpasangan dengannya.",
    image: images.pasanganImage,
    link: "/comingsoon",
  },
  {
    title: "Jodohku",
    description:
      "Temukan ciri-ciri orang seperti apa yang akan cocok dan menjadi jodoh kamu.",
    image: images.jodohImage,
    link: "/comingsoon",
  },
  {
    title: "Asmaraku",
    description:
      "Bacaaku akan meramalkan bagaimana keadaan asmara kamu dalam minggu ini.",
    image: images.asmaraImage,
    link: "/comingsoon",
  },
  {
    title: "Rezekiku",
    description:
      "Bacaaku akan meramalkan bagaimana keadaan rezeki kamu dalam minggu ini.",
    image: images.rezekiImage,
    link: "/comingsoon",
  },
  {
    title: "Keberuntunganku",
    description:
      "Temukan hari keberuntunganmu! Bacaaku akan memberikan ramalan hari yang baik untuk kamu. Bisa digunakan untuk memulai usaha, melamar kekasih dan lain sebagainya.",
    image: images.keberuntunganImage,
    link: "/comingsoon",
  },
  {
    title: "Kesialanku",
    description:
      "Temukan hari sialmu! Hal ini akan mempermudah kamu untuk menghindari hari-hari yang kurang baik untukmu.",
    image: images.sialImage,
    link: "/comingsoon",
  },
  {
    title: "Karirku",
    description:
      "Bacaaku akan meramalkan bagaimana keadaan karir kamu dalam minggu ini.",
    image: images.karirImage,
    link: "/comingsoon",
  },
  {
    title: "Kesehatanku",
    description:
      "Bacaaku akan meramalkan bagaimana keadaan kesehatan kamu dalam minggu ini.",
    image: images.kesehatanImage,
    link: "/comingsoon",
  },
];

function HomePage() {
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
        <Row className="justify-content-center">
          <div
            className="text-center"
            style={{
              color: "white",
              fontSize: "2em",
              fontFamily: "'Merienda One', sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Menambahkan bayangan pada teks
            }}
          >
            Jelajahi Dimensi Lain di Dalam Dirimu!
          </div>
          {cards.map((card, index) => (
            <Col
              key={index}
              md={4}
              className="my-4 d-flex justify-content-center align-items-center"
            >
              <Card
                style={{
                  borderRadius: "10px",
                  background: "rgba(33, 33, 33, 0.8)",
                  color: "white",
                  boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
                  maxWidth: "400px",
                }}
              >
                <Card.Img variant="top" src={card.image} alt={card.title} />
                <Card.Body >
                  <Card.Title
                    className="text-center mb-4"
                    style={{
                      fontSize: "1.6em",
                    }}
                  >
                    {card.title}
                  </Card.Title>
                  <div style={{ height: "100px" }} className="d-flex flex-column justify-content-center align-items-center" >
                  <Card.Text className="text-center">
                    {card.description}
                  </Card.Text>
                  </div>
                </Card.Body>
                <Card.Footer className="text-center d-flex justify-content-center" style={{ height: "70px" }}>
                  <Link to={card.link}>
                    <Button
                      variant="light"
                      style={{
                        borderRadius: "25px",
                        background: "#212121",
                        boxShadow:
                          "8px 8px 16px #0d0d0d, -8px -8px 16px #353535",
                        padding: "8px 30px", // Mengatur ukuran tombol
                        color: "white",
                      }}
                    >
                      Let's go
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default HomePage;
