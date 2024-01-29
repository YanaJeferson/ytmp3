import React, { useEffect, useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import ProgressBar from "react-bootstrap/ProgressBar";

const FormsInput = () => {
  const [url, setUrl] = useState("");
  const [formato, setFormato] = useState("mp3");
  const [defaultFormato, setDefaultFormato] = useState("mp3");
  const [videoId, setVideoId] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleInput = (event) => {
    setUrl(event.target.value);
  };

  const handleFormato = (value) => {
    setFormato(value);
  };

  const getVideoId = () => {
    const patrones = [
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
      /^([a-zA-Z0-9_-]{11})$/,
    ];

    for (const patron of patrones) {
      const coincidencia = url.match(patron);
      if (coincidencia) {
        return coincidencia[1];
      }
    }
    return null;
  };

  const handleDownload = async (downloadType) => {
    const id = getVideoId();
    if (id) {
      setVideoId(id);
      setLoading(true);

      try {
        // Simulating a download with progress updates
        for (let i = 0; i <= 100; i += 10) {
          setProgress(i);
          await new Promise((resolve) => setTimeout(resolve, 500));
        }

        const downloadLink = document.createElement("a");
        downloadLink.href = `https://143.198.78.133:8443/download${downloadType}/${id}`;
        downloadLink.download = `${id}.${formato}`;

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } catch (error) {
        console.error("Error during download:", error);
      } finally {
        setLoading(false);
        setProgress(0);
      }
    }
  };

  const handleDownloadVideo = () => {
    handleDownload("-video");
  };

  useEffect(() => {
    const id = getVideoId();
    if (id) {
      setVideoId(id);
    }
  }, [url]);

  useEffect(() => {
    if (!formato) {
      setFormato(defaultFormato);
    }
  }, [defaultFormato, formato]);

  return (
    <>
      <div id="imagen-backgroud">
        <Container className="flex-col text-center py-10 md:py-20">
          <h1 className="text-xl md:text-5xl font-bold pb-3">
            YouTube to MP3 Converter
          </h1>
          <p>Optimized video converter to MP3 and MP4 formats from YouTube!</p>
        </Container>

        <Container className="flex justify-center rounded-sm shadow-md">
          <Row className="py-3  flex justify-center  sm:w-[600px]">
            <Col xs={7} xl={9} className="flex justify-start align-middle">
              <FloatingLabel
                controlId="floatingInput"
                label="Enter the YouTube URL:"
                className="w-full text-gray-500 text-sm"
              >
                <Form.Control
                  type="text"
                  placeholder="https://www.youtube.com/watch?v="
                  className="w-full"
                  value={url}
                  onChange={handleInput}
                />
              </FloatingLabel>
            </Col>
            <Col
              className="flex gap-2"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Select
                aria-label="descargar"
                className="h-10 pr-5 text-sm"
                value={formato}
                onChange={(event) => handleFormato(event.target.value)}
              >
                <option value="mp3">MP3</option>
                <option value="mp4">Mp4</option>
              </Form.Select>
              <Button
                variant="outline-primary"
                className="h-10"
                onClick={
                  formato === "mp4"
                    ? handleDownloadVideo
                    : () => handleDownload("")
                }
                disabled={loading}
              >
                {loading ? (
                  <Spinner
                    animation="border"
                    role="status"
                    className="h-5 w-5"
                  ></Spinner>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-download"
                    id="descargar"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                  </svg>
                )}
              </Button>
            </Col>
            <ProgressBar
              className={`my-4 h-6 ${loading ? "" : "d-none"}`}
              now={progress}
              label={`${progress}%`}
            />
          </Row>
        </Container>

        {videoId && (
          <Container className="flex justify-center py-5">
            <iframe
              className="rounded-xl"
              width="400"
              height="200"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video  convert mp3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Container>
        )}
      </div>
    </>
  );
};

export default FormsInput;
