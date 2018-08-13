

image:

	@docker build -t luisalejandro/luisalejandro.github.io:latest .

dependencies:

	@mkdir -p bower_components node_modules vendor/bundle
	@docker run -it --rm -u luisalejandro \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest npm install

serve_development:

	@mkdir -p bower_components node_modules vendor/bundle
	@docker run -it --rm -p 3000:3000 -u luisalejandro \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest npm run serve_development

serve_production:

	@mkdir -p bower_components node_modules vendor/bundle
	@docker run -it --rm -p 3000:3000 -u luisalejandro \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest npm run serve_production

build_development:

	@mkdir -p bower_components node_modules vendor/bundle
	@docker run -it --rm -u luisalejandro \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest npm run build_development

build_production:

	@mkdir -p bower_components node_modules vendor/bundle
	@docker run -it --rm -u luisalejandro \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest npm run build_production

console:

	@mkdir -p bower_components node_modules vendor/bundle
	@docker run -it --rm -p 3000:3000 -u luisalejandro \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest bash
