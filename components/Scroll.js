import React, { useEffect } from "react";

export default function Scroll() {
  useEffect(function onFirstMount() {
    function onScroll() {
      console.log("scroll!");
    }

    window.addEventListener("scroll", onScroll);
  }, []); // empty dependencies array means "run this once on first mount"

  return null;
}
