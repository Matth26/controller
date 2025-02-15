import { Route, Routes, Navigate, useSearchParams } from "react-router-dom";
import {
  Inventory,
  Collection,
  Asset,
  Send,
  Token,
} from "@/components/inventory";
import { Quest } from "@/components/quest";
import { History } from "@/components/history";

export function App() {
  const [searchParams] = useSearchParams();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate to={`/inventory?${searchParams.toString()}`} replace />
        }
      />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/token/:address" element={<Token />} />
      <Route path="/collection/:address" element={<Collection />} />
      <Route path="/collection/:address/:tokenId" element={<Asset />} />
      <Route path="/collection/:address/send" element={<Send />} />
      <Route path="/quest" element={<Quest />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
