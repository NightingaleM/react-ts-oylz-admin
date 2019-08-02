import { useStaticRendering } from "mobx-react";
import PublicStore from "./public";

const isServer: boolean = !(typeof window !== "undefined");
console.log(isServer, "ssssserver");
useStaticRendering(isServer);

let store: { PublicStore: any; } | null = null;

interface initialDataType {
  PublicStore: any;
}
export function initializeStore(initialData: initialDataType = { PublicStore: {} }) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return {
      PublicStore: new PublicStore(initialData.PublicStore),
    };
  }
  if (!store) {
    store = {
      PublicStore: new PublicStore(initialData.PublicStore),
    };
  }
  return store;
}
