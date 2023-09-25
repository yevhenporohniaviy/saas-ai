"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("64887186-8c2b-433c-abdb-fddfd3abd2dd");
  }, []);

  return null;
};
