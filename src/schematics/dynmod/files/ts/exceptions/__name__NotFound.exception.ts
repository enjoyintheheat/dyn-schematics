import { NotFoundException } from '@nestjs/common';

export class <%= classify(name) %>NotFoundException extends NotFoundException {
    constructor(private error: string = '<%= classify(name) %> not found') {
        super(error);
    }
}

