"use server"

import { requireAuth } from "@/src/lib/auth-server";
import { CommunityInput, CommunitySchema } from "../schemas/communitySchema";

export async function createCommunityAction(input: CommunityInput)  {
    const data = CommunitySchema.safeParse(input);

    if(!data.success) return {
        error: "Hubo un error",
        success: ""
    }

    const  {session} =  await requireAuth();

      if(!session) return {
        error: "Hubo un error",
        success: ""
    }

}