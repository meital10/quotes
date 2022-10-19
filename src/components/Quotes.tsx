import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  QuoteContainer,
  QuoteText,
  QuoteAuthor,
} from "./styles/QuoteContainer.styles";
import { Button } from "./styles/Button.styles";
import { AppContainer } from "./styles/AppContainer.styles";

export const Quotes: React.FC = () => {
  const [quotes, setQuotes] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const quoteRef = useRef();

  let colors = [
    "#0000e6",
    "#99004d",
    "#00802b",
    "#994d00",
    "#cc00cc",
    "#4d004d",
    "#ff884d",
  ];

  const quotesApi = async () => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get("https://api.quotable.io/random");
      arrayOfQuotes = data.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }

    try {
      setQuotes(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    quotesApi();
  }, []);

  useEffect(() => {
    quoteRef.current.style.color =
      colors[Math.floor(Math.random() * colors.length)];
  }, [quotes]);

  return (
    <AppContainer>
      <QuoteContainer>
        <QuoteText ref={quoteRef}> "{quotes}"</QuoteText>

        <QuoteAuthor> ~{author}~ </QuoteAuthor>
        <Button onClick={quotesApi}>Get Quote</Button>
      </QuoteContainer>
    </AppContainer>
  );
};
