"use client";

import React, { useEffect } from "react";
import OnboardingForm from "../onboarding/_components/onboarding-form";
import { industries } from "@/data/industries";
import { deleteIndustry } from "@/actions/user";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const UpdateIndustry = () => {
  const router = useRouter();

  useEffect(() => {
    const run = async () => {
      const result = await deleteIndustry();

      if (!result?.success) {
        toast.error("Unable to complete request. Please try again");
      }
      router.replace("/dashboard");
    };

    run();
  }, []);

  return (
    <div>
      <OnboardingForm industries={industries} />
    </div>
  );
};

export default UpdateIndustry;
