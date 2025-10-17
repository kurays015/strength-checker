export async function GET() {
  try {
    const response = await fetch("https://api.claim.monad.xyz/v1/me", {
      headers: {
        // Replace with your actual cookies from the browser
        Cookie:
          "privy-id-token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjJLZGU5OE53cnFITXFGc1lWQXQ5U3RJc1E5TzM0eVhMSzUxWVRlYlNOV2MifQ.eyJjciI6IjE3NjA2OTAzMDkiLCJsaW5rZWRfYWNjb3VudHMiOiJbe1widHlwZVwiOlwid2FsbGV0XCIsXCJhZGRyZXNzXCI6XCIweEU5NDcwMUE0NzU1NzlFOUFCNTM2MWRCNDk2QzFmNTJkNThBODk1RWRcIixcImNoYWluX3R5cGVcIjpcImV0aGVyZXVtXCIsXCJ3YWxsZXRfY2xpZW50X3R5cGVcIjpcImJhY2twYWNrXCIsXCJsdlwiOjE3NjA3MDYzOTV9LHtcInR5cGVcIjpcInR3aXR0ZXJfb2F1dGhcIixcInN1YmplY3RcIjpcIjE4NzI0ODQ4MzE4MTAyMDM2NDhcIixcInVzZXJuYW1lXCI6XCJjb25zdGt1cmF5c1wiLFwibmFtZVwiOlwiS3VyYXlz4qiA4oyY8J-YiPCfl78obWFpbm5ldCBhcmMpXCIsXCJwZnBcIjpcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8xOTUyMzE0MjAzNTkyOTY2MTQ0L3RubHNvY0FSX25vcm1hbC5qcGdcIixcImx2XCI6MTc2MDY5MDMzMn0se1widHlwZVwiOlwiZGlzY29yZF9vYXV0aFwiLFwic3ViamVjdFwiOlwiNjgzOTkxMzEyMzcwMTA2Mzc4XCIsXCJ1c2VybmFtZVwiOlwia3VyYXlzcyMwXCIsXCJsdlwiOjE3NjA2OTAzNTF9LHtcInR5cGVcIjpcImVtYWlsXCIsXCJhZGRyZXNzXCI6XCJzdWJhcmFzaGl6ejI0QGdtYWlsLmNvbVwiLFwibHZcIjoxNzYwNjkwMzcwfSx7XCJ0eXBlXCI6XCJ3YWxsZXRcIixcImFkZHJlc3NcIjpcIjRVRWJnRkx1VGJuUUVaaG9LNHdoRHdVSlYzNVc5bXJBN3VZQ1ZrOTRqV3NjXCIsXCJjaGFpbl90eXBlXCI6XCJzb2xhbmFcIixcIndhbGxldF9jbGllbnRfdHlwZVwiOlwiUGhhbnRvbVwiLFwibHZcIjoxNzYwNjkwNjIyfSx7XCJ0eXBlXCI6XCJ3YWxsZXRcIixcImFkZHJlc3NcIjpcIkZ6bnhlRks4RWpMVVNtdDVXY3lLZjlDcGNaUWNQWVBqbzZqZXYycmQ4OU54XCIsXCJjaGFpbl90eXBlXCI6XCJzb2xhbmFcIixcIndhbGxldF9jbGllbnRfdHlwZVwiOlwiUGhhbnRvbVwiLFwibHZcIjoxNzYwNjkwNjczfV0iLCJpc3MiOiJwcml2eS5pbyIsImlhdCI6MTc2MDcwNjM5NSwiYXVkIjoiY21nZnJ6dm0wMDA2OWxiMGM3MTVtaHFidSIsInN1YiI6ImRpZDpwcml2eTpjbWd1bGp0cjIwMDh4azAwZHNuZmV2OG90IiwiZXhwIjoxNzYwNzA5OTk1fQ.a-Z3hH5IyVRQxdvROn_tCYsMwafmNGGvTBAAkqxuxeTscl0Jk22L04mJLjJ9xQqGPje0aKNrVeGnBpCNSu03hA; privy-session=privy.claim.monad.xyz",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
