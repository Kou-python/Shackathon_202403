import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { createWriteStream } from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};
type Data = {
  msg?: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") return;

  const form = formidable({ multiples: true, uploadDir: __dirname });

  form.onPart = (part) => {
    // let formidable handle only non-file parts
    if (part.originalFilename === "" || !part.mimetype) {
      // used internally, please do not override!
      form._handlePart(part);
    } else if (part.originalFilename) {
      // 以下でファイルを書き出ししている

      console.log(part.name);
      // /public/imagesディレクトリがないと正常に動かないので作成すること
      const path =
        "./public/images/" + new Date().getTime() + part.originalFilename;
      const stream = createWriteStream(path);
      part.pipe(stream);

      part.on("end", () => {
        console.log(part.originalFilename + " is uploaded");
        stream.close();
      });
    }
  };

  // input[type="file"]以外の値はここから見れた
  form.on("field", (name, value) => {
    console.log(name);
    console.log(value);
  });

  // これを実行しないと変換できない
  form.parse(req);

  // これでもinput[type="file"]以外の値はここから見れるが、fileは見れない
  // form.parse(req, async (err, fields, files) => {
  //   console.log("fields:", fields); // { name: '*'}
  //   console.log("files:", files); // {}

  //   res.status(200).json({ name: "!!!" });
  // });

  // レスポンス
  res.status(200).json({ msg: "success!!" });
}
