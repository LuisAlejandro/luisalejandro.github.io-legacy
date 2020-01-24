FROM dockershelf/node:10
LABEL maintainer "Luis Alejandro Martínez Faneyth <luis@luisalejandro.org>"

RUN apt-get update
RUN apt-get install ruby2.5 ruby2.5-dev sudo gcc libffi-dev build-essential \
    zlib1g-dev git python2.7-dev python-dev autoconf automake libtool

RUN npm install -g gulp

RUN gem install bundler

RUN gem update --system

RUN useradd -ms /bin/bash luisalejandro
RUN echo "luisalejandro ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/luisalejandro

CMD bash