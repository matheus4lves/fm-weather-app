import * as z from "zod";

export const QuerySchema = z.string().trim().min(2);
