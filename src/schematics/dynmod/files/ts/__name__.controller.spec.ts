// @ts-ignore
import request from 'supertest';
import { v4 } from 'uuid';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { configApp } from '../../config/test.config';
import { AuthService } from '../auth/auth.service';
import { MailService } from '../../shared/services/mail.service';

describe('<%= classify(name) %> controller Api Tests', () => {
	let app: INestApplication;
	const urlEndpoint = '/<%= lowerCase(name) %>s/';

	let mailerServiceMock: any;

	let authService: AuthService;

	beforeAll(async () => {
		const module = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();
		app = module.createNestApplication();
		app = await configApp(app);

		authService = app.get<AuthService>(AuthService);

		const mailerService = app.get<MailService>(MailService);
		mailerServiceMock = jest.spyOn(mailerService, 'sendMail');

		await app.init();
	});
	afterAll(async () => {
		await app.close();
	});
});
