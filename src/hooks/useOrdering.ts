import useData from "@/hooks/useData";
import { Platform } from "@/services/game-service";

const useOrdering = () => useData<Platform>("/platforms/lists/parents");
export default useOrdering;
