"use client";

import { useRouter } from "next/navigation";
import React from "react";

const SigninRedirectLink = () => {
  const { push } = useRouter();

  return (
    <h1 className="font-normal">
      Already have an account ? <br />
      Click on{" "}
      <span
        onClick={() => push("/auth/sign-in")}
        className="underline text-blue-800 cursor-pointer"
      >
        sign in
      </span>
    </h1>
  );
};

export default SigninRedirectLink;
