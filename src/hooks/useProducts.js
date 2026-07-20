import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/api";
import { getProduct } from "../services/api";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}

export function useProduct(id) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });
}