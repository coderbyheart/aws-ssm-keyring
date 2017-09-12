.PHONY: clean

dist: src/*.ts
	@mkdir -p $(dir $@)
	./node_modules/.bin/tsc

clean:
	rm -rf dist
