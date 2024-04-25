"use client";

import OnboardingForm from "@/components/onboarding-form";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [studioDetails, setStudioDetails] = useState(null);
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
    setStudioDetails(localStorage.getItem("studioDetails"));
  }, []);
  if (!studioDetails && mount) {
    return <OnboardingForm />;
  }
  return <div>Page</div>;
};

export default Page;
