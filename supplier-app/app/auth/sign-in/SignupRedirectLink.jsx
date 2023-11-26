"use client";

import { useRouter } from "next/navigation";
import React from "react";

const SignupRedirectLink = () => {
  const { push } = useRouter();

  return (
    <h1 className="font-normal">
      Didn't have an account ? <br />
      Click on{" "}
      <span
        onClick={() => push("/auth/sign-up")}
        className="underline text-blue-800 cursor-pointer"
      >
        sign up
      </span>
    </h1>
  );
};

export default SignupRedirectLink;
