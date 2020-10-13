package websocket

import (
	"fmt"
	"log"

	"github.com/gorilla/websocket"
)

type Client struct {
	ID   string `json:"idName"`
	Conn *websocket.Conn
	Pool *Pool
}

type Message struct {
	Type int    `json:"type"`
	Body string `json:"body"`
	ID   string `json:"id"`
}

func (c *Client) Read() {
	defer func() {
		c.Pool.Unregister <- c
		c.Conn.Close()
	}()
	fmt.Println(c.ID)

	fmt.Println("Before For loop")
	for {
		messageType, p, err := c.Conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		fmt.Printf("Message type is: %+v\n", messageType)
		//fmt.Println(c.Conn)
		fmt.Println(c.ID)
		fmt.Println(c.Pool.Clients)
		fmt.Println("****")
		idName := c.ID

		message := Message{Type: messageType, Body: string(p), ID: idName}
		c.Pool.Broadcast <- message
		fmt.Printf("Message Received: %+v\n", message)
	}
}
