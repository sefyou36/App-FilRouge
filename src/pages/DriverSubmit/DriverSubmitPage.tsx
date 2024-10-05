"use client";

import DriverForm from "@/components/DriverForm/DriverForm";
import ShortBackground from "@/components/ShortBackground/ShortBackground";
import React from "react";

function DriverSubmitPage() {
  return (
    <>
      <ShortBackground
        title="Submit Your Driver"
        background="/images/hero_driver.jpg"
      />
      <DriverForm
        onSubmit={(formData) => {
          console.log(formData);
        }}
      />
    </>
  );
}

export default DriverSubmitPage;
