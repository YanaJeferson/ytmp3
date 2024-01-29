import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Descriptions = () => {
  return (
    <>
      <Container className="text-center py-10">
        <h2 className="text-xl md:text-2xl font-semibold pb-3">
          MP3YT: Free YouTube Converter
        </h2>
        <h4>
          Experience the speed and efficiency of the fastest MP3 converter to
          download your favorite videos. Without annoying ads and compatible
          with all YouTube MP3 or YouTube MP4 devices.
        </h4>
      </Container>

      <div className=" container mx-auto">
        <Container fluid>
          <Row className="flex-row justify-center">
            <Col xs={12} md={4} className="mb-4">
              <Card border="primary">
                <Card.Header className="flex justify-center bg-transparent border-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-music-player-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm1 2h6a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m3 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                </Card.Header>
                <Card.Body>
                  <Card.Title>YOUTUBE CONVERTER: FAST AND FREE</Card.Title>
                  <Card.Text>
                    Convert YouTube videos to MP3 in just 2 clicks, at no cost
                    and in the format of your choice: MP3, MP4, and more.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="mb-4">
              <Card border="secondary">
                <Card.Header className="flex justify-center bg-transparent border-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-file-earmark-lock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 7a1 1 0 0 1 2 0v1H7zM6 9.3c0-.042.02-.107.105-.175A.64.64 0 0 1 6.5 9h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.64.64 0 0 1 9.5 12h-3a.64.64 0 0 1-.395-.125C6.02 11.807 6 11.742 6 11.7z" />
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0" />
                  </svg>
                </Card.Header>
                <Card.Body>
                  <Card.Title>SAFE DOWNLOAD: NO SERVER STORAGE</Card.Title>
                  <Card.Text>
                    Download YouTube videos securely in MP3 or MP4 format. We do
                    not store any media on our servers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="mb-4">
              <Card border="success">
                <Card.Header className="flex justify-center bg-transparent border-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-infinity"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z" />
                  </svg>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    UNLIMITED: DOWNLOAD AS MANY VIDEOS AS YOU WANT
                  </Card.Title>
                  <Card.Text>
                    Download YouTube videos without restrictions or intrusive
                    ads.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="mb-4">
              <Card border="danger">
                <Card.Header className="flex justify-center bg-transparent border-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-people-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                  </svg>
                </Card.Header>
                <Card.Body>
                  <Card.Title>NO REGISTRATION REQUIRED</Card.Title>
                  <Card.Text>
                    Whether you upload a video to YouTube or other platforms, no
                    registration is needed.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="mb-4">
              <Card border="warning">
                <Card.Header className="flex justify-center bg-transparent border-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-phone-landscape-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 12.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm11-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                  </svg>
                </Card.Header>
                <Card.Body>
                  <Card.Title>FULL COMPATIBILITY</Card.Title>
                  <Card.Text>
                    MP3YT, a free MP3 and MP4 converter, ensures the creation of
                    a Shorts MP3 and MP4 format compatible with all devices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Descriptions;
