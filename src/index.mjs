export default function handler(event) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      "This is my first lambda deployed from GitHub Actions!",
    ),
  };
}
