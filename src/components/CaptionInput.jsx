/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function CaptionInput({ setCaptions }) {
  const [captionText, setCaptionText] = useState("");
  const [startTimestamp, setStartTimestamp] = useState("");
  const [endTimestamp, setEndTimestamp] = useState("");

  const handleAddCaption = () => {
    setCaptions((prev) => [
      ...prev,
      { text: captionText, startTime: startTimestamp, endTime: endTimestamp },
    ]);
    setCaptionText("");
    setStartTimestamp("");
    setEndTimestamp("");
  };

  return (
    <div className="captionInputBox">
      <div>
        <Input
          placeholder="Enter Caption"
          value={captionText}
          onChange={(e) => setCaptionText(e.target.value)}
          required
          className="captionInput"
        />
        <div className="captionTimeBox">
          <Input
            placeholder="Enter start time (In seconds)"
            type="number"
            value={startTimestamp}
            onChange={(e) => setStartTimestamp(e.target.value)}
            required
            className="captionTimeInput"
          />
          <Input
            placeholder="Enter end time (In seconds)"
            type="number"
            value={endTimestamp}
            onChange={(e) => setEndTimestamp(e.target.value)}
            required
            className="captionTimeInput"
          />
          <Button
            onClick={handleAddCaption}
            colorScheme="blue"
            className="button"
          >
            Add Caption
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CaptionInput;
