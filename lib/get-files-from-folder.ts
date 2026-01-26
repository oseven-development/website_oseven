import fs from "fs";
import path from "path";

interface Steps {
  type: "steps";
  variant: "light" | "dark";
  props: {
    headline: "headline";
    subline: "subline";
    steps: [
      {
        headline: "headline";
        subline: "subline";
      },
      {
        headline: "headline";
        subline: "subline";
      },
    ];
  };
}
type X = Steps;

interface FileContent {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
  sections: X[];
}

export function getFilesFromFolder(folder: string) {
  const directoryPath = path.join(process.cwd(), `data/${folder}`);

  // Get all files ending in .json
  const filenames = fs.readdirSync(directoryPath);

  return filenames.map((filename) => {
    const filePath = path.join(directoryPath, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");

    return {
      slug: filename.replace(".json", ""), // "post-1.json" -> "post-1"
      content: JSON.parse(fileContent) as FileContent,
    };
  });
}
