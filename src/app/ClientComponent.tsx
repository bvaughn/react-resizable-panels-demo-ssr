"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function ClientComponent({
  defaultLayout,
}: {
  defaultLayout: number[];
}) {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup direction="horizontal" onLayout={onLayout}>
      <Panel
        className="bg-slate-100 rounded-lg flex items-center justify-center text-center p-2"
        defaultSize={defaultLayout[0]}
        minSize={20}
      >
        Left panel
      </Panel>
      <PanelResizeHandle className="mx-1 w-2 bg-slate-300" />
      <Panel
        className="bg-slate-100 rounded-lg flex items-center justify-center text-center p-2"
        defaultSize={defaultLayout[1]}
        minSize={20}
      >
        Right panel
      </Panel>
    </PanelGroup>
  );
}
