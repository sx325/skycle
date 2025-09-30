import { notFound, redirect } from "next/navigation";
import type { JSX } from "react";
import { fetchHandle } from "@/actions/skycle";
import GeneratorPage from "@/components/pages/generator-page";
import type { ProfileDefinition } from "@/types";

type PageProps = {
  params: {
    handle: string;
  };
  searchParams: {
    period?: string | null;
  };
};

export default async function Page({
  params: { handle },
  searchParams: { period = null },
}: PageProps): Promise<JSX.Element> {
  try {
    const data: {
      own: ProfileDefinition;
      friends: ProfileDefinition[];
    } = await fetchHandle(handle, period);

    if (!data) {
      notFound();
    }

    return <GeneratorPage handle={handle} data={data} />;
  } catch (_) {
    redirect("/404");
  }
}
