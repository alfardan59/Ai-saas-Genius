"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1f723564-ea82-4c73-be99-a15d9962cb4d");
  }, []);

  return null;
};