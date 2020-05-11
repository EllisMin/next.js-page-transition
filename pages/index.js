import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href="about">
        <a>Link To About</a>
      </Link>
    </div>
  );
};

export default HomePage;
