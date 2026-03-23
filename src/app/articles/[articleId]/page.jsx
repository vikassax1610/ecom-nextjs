"use client";
import Link from "next/link";
import { use } from "react";
export default function Article({ params, searchParams }) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  console.log(params);
  return (
    <div className="p-6 max-w-6xl mx-auto flex flex-col gap-6">
      <h1 className="text-3xl font-bold">
        Article:{" "}
        <span className="text-red-500 font-bold text-4xl">{articleId}</span>
      </h1>
      <h1 className="text-3xl font-bold">Article Title in language</h1>
      <p className="text-lg text-gray-600">
        This is the content of the article in the selected language:{" "}
        <span className="text-red-500 font-bold text-xl">{lang}</span>
      </p>
      <div className="flex gap-4 items-center">
        <Link href="/articles/article-123?lang=en">English</Link>
        <Link href="/articles/article-123?lang=fr">French</Link>
      </div>
    </div>
  );
}
