import express, { response } from "express";
import ffmpeg from "fluent-ffmpeg";

const app = express();
app.use(express.json());

app.post("/process-video", (req, res) => {
  //Get path of input video file from request body
  const inputFilePath = req.body.inputFilePath;
  const outputFilePath = req.body.outputFilePath;

  if (!inputFilePath || !outputFilePath) {
    res
      .status(400)
      .send(
        `Bad request. Missing file path:  ${
          !outputFilePath ? "outputFilePath" : "inputFilePath"
        }`
      );
  }

  ffmpeg(inputFilePath)
    .outputOptions("-vf", "scale=640:360") //360p
    .on("end", () => {
      res.status(200).send("Processing finished successfully.");
    })
    .on("error", (err) => {
      console.log(`An error occurred: ${err.message}`);
      res.status(500).send(`Internal Server Error: ${err.message}`);
    })
    .save(outputFilePath);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Video Processing Service listening at http://localhost:${port}`);
});
