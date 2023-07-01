import ClientComponent from "@/app/ClientComponent";
import { cookies } from "next/headers";

export default function Home() {
  const defaultLayout = getDefaultLayout();

  return (
    <main className="h-48 p-1">
      <p>
        This component uses both <code>cookies</code> and{" "}
        <code>localStorage</code> to persist the last layout value. Resize the
        panel below and then reload the page to see.
      </p>
      <ClientComponent defaultLayout={defaultLayout} />
    </main>
  );
}

function getDefaultLayout() {
  const layout = cookies().get("react-resizable-panels:layout");
  if (layout) {
    return JSON.parse(layout.value);
  }
  return [33, 67];
}
