import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div className={"text-3xl"}>Hello {props.params.name}</div>;
}
