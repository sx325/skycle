"use client";

import { useAtom } from "jotai/index";
import { useContext, useEffect } from "react";
import { Preview } from "@/components/konva/preview";
import { MainProviderContext } from "@/providers/main-provider";
import type { ProfileDefinition } from "@/types";
import { handleAtom, selectedVersionAtom } from "@/utils/maker-atom";

type GeneratorPageProps = {
  handle: string;
  data: {
    own: ProfileDefinition;
    friends: ProfileDefinition[];
  };
};

export default function GeneratorPage({ handle, data }: GeneratorPageProps) {
  const [, setHandle] = useAtom(handleAtom);
  const [selectedVersion, setSelectedVersion] = useAtom(selectedVersionAtom);

  const { setIsLoading } = useContext(MainProviderContext);

  useEffect((): void => {
    setIsLoading(false);
  }, [setIsLoading]);

  useEffect((): void => {
    setSelectedVersion(data);
  }, [data, setSelectedVersion]);

  useEffect((): void => {
    setHandle(handle);
  }, [handle, setHandle]);

  if (!selectedVersion) {
    return;
  }

  return <Preview version={selectedVersion} index={0} type="main" />;
}
