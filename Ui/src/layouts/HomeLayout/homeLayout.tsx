import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../../component/Parts/navBar";
import io from "socket.io-client";


const socket = io("http://localhost:3000");

const HomeLayout = () => {

    useEffect(() => {
        socket.on("message", (arg) => {
            console.log(arg);
        })

        socket.emit("fromClient", "Hello Server");
        return () => {
            socket.off('message');
        };
    }, [])

    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default HomeLayout;