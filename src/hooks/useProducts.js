import { useQuery } from "@tanstack/react-query";
import products from "../data/product";

export default function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => products,
  });
}