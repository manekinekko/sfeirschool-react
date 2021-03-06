import React, { cloneElement } from "react";
import { Fab } from "@rmwc/fab";
import { range } from "../utils";

export const Carousel = ({
  currentIndex = 0,
  onChange = () => {},
  children
}) => {
  const childArray = React.Children.toArray(children);

  if (childArray.length === 0) {
    return null;
  }

  if (currentIndex >= childArray.length) {
    currentIndex = currentIndex % childArray.length;
    onChange(currentIndex);
  }

  const { pred, succ } = range(0, childArray.length - 1);
  const onPrev = () => onChange(pred(currentIndex));
  const onNext = () => onChange(succ(currentIndex));

  const cards = [
    [succ(currentIndex), "next"],
    [currentIndex, "current"],
    [pred(currentIndex), "prev"]
  ];

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={onPrev} />
      <div className="carousel">
        {cards.map(([i, className]) =>
          cloneElement(childArray[i], { className })
        )}
      </div>
      <Fab icon="skip_next" mini onClick={onNext} />
    </div>
  );
};
