import type { Metadata } from "next";
import OfflineContent from "./OfflineContent";

export const metadata: Metadata = {
  title: "You're Offline | Zenn Studios",
  description: "It looks like you've lost your connection.",
};

export default function OfflinePage() {
  return <OfflineContent />;
}