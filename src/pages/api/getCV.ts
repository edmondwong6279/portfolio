// API for getting the CV
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const fileBuffer = fs.readFileSync("src/pages/api/cv/Ed_Wong_CV.pdf");

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "application/pdf");
  res.send(fileBuffer);
}
