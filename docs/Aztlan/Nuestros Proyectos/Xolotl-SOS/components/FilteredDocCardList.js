import React from "react";
import DocCardList from "@theme/DocCardList";
import { useCurrentSidebarCategory } from "@docusaurus/theme-common";

export default function FilteredDocCardList({ start, end }) {
  const { items } = useCurrentSidebarCategory();

  const filteredItems = items.slice(start, end);

  return <DocCardList items={filteredItems} />;
}