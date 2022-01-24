FROM dockershelf/node:14
LABEL maintainer "Luis Alejandro Martínez Faneyth <luis@luisalejandro.org>"

RUN apt-get update
RUN apt-get install build-essential autoconf automake sudo gcc git \
    libtool libffi-dev zlib1g-dev ruby2.7 ruby2.7-dev python2.7-dev

RUN npm install -g gulp

RUN gem install bundler

RUN echo "luisalejandro ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/luisalejandro

RUN useradd -ms /bin/bash luisalejandro

USER luisalejandro

RUN mkdir -p /home/luisalejandro/app

WORKDIR /home/luisalejandro/app

CMD tail -f /dev/null
