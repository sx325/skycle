import type { JSX } from "react";
import { fetchHandle } from "@/actions/skycle";
import { Hero } from "@/components/hero";
import type { ProfileDefinition } from "@/types";
import { PREVIEW_EXAMPLE_USERNAME } from "@/utils/constants";

export default async function Page(): Promise<JSX.Element> {
  const data: {
    own: ProfileDefinition;
    friends: ProfileDefinition[];
  } = await fetchHandle(PREVIEW_EXAMPLE_USERNAME, "this-year");

  return <Hero data={data} />;
}
