import { Button, TextArea } from "@radix-ui/themes";
import { useMemo, useState } from "react";

function App() {
  const [inputJson, setInputJson] = useState(() => {
    const url = new URL(window.location.href);
    const json = url.searchParams.get("data");

    if (json) {
      try {
        const string = atob(json);
        JSON.parse(string);

        return string;
      } catch {
        return "";
      }
    }

    return "";
  });
  const output = useMemo(() => {
    return inputJson
      .split("\n")
      .map((json) => {
        try {
          return JSON.stringify(JSON.parse(json), null, 2);
        } catch {
          return null;
        }
      })
      .filter(Boolean)
      .join("\n");
  }, [inputJson]);

  function share() {
    const url = new URL(window.location.href);
    url.searchParams.set("data", btoa(inputJson));
    navigator.clipboard.writeText(url.toString());
  }

  function copy() {
    navigator.clipboard.writeText(output);
  }

  return (
    <div className="grid grid-rows-[60px,auto] w-screen h-screen">
      <div className="flex gap-4 justify-center items-center p-4 w-full">
        <Button
          disabled={!inputJson.length}
          className="mt-4"
          variant="ghost"
          onClick={share}
        >
          Share
        </Button>
        <Button className="mt-4" onClick={copy}>
          Copy
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        <div>
          <TextArea
            className="h-full"
            onChange={(e) => setInputJson(e.target.value)}
            value={inputJson}
            placeholder="Paste JSON here"
          ></TextArea>
        </div>
        <div>
          <TextArea
            className="h-full"
            placeholder="Output here. Empty lines are ignored. Invalid json is ignored too"
            readOnly
            value={output}
          ></TextArea>
        </div>
      </div>
    </div>
  );
}

export default App;
