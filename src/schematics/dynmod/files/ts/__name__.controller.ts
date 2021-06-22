import {
    Body,
    Controller, Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param, ParseUUIDPipe,
    Post, Put, Query,
} from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiNoContentResponse,
    ApiOkResponse,
    ApiOperation,
    ApiParam,
    ApiTags,
    ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { <%= classify(name) %>Service } from "@app/modules/<%= lowerCase(name) %>/<%= lowerCase(name) %>.service";
import { <%= classify(name) %>CollectionDto } from "@app/modules/<%= lowerCase(name) %>/dto/<%= lowerCase(name) %>.dto";
import { <%= classify(name) %>Dto } from "@app/modules/<%= lowerCase(name) %>/dto/<%= lowerCase(name) %>.dto";
import { Create<%= classify(name) %>Dto } from "@app/modules/<%= lowerCase(name) %>/dto/create<%= classify(name) %>.dto";
import { Update<%= classify(name) %>Dto } from "@app/modules/<%= lowerCase(name) %>/dto/update<%= classify(name) %>.dto";
import { UnprocessableEntityDto } from '@app/common/dto/unprocessableEntity.dto';
import { <%= classify(name) %>ByIdPipe } from "@app/modules/<%= lowerCase(name) %>/pipes/<%= lowerCase(name) %>ById.pipe";
import { <%= classify(name) %>Entity } from "@app/modules/<%= lowerCase(name) %>/<%= lowerCase(name) %>.entity";
import { AbstractController } from "@app/common/abstract.controller";

@Controller('<%= lowerCase(name) %>s')
@ApiTags('<%= lowerCase(name) %>s')
export class <%= classify(name) %>Controller extends AbstractController {
    constructor(
        private readonly <%= lowerCase(name) %>Service: <%= classify(name) %>Service,
    ) {
        super();
    }

    @Get()
    @ApiOperation({ summary: 'Get <%= lowerCase(name) %> collection' })
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: <%= classify(name) %>CollectionDto,
        description: '<%= classify(name) %> collection'
    })
async list(@Query() filter: BaseCollectionFilter): Promise <<%= classify(name) %>CollectionDto > {
    const [<%= lowerCase(name) %>s, count] = await this.<%= lowerCase(name) %>Service.findAll(filter);

const collection = new <%= classify(name) %>CollectionDto(<%= lowerCase(name) %>s, { count });

return collection.toDto <<%= classify(name) %>Dto > ();
    }

@Get('/:id')
@ApiOperation({ summary: 'Get <%= lowerCase(name) %> by id' })
@HttpCode(HttpStatus.OK)
@ApiParam({ name: 'id', type: 'string' })
@ApiOkResponse({
    type: <%= classify(name) %>Dto,
    description: '<%= classify(name) %> info'
    })
async get(@Param('id', new ParseUUIDPipe({ version: '4' }), <%= classify(name) %>ByIdPipe)<%= lowerCase(name) %>Entity: <%= classify(name) %>Entity): Promise <<%= classify(name) %>Dto > {
    return<%= lowerCase(name) %>Entity.toDto();
    }

@Post()
@ApiOperation({ summary: 'Create <%= lowerCase(name) %>' })
@HttpCode(HttpStatus.CREATED)
@ApiCreatedResponse({
    type: <%= classify(name) %>Dto,
    description: '<%= classify(name) %> successfully created',
    })
@ApiUnprocessableEntityResponse({ type: UnprocessableEntityDto })
async create(
        @Body() create <%= classify(name) %>Dto: Create <%= classify(name) %>Dto,
    ): Promise <<%= classify(name) %>Dto > {
    const<%= lowerCase(name) %>Entity = await this.<%= lowerCase(name) %>Service.create(create<%= classify(name) %>Dto);

return <%= lowerCase(name) %>Entity.toDto();
    }

@Put('/:id')
@ApiOperation({ summary: 'Update <%= lowerCase(name) %> by id' })
@HttpCode(HttpStatus.OK)
@ApiParam({ name: 'id', type: 'string' })
@ApiOkResponse({
    type: <%= classify(name) %>Dto,
    description: '<%= classify(name) %> successfully updated'
    })
@ApiUnprocessableEntityResponse({ type: UnprocessableEntityDto })
async update(
        @Param('id', new ParseUUIDPipe({ version: '4' }), <%= classify(name) %>ByIdPipe)<%= lowerCase(name) %>Entity: <%= classify(name) %>Entity,
        @Body() update <%= classify(name) %>Dto: Update<%= classify(name) %>Dto,
    ): Promise <<%= classify(name) %>Dto> {
    const updated<%= classify(name) %> = await this.<%= lowerCase(name) %>Service.update(<%= lowerCase(name) %>Entity, update<%= classify(name) %>Dto);

return updated<%= classify(name) %>.toDto();
    }

@Delete('/:id')
@ApiOperation({ summary: 'Delete <%= lowerCase(name) %> by id' })
@HttpCode(HttpStatus.NO_CONTENT)
@ApiParam({ name: 'id', type: 'string' })
@ApiNoContentResponse({
    description: '<%= classify(name) %> successfully deleted'
})
async delete (
        @Param('id', new ParseUUIDPipe({ version: '4' }), <%= classify(name) %>ByIdPipe) <%= lowerCase(name) %>Entity: <%= classify(name) %>Entity
    ): Promise <void> {
    await this.<%= lowerCase(name) %>Service.delete(<%= lowerCase(name) %>Entity);
}
}

