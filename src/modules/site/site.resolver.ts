import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { InjectRepository } from "@nestjs/typeorm";
import { SiteEntity } from './site.entity'
import { MongoRepository } from "typeorm";
import { CreateSiteInput, Site } from "src/graphql";

@Resolver('site')
export class SiteResolver {
    constructor(
        @InjectRepository(SiteEntity)
        private readonly siteReponsitory : MongoRepository<SiteEntity>
    ){}

    @Query()
    async sites(){
        return await this.siteReponsitory.find({})
    }

    @Mutation()
    async createSite(@Args('input') input: CreateSiteInput): Promise<Site>{
        const newSite = new SiteEntity
        newSite.name = input.name

        const siteSaved = await this.siteReponsitory.save(newSite)

        return siteSaved
    }
}