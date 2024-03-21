import { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <div className={"min-h-screen flex flex-col justify-center items-start "}>
      <form>
        <input
          className={"p-4 border border-slate-600 rounded-lg h-[30px]"}
          type="text"
          name="q"
          value={query}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((name) => (
          <li class="" key={name}>
            {name}
          </li>
        ))}
      </ul>
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Remember me</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-info ml-2"
          />
        </label>
      </div>
    </div>
  );
}
