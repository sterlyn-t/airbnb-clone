import { User, Listing } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailedVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailedVerified: string | null;
};

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};
