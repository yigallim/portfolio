import { create } from "zustand";

type LoadedStore = {
  loaded: boolean;
  load: () => void;
};

const useLoaded = create<LoadedStore>()((set) => ({
  loaded: false,
  load: () => set(() => ({ loaded: true })),
}));

export default useLoaded;
