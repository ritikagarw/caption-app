/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function VideoInput({ setVideoURL }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setVideoURL(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="videoInputBox">
      <div>
        <Input
          placeholder="Enter Video URL"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
          className="videoInput"
        />
        <Button colorScheme="green" type="submit" className="button">
          Load Video
        </Button>
      </div>
    </form>
  );
}

export default VideoInput;
