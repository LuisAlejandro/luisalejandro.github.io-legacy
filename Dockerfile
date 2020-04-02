FROM dockershelf/node:10
LABEL maintainer "Luis Alejandro Martínez Faneyth <luis@luisalejandro.org>"

RUN apt-get update && \
    apt-get install net-tools netcat-openbsd

RUN route -n | awk '/^0.0.0.0/ {print $2}' > /tmp/host_ip.txt
RUN echo "HEAD /" | nc `cat /tmp/host_ip.txt` 8000 | grep squid-deb-proxy \
    && (echo "Acquire::http::Proxy \"http://$(cat /tmp/host_ip.txt):8000\";" > /etc/apt/apt.conf.d/30proxy) \
    || echo "No squid-deb-proxy detected on docker host"

RUN apt-get update
RUN apt-get install ruby2.7 ruby2.7-dev sudo gcc libffi-dev build-essential \
    zlib1g-dev git python2.7-dev python-dev autoconf automake libtool

RUN npm install -g gulp

RUN gem install bundler

RUN gem update --system

RUN useradd -ms /bin/bash luisalejandro
RUN echo "luisalejandro ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/luisalejandro

CMD bash