"use client";

import OnboardingForm from "@/components/onboarding-form";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [studioDetails, setStudioDetails] = useState(null);
  const [mount, setMount] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMount(true);
    setStudioDetails(localStorage.getItem("studioDetails"));
  }, []);
  if (!studioDetails && mount) {
    return <OnboardingForm />;
  }

  return <div></div>;
};

export default Page;
