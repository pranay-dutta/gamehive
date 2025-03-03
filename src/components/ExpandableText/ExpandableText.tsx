import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>; //if children is already below limit

  const desc = expanded ? children : children.substring(0, 300) + "...";

  return (
    <Text>
      {desc}
      <Button
        onClick={() => setExpanded(!expanded)}
        size="xs"
        ms={2}
        fontWeight="bold"
        colorPalette="yellow"
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
