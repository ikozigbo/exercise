import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollbar = ({ data, bodypart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40pxs"
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodypart={bodypart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
