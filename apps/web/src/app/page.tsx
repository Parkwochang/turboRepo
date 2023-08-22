"use client";

import { Metadata } from "next";
import Head from "next/head";
import { useState } from "react";
import { Button } from "ui";

// export const metadata: Metadata = {
//   title: "Docs - Turborepo Example",
// };

export default function Home() {
  const [loading, setLoading] = useState(false);
  const new_data = [
    { name: "tata", count: 3000 },
    { name: "wawa", count: 3000 },
    { name: "kaka", count: 3000 },
  ];

  return (
    <div>
      <main>
        <h1>
          Docs
          <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent px-2">
            Turborepo Example
          </span>
        </h1>
        <p className={loading ? "hidden" : "block"}>loading 중입니다</p>
        <div>
          {new_data.map((i, d) => {
            if (d === 2) {
              return (
                <div key={i.name}>
                  <p>나의 이름은!{i.name}</p>
                  <div className="px-2">
                    {Array(i.count)
                      .fill("zlz")
                      .map((i, d) => {
                        if (d + 1 === 3000) {
                          /*  setLoading(true); */ console.log(d);
                        }
                        return (
                          <span className="pr-1" key={d * 10}>
                            {d + 1}
                          </span>
                        );
                      })}
                  </div>
                </div>
              );
            }
            return (
              <div key={i.name}>
                <p>나의 이름은!{i.name}</p>
                <div className="px-2">
                  {Array(i.count)
                    .fill("zlz")
                    .map((i, d) => (
                      <span className="pr-1" key={d * 21}>
                        {d + 1}
                      </span>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Button />
        </div>
      </main>
    </div>
  );
}
