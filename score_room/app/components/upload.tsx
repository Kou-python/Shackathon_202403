import { useState } from "react";

function Upload() {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {file && <p>{file.name}</p>}
    </div>
  );
}
