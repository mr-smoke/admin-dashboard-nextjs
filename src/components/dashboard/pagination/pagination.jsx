"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = new URLSearchParams(useSearchParams());
  const pathname = usePathname();
  const { replace } = useRouter();

  const page = searchParams.get("page") || 1;
  const itemsPerPage = process.env.NEXT_PUBLIC_ITEMS_PER_PAGE;

  if (
    page < 1 ||
    isNaN(page) ||
    parseInt(page) * itemsPerPage - (itemsPerPage - 1) > count
  ) {
    searchParams.set("page", 1);
    replace(`${pathname}?${searchParams}`);
  }

  const hasPrevious = parseInt(page) > 1;
  const hasNext = parseInt(page) * itemsPerPage < count;

  const handlePage = (button) => {
    if (button === "previous") searchParams.set("page", Number(page) - 1);
    else searchParams.set("page", Number(page) + 1);
    replace(`${pathname}?${searchParams}`);
  };

  return (
    <>
      <button disabled={!hasPrevious} onClick={() => handlePage("previous")}>
        Previous
      </button>
      <button disabled={!hasNext} onClick={() => handlePage("next")}>
        Next
      </button>
    </>
  );
};

export default Pagination;
