import express, {Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
    // res.send("post created")
    // console.log(req, res);
    try {
        const result = await postService.createPost(req.body)
        res.status(201).json(result)
    } catch (e) {
        res.status(400).json({
            error: "Request Failed",
            details: e
        })
    }
};

export const PostController = {
    createPost
}