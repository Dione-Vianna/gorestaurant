import React, { useCallback, useRef, useState } from "react";

import { Container } from "./styles";

export const Input = ({ ...rest }) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <input onFocus={handleInputFocus} ref={inputRef} {...rest} />
    </Container>
  );
};
