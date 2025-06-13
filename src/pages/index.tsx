"use server-entry";

import Root from "./_root";

export default async function Home() {
  return (
    <Root>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2>Home</h2>
        <p>This is the home page.</p>
      </div>
    </Root>
  );
}
