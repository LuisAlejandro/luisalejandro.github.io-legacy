

image:

	@docker build -t luisalejandro/luisalejandro.github.io:latest .

dependencies:

	@mkdir -p node_modules vendor/bundle
	@docker run -it --rm -u luisalejandro \
		-v $(HOME)/.npm:/home/luisalejandro/.npm \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest npm ci

serve_development:

	@mkdir -p node_modules vendor/bundle
	@docker run -it --rm -p 9999:9999 -u luisalejandro \
		-v $(HOME)/.npm:/home/luisalejandro/.npm \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest npm run serve_development

serve_production:

	@mkdir -p node_modules vendor/bundle
	@docker run -it --rm -p 9998:9998 -u luisalejandro \
		-v $(HOME)/.npm:/home/luisalejandro/.npm \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest npm run serve_production

build_development:

	@mkdir -p node_modules vendor/bundle
	@docker run -it --rm -u luisalejandro \
		-v $(HOME)/.npm:/home/luisalejandro/.npm \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest npm run build_development

build_production:

	@mkdir -p node_modules vendor/bundle
	@docker run -it --rm -u luisalejandro \
		-v $(HOME)/.npm:/home/luisalejandro/.npm \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest npm run build_production

console:

	@mkdir -p node_modules vendor/bundle
	@docker run -it --rm -p 9999:9999 -p 9998:9998 -u luisalejandro \
		-v $(HOME)/.npm:/home/luisalejandro/.npm \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest bash

clean:

	@rm -rf node_modules libraries build vendor .bundle \
		npm-debug.log app/_assets/fonts/vendor \
		app/_assets/styles/vendor
