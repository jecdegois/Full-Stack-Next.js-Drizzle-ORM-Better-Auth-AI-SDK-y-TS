import { CommunityInput } from "../schemas/communitySchema";
import { communityRepository, ICommunityRepositry } from "./CommunityRepository";



class CommunityService {

    constructor(
        private communityRepository: ICommunityRepositry
    ) {}


    async createCommunity(data : CommunityInput, userId: string) {
        console.log(data)
        console.log(userId)
    }
}


export const communityService = new CommunityService(communityRepository);