import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="list-disc flex flex-col gap-4">
        <li className="hover:underline">
          <Link href="/local">Local and fine grained reactivity</Link>
        </li>
        <li className="hover:underline">
          <Link href="/context">Context and Computed</Link>
        </li>
        <li className="hover:underline">
          <Link href="/global">Global and More Reactivity</Link>
        </li>
      </ul>
    </main>
  );
}
