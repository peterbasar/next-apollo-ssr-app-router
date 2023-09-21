import { ApolloWrapper } from "./ApolloWrapper";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
