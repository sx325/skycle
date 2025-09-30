"use client";

import Link from "next/link";
import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container className="py-10">
        <div className="mt-5 flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-sm text-gray-500">
            &copy; Copyright {new Date().getFullYear()} Skycle. All Rights Reserved.
          </p>
          <ul className="text-sm text-gray-500 md:mt-0 flex items-center space-x-2">
            <li>
              <Link href={`https://paypal.me/pirmax`} target="_blank">
                Support Me
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/tos`} target="_self">
                Terms of Service
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/privacy`} target="_self">
                Privacy Policy
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/cookies`} target="_self">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
