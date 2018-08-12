

image:

	@docker build -t luisalejandro/luisalejandro.github.io:latest .

deps:

	@mkdir -p app/_bower_components node_modules vendor/bundle
	@docker run -it --rm -p 3000:3000 -p 3001:3001 -u luisalejandro \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-v $(PWD)/node_modules:/home/luisalejandro/luisalejandro.github.io/node_modules \
		-v $(PWD)/app/_bower_components:/home/luisalejandro/luisalejandro.github.io/app/_bower_components \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest npm install

serve:

	@mkdir -p app/_bower_components node_modules vendor/bundle
	@docker run -it --rm -p 3000:3000 -p 3001:3001 -u luisalejandro \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-v $(PWD)/node_modules:/home/luisalejandro/luisalejandro.github.io/node_modules \
		-v $(PWD)/app/_bower_components:/home/luisalejandro/luisalejandro.github.io/app/_bower_components \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest npm serve

build_production:

	@mkdir -p app/_bower_components node_modules vendor/bundle
	@docker run -it --rm -p 3000:3000 -p 3001:3001 -u luisalejandro \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-v $(PWD)/node_modules:/home/luisalejandro/luisalejandro.github.io/node_modules \
		-v $(PWD)/app/_bower_components:/home/luisalejandro/luisalejandro.github.io/app/_bower_components \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest npm run build_production

console:

	@mkdir -p app/_bower_components node_modules vendor/bundle
	@docker run -it --rm -p 3000:3000 -p 3001:3001 -u luisalejandro \
		-v $(PWD):/home/luisalejandro/luisalejandro.github.io \
		-v $(PWD)/node_modules:/home/luisalejandro/luisalejandro.github.io/node_modules \
		-v $(PWD)/app/_bower_components:/home/luisalejandro/luisalejandro.github.io/app/_bower_components \
		-w /home/luisalejandro/luisalejandro.github.io \
		luisalejandro/luisalejandro.github.io:latest bash
