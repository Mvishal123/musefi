import { z } from "zod";

export const onboardingSchema = z.object({
  owner: z.string(),
  studioName: z.string(),
  location: z.string(),
  musicsProduced: z.number(),
  numberOfArtists: z.number(),
});
