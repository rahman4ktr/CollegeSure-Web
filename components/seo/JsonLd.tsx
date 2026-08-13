import React from "react";
import { buildJsonLdGraph } from "@/lib/schema";

interface JsonLdProps {
  nodes: (object | null | undefined)[];
}

export default function JsonLd({ nodes }: JsonLdProps) {
  const graph = buildJsonLdGraph(nodes);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
