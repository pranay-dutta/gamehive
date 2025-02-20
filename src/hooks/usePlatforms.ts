// import useData from "@/hooks/useData";

import platforms from "@/data/platforms";

// import { Platform } from "@/services/game-service";
const usePlatforms = () => ({ data: platforms, loading: false, error: null });

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
