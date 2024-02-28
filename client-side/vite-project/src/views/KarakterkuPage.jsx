import React, { useState, useEffect } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import loginImage from "../assets/images/Login-image.png";
import Container from "react-bootstrap/Container";
import loaderImage from "../assets/images/loader-image.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataPersonality } from "../store/actions/personalityAction";

function KarakterkuPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [dataForm, setDataForm] = useState({
    fullname: "",
    birthDay: "",
  });

  const { personality } = useSelector((state) => state.personality);
  const personalities = personality.result;
  const product = personality.data;
  const inputDataPersonality = (e) => {
    const { value, name } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleFindPersonality = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      try {
        await dispatch(fetchDataPersonality(dataForm));
      } catch (error) {
        console.error("Error fetching personality data:", error);
      } finally {
        setLoading(false);
        resetForm(); // Panggil fungsi resetForm setelah proses submit selesai
      }
    }, 3000); // Delay loading for 3 seconds
  };

  // Fungsi untuk mereset nilai dataForm
  const resetForm = () => {
    setDataForm({
      fullname: "",
      birthDay: "",
    });
  };

  return (
    <Container fluid className="mt-5">
      <Row className="m-auto">
        <Col
          sm={4}
          className="d-flex justify-content-center align-items-center"
        >
          <Card
            style={{
              width: "90%",
              borderRadius: "10px",
              background: "rgba(33, 33, 33, 0.8)",
              color: "white",
              boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
            }}
            className="my-3"
          >
            <Card.Img variant="top" src={loginImage} alt="Login Image" />
            <Card.Body>
              <Card.Title className="text-center mb-4">
                Masukkan data kamu!
              </Card.Title>
              <Form onSubmit={handleFindPersonality}>
                <Form.Group className="mb-2">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control
                    id="fullname"
                    name="fullname"
                    value={dataForm.fullname}
                    onChange={inputDataPersonality}
                    type="text"
                    placeholder="Enter your Name"
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      borderBottom: "2px solid white",
                      color: "white",
                      outline: "none",
                    }}
                  />
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label>Tanggal Lahir</Form.Label>
                  <Form.Control
                    id="birthDay"
                    name="birthDay"
                    value={dataForm.birthDay}
                    onChange={inputDataPersonality}
                    type="date"
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      borderBottom: "2px solid white",
                      color: "white",
                      outline: "none",
                    }}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="mt-3"
                  style={{
                    width: "100%",
                    backgroundColor: "#fae19d",
                    color: "black",
                    border: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "3px 3px 8px #0d0d0d",
                  }}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Submit"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col
          sm={8}
          className="d-flex justify-content-center align-items-center"
        >
          <Card
            style={{
              width: "100%",
              borderRadius: "10px",
              background: "rgba(33, 33, 33, 0.8)",
              color: "white",
              boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
              position: "relative",
            }}
            className="my-3 d-flex justify-content-center align-items-center"
          >
            <Card.Body>
              <Card.Title className="text-center mb-4">
                Karakter Kamu
              </Card.Title>
              <Card.Text className="text-center">
                {/* Menampilkan loader atau data karakter dan produk */}
                {loading ? (
                  <img
                    src={loaderImage}
                    alt="Loading"
                    style={{
                      marginTop: "120px",
                      position: "absolute",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "300px", // Perbesar ukuran gambar loader
                      animation: "move 3s infinite", // Animasi bergerak
                    }}
                  />
                ) : (
                  <div>
                    {/* Menampilkan data karakter */}
                    {personalities && personalities.length > 0 ? (
                      personalities.map((character, index) => (
                        <div key={index}>{character}</div>
                      ))
                    ) : (
                      <div>Masukkan data untuk melihat karakter kamu</div>
                    )}

                    {/* Menampilkan data produk */}
                    {product && (
                      <div className="mt-5 d-flex justify-content-center align-items-center">
                        <Container>
                          <Row className="d-flex justify-content-center align-items-center">
                            <Col
                              sm={6}
                              className="d-flex flex-column justify-content-center align-items-center"
                              style={{
                                fontSize: "15px",
                                borderRadius: "10px",
                                background: "rgba(33, 33, 33, 0.8)",
                                boxShadow:
                                  "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
                                padding: "15px",
                              }}
                            >
                              <p
                                className=""
                                style={{
                                  fontStyle: "italic",
                                }}
                              >
                                Pintu-pintu rahasia dalam dirimu akan terbuka.
                                Energi negatif dari badanmu akan luntur.
                                Terlahir kembali menjadi pesona baru dengan
                                pancaran aura positif. Rezeki, asmara,
                                keberuntungan perlahan satu persatu menjadi
                                positif.
                              </p>
                              <div className="mb-3 ">
                                Parfume Aura {product.name} untukmu. Saatnya
                                menjadi kamu yang baru
                              </div>
                              <a
                                href={product.link}
                                target="_blank"
                                className="d-flex justify-content-center align-items-center"
                                style={{
                                  backgroundColor: "#fae19d",
                                  color: "black",
                                  border: "none",
                                  padding: "5px",
                                  borderRadius: "5px",
                                  textDecoration: "none",
                                }}
                              >
                                Buy Now
                              </a>
                            </Col>
                            <Col
                              sm={6}
                              className="d-flex justify-content-center align-items-center mt-3"
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: "300px", height: "300px" }}
                              />
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    )}
                  </div>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default KarakterkuPage;
