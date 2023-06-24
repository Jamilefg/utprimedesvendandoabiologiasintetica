"use client";

import { App } from "@/components/App";
import { RoletaProvider } from "@/context/RoletaContext";

export default function Home() {
  // const {selected} =

  return (
    <RoletaProvider>
      <div>
        <App />
      </div>
    </RoletaProvider>
  );
}
