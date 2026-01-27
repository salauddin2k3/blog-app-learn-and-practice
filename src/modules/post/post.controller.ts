import express, {Request, Response } from "express";

const createPost = async (req: Request, res: Response) => {
    // res.send("post created")
    console.log(req, res);
};

export const PostController = {
    createPost
}