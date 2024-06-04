import React from "react";
import styled from "styled-components";

type Props = {
  symbol: any;
  label: string;
  padding: string;
  emojiSize: string;
};

const EmojiWrapper = styled.span`
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.emojiSize};
`;

const Emoji = ({ symbol, label, padding, emojiSize }: Props) => (
  <EmojiWrapper
    role="img"
    aria-label={label ? label : ""}
    padding={padding}
    emojiSize={emojiSize}
  >
    {symbol}
  </EmojiWrapper>
);

export default Emoji;
