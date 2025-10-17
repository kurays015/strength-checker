import { cookies } from "next/headers";
import Link from "next/link";

async function getStrengthCount(): Promise<{ strength: number }> {
  const response = await fetch(`https://api.claim.monad.xyz/v1/me`, {
    headers: {
      Cookie: `privy-id-token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjJLZGU5OE53cnFITXFGc1lWQXQ5U3RJc1E5TzM0eVhMSzUxWVRlYlNOV2MifQ.eyJjciI6IjE3NjA2OTAzMDkiLCJsaW5rZWRfYWNjb3VudHMiOiJbe1widHlwZVwiOlwid2FsbGV0XCIsXCJhZGRyZXNzXCI6XCIweEU5NDcwMUE0NzU1NzlFOUFCNTM2MWRCNDk2QzFmNTJkNThBODk1RWRcIixcImNoYWluX3R5cGVcIjpcImV0aGVyZXVtXCIsXCJ3YWxsZXRfY2xpZW50X3R5cGVcIjpcImJhY2twYWNrXCIsXCJsdlwiOjE3NjA3MDYzOTV9LHtcInR5cGVcIjpcInR3aXR0ZXJfb2F1dGhcIixcInN1YmplY3RcIjpcIjE4NzI0ODQ4MzE4MTAyMDM2NDhcIixcInVzZXJuYW1lXCI6XCJjb25zdGt1cmF5c1wiLFwibmFtZVwiOlwiS3VyYXlz4qiA4oyY8J-YiPCfl78obWFpbm5ldCBhcmMpXCIsXCJwZnBcIjpcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8xOTUyMzE0MjAzNTkyOTY2MTQ0L3RubHNvY0FSX25vcm1hbC5qcGdcIixcImx2XCI6MTc2MDY5MDMzMn0se1widHlwZVwiOlwiZGlzY29yZF9vYXV0aFwiLFwic3ViamVjdFwiOlwiNjgzOTkxMzEyMzcwMTA2Mzc4XCIsXCJ1c2VybmFtZVwiOlwia3VyYXlzcyMwXCIsXCJsdlwiOjE3NjA2OTAzNTF9LHtcInR5cGVcIjpcImVtYWlsXCIsXCJhZGRyZXNzXCI6XCJzdWJhcmFzaGl6ejI0QGdtYWlsLmNvbVwiLFwibHZcIjoxNzYwNjkwMzcwfSx7XCJ0eXBlXCI6XCJ3YWxsZXRcIixcImFkZHJlc3NcIjpcIjRVRWJnRkx1VGJuUUVaaG9LNHdoRHdVSlYzNVc5bXJBN3VZQ1ZrOTRqV3NjXCIsXCJjaGFpbl90eXBlXCI6XCJzb2xhbmFcIixcIndhbGxldF9jbGllbnRfdHlwZVwiOlwiUGhhbnRvbVwiLFwibHZcIjoxNzYwNjkwNjIyfSx7XCJ0eXBlXCI6XCJ3YWxsZXRcIixcImFkZHJlc3NcIjpcIkZ6bnhlRks4RWpMVVNtdDVXY3lLZjlDcGNaUWNQWVBqbzZqZXYycmQ4OU54XCIsXCJjaGFpbl90eXBlXCI6XCJzb2xhbmFcIixcIndhbGxldF9jbGllbnRfdHlwZVwiOlwiUGhhbnRvbVwiLFwibHZcIjoxNzYwNjkwNjczfV0iLCJpc3MiOiJwcml2eS5pbyIsImlhdCI6MTc2MDcwODEyNywiYXVkIjoiY21nZnJ6dm0wMDA2OWxiMGM3MTVtaHFidSIsInN1YiI6ImRpZDpwcml2eTpjbWd1bGp0cjIwMDh4azAwZHNuZmV2OG90IiwiZXhwIjoxNzYwNzExNzI3fQ.PIbKD9205hnc9U79qZXVYy4-f_Kze7Eg8eVgJuh0qJIY2tFD56L031nbZ-FxWYdrN3P5SvIWreqEqbqRudUNbg`,
    },
  });
  return response.json();
}

export default async function StrengthCount() {
  const [strengthCount, cookie] = await Promise.all([
    getStrengthCount(),
    (await cookies()).get("privy-id-token")?.value,
  ]);

  console.log(strengthCount);

  // if (!cookie)
  //   return (
  //     <div>
  //       Please login to{" "}
  //       <Link
  //         href="https://claim.monad.xyz"
  //         referrerPolicy="no-referrer"
  //         target="_blank"
  //       >
  //         claim.monad.xyz
  //       </Link>
  //       first to check your strength.
  //     </div>
  //   );

  return (
    <div>{strengthCount.strength ? strengthCount.strength : "Not found"}</div>
  );
}
