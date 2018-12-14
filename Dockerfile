FROM dockershelf/node:10
MAINTAINER Luis Alejandro Martínez Faneyth <luis@luisalejandro.org>

RUN apt-get update
RUN apt-get install ruby2.5 ruby2.5-dev sudo gcc libffi-dev build-essential \
    zlib1g-dev git python2.7-dev python-dev

RUN npm install -g gulp

RUN gem install bundler

RUN useradd -ms /bin/bash luisalejandro
RUN echo "luisalejandro ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/luisalejandro

CMD bash