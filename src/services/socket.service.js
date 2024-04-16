
const { Server } = require('socket.io');
const User = require('../models/user.model');
const logger = require('../config/logger');
const { ChatModel } = require('../models');

module.exports = function (httpServer) {

    const io = new Server(httpServer, {
        cors: {
            origin: true,
            credentials: true,
        },
        allowEIO3: true,
    });


    io.on('connection', (socket) => {
        console.log('A user connected', socket.id);
        //  console.log(socket)
        // Handle events emitted by the client
        socket.on("send", async (data) => {
            // console.log("Received data from client:", data);

            try {
                const { senderId, userId, content } = data;
                
                // Emit the message back to the sender only
                io.to(socket.id).emit("receive", { content: content, senderId: userId });

                // Save the message to the database
                const message = new ChatModel({
                    sender: senderId,
                    receiver: userId,
                    content: content
                });
                await message.save();
            } catch (error) {
                console.error("Error handling receive event:", error);
                // Handle errors appropriately, e.g., send an error message to the client
            }
        });
        // Emit events to the client


        socket.on('disconnect', (data) => {
            console.log("Disconnect",data);
            console.log(`user disconnected with socket id: ${socket.id}`);
        })
    });

    httpServer.listen(5000, () => {
        logger.info("Socket is listening on port " + 5000);
    });
}