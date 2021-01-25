#!/usr/bin/env make -f
# -*- makefile -*-

SHELL = bash -e


image:
	@docker-compose -p luisalejandro -f docker-compose.yml build --force-rm --pull

start:
	@docker-compose -p luisalejandro -f docker-compose.yml up --remove-orphans -d

dependencies: start
	@docker-compose -p luisalejandro -f docker-compose.yml exec \
		-T --user luisalejandro luisalejandro npm install

serve_development: start
	@docker-compose -p luisalejandro -f docker-compose.yml exec \
		-T --user luisalejandro luisalejandro npm run serve_development

serve_production: start
	@docker-compose -p luisalejandro -f docker-compose.yml exec \
		-T --user luisalejandro luisalejandro npm run serve_production

build_development: start
	@docker-compose -p luisalejandro -f docker-compose.yml exec \
		-T --user luisalejandro luisalejandro npm run build_development

build_production: start
	@docker-compose -p luisalejandro -f docker-compose.yml exec \
		-T --user luisalejandro luisalejandro npm run build_production

console: start
	@docker-compose -p luisalejandro -f docker-compose.yml exec \
		-T --user luisalejandro luisalejandro bash
