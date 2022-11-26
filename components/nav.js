import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-sky-500 py-4 px-8">
      <div className="flex space-x-2">
        <Link href="/">Home</Link>
        <Link href="/three">Three</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
