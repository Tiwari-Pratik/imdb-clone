"use server";

import { RedirectType, redirect } from "next/navigation";
import { z } from "zod";

export const searchAction = async (formData: FormData) => {
  // console.log(formData.get("searchTerm"));
  const schema = z.object({
    searchTerm: z.string().nonempty(),
  });
  const data = schema.parse({
    searchTerm: formData.get("searchTerm"),
  });

  // console.log(data.searchTerm);
  redirect(`/search?searchTerm=${data.searchTerm}`, RedirectType.replace);
};
