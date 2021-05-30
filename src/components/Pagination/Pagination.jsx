import React, { useState, useEffect } from "react";

import styles from "./Pagination.module.css";

function Pagination({ pages = 50 }) {
  const [currentButton, setCurrentButton] = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ];
    } else if (currentButton > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 2);
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentButton]);

  return (
    <div className={styles.pagination_container}>
      <a
        href="!#"
        className={`${currentButton === 1 ? styles.disabled : ""}`}
        onClick={() =>
          setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))
        }
      >
        Prev
      </a>

      {arrOfCurrButtons.map((item, index) => {
        console.log(currentButton)
        return (
          <a
            href="!#"
            key={index}
            className={`${currentButton === item ? styles.active : ""}`}
            onClick={() => setCurrentButton(item)}
          >
            {item}
          </a>
        );
      })}

      <a
        href="!#"
        className={`${
          currentButton === numberOfPages.length ? styles.disabled : ""
        }`}
        onClick={() =>
          setCurrentButton((prev) =>
            prev >= numberOfPages.length ? prev : prev + 1
          )
        }
      >
        Next
      </a>
    </div>
  );
}

export default Pagination;
