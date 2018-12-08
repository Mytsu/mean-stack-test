import { Request, Response } from "express"
import { Issue, IssueModel } from "../model/Issue"
import * as mongoose from "mongoose"

export class MainController {
    public root(req: Request, res: Response) {
        res.status(200).send({
            message: "GET successful"
        })
    }

    public getIssues(req: Request, res: Response) {
        Issue.find((err: String, issues: IssueModel[]) => {
            if (err)
                console.log(err)
            else
                res.json(issues)
        })
    }

    public getIssuesById(req: Request, res: Response) {
        Issue.findById(req.params.id, (err: String, issue: IssueModel) => {
            if (err)
                console.log(err)
            else
                res.json(issue)
        })
    }

    public addIssue(req: Request, res: Response) {
        let issue = new Issue(req.body)
            issue.save()
                .then((issue: IssueModel) => {
                    res.status(200).json({"issue": "added successfully"})
                })
                .catch((err: String) => {
                    res.status(400).send("Failed to create new record")
                })
    }

    public updateIssue(req: Request, res: Response) {
        Issue.findById(req.params.id, (err: String, issue: IssueModel) => {
            if (!issue)
                throw(new Error("Could not load Document"))
        })
    }

    public deleteIssue(req: Request, res: Response) {
        Issue.findByIdAndRemove({_id: req.params.id}, (err: String, issue: IssueModel) => {
            if (err)
                res.json(err)
            else
                (res.json("Removed successfully"))
        })
    }
}

export const mainController = new MainController()