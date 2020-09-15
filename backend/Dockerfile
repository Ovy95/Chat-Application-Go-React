FROM golang:1.15.2

RUN mkdir /app
RUN pwd
RUN ls -a
ADD . /app/
WORKDIR /app
RUN pwd
RUN ls -a
RUN go mod download
RUN ls -a
RUN go build main.go
CMD ["/app/main"]