import { Request, Response } from "express"

export class MainController {
    public root(req: Request, res: Response) {
        res.status(200).send({
            message: "GET successful"
        })
    }

    public getList(req: Request, res: Response) {
        // TODO: Get list of issues from db
    }

    public getIssue(req: Request, res: Response) {
        // TODO: Get issue using id
    }
}

export const mainController = new MainController()