"use client";

import ReactFlow, {
  Background,
  Controls,
  Edge,
  MiniMap,
  Node,
} from "reactflow";

import "reactflow/dist/style.css";

const nodeCompleted = {
  background: "#007FFF",
  color: "#FFFFFF",
  border: "1px solid #007FFF",
  borderRadius: "12px",
  padding: "10px",
  width: 180,
  textAlign: "center" as const,
};

const nodeCurrent = {
  background: "#F7D117",
  color: "#000000",
  border: "1px solid #F7D117",
  borderRadius: "12px",
  padding: "10px",
  width: 180,
  textAlign: "center" as const,
  boxShadow: "0 0 20px rgba(247,209,23,0.5)",
};

const nodeLocked = {
  background: "#1E293B",
  color: "#94A3B8",
  border: "1px solid #334155",
  borderRadius: "12px",
  padding: "10px",
  width: 180,
  textAlign: "center" as const,
};

const nodes: Node[] = [
  {
    id: "1",
    position: { x: 250, y: 0 },
    data: { label: "🚀 Innovation Sprint" },
    style: nodeCompleted,
  },

  {
    id: "2",
    position: { x: 250, y: 120 },
    data: { label: "✅ Shell" },
    style: nodeCompleted,
  },

  {
    id: "3",
    position: { x: 250, y: 240 },
    data: { label: "✅ Git" },
    style: nodeCompleted,
  },

  {
    id: "4",
    position: { x: 250, y: 360 },
    data: { label: "✅ C" },
    style: nodeCompleted,
  },

  {
    id: "5",
    position: { x: 250, y: 480 },
    data: { label: "🟡 libmb" },
    style: nodeCurrent,
  },

  {
    id: "6",
    position: { x: 30, y: 650 },
    data: { label: "🔒 Algorithms" },
    style: nodeLocked,
  },

  {
    id: "7",
    position: { x: 250, y: 650 },
    data: { label: "🔒 Systems" },
    style: nodeLocked,
  },

  {
    id: "8",
    position: { x: 470, y: 650 },
    data: { label: "🔒 Networks" },
    style: nodeLocked,
  },

  {
    id: "9",
    position: { x: 250, y: 850 },
    data: { label: "🔒 Track Selection" },
    style: nodeLocked,
  },

  {
    id: "10",
    position: { x: 0, y: 1050 },
    data: { label: "🔐 Cybersecurity" },
    style: nodeLocked,
  },

  {
    id: "11",
    position: { x: 250, y: 1050 },
    data: { label: "🖥 Software Engineering" },
    style: nodeLocked,
  },

  {
    id: "12",
    position: { x: 500, y: 1050 },
    data: { label: "🤖 Artificial Intelligence" },
    style: nodeLocked,
  },
];

const edges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#007FFF" },
  },

  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "#007FFF" },
  },

  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    style: { stroke: "#007FFF" },
  },

  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
    style: { stroke: "#F7D117" },
  },

  {
    id: "e5-6",
    source: "5",
    target: "6",
    style: { stroke: "#475569" },
  },

  {
    id: "e5-7",
    source: "5",
    target: "7",
    style: { stroke: "#475569" },
  },

  {
    id: "e5-8",
    source: "5",
    target: "8",
    style: { stroke: "#475569" },
  },

  {
    id: "e7-9",
    source: "7",
    target: "9",
    style: { stroke: "#475569" },
  },

  {
    id: "e9-10",
    source: "9",
    target: "10",
    style: { stroke: "#475569" },
  },

  {
    id: "e9-11",
    source: "9",
    target: "11",
    style: { stroke: "#475569" },
  },

  {
    id: "e9-12",
    source: "9",
    target: "12",
    style: { stroke: "#475569" },
  },
];

export default function MissionTree() {
  return (
    <div className="h-[750px] w-full rounded-2xl bg-[#081120]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        <MiniMap
          style={{
            backgroundColor: "#111827",
          }}
        />

        <Controls />

        <Background
          gap={20}
          size={1}
          color="#1E293B"
        />
      </ReactFlow>
    </div>
  );
}
