"use client";

import { AppScreen } from "@/components/app-screen";
import { Preview } from "@/components/konva/preview";
import type { ProfileDefinition } from "@/types";

type AppDemoProps = {
  data: {
    own: ProfileDefinition;
    friends: ProfileDefinition[];
  };
};

export function AppDemo({ data }: AppDemoProps) {
  return (
    <AppScreen>
      <AppScreen.Body className="relative overflow-hidden">
        <Preview version={data} index={0} type="version" />
      </AppScreen.Body>
    </AppScreen>
  );
}
