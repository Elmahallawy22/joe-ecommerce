import { Locale } from "next-intl";

export type Params = { locale: Locale };

export type RouteProps = {
  params: Params | Promise<Params>;
  searchParams: Record<string, string | string[] | undefined>;
};
