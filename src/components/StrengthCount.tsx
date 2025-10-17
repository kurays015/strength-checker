import { cookies } from "next/headers";
import Link from "next/link";

async function getStrengthCount(): Promise<{ strength: number }> {
  const response = await fetch(`https://api.claim.monad.xyz/v1/me`);
  return response.json();
}

export default async function StrengthCount() {
  const [strengthCount, cookie] = await Promise.all([
    getStrengthCount(),
    (await cookies()).get("privy-id-token")?.value,
  ]);

  if (!cookie)
    return (
      <div>
        Please login to{" "}
        <Link
          href="https://claim.monad.xyz"
          referrerPolicy="no-referrer"
          target="_blank"
        >
          claim.monad.xyz
        </Link>
        first to check your strength.
      </div>
    );

  return (
    <div>{strengthCount.strength ? strengthCount.strength : "Not found"}</div>
  );
}
