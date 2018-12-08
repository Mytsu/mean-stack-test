import { Router, Request, Response} from "express"
import { mainController } from "../controllers/MainController"

class MainRoutes {
    public router: Router = Router()

    constructor() {
        this.config()
    }

    private config(): void {
        this.router.get("/", (req: Request, res: Response) => 
            mainController.root(req, res))
        this.setIssues()
    }

    private setIssues(): void {
       this.getIssues()
       this.getIssuesById()
       this.addIssue()
       this.updateIssue()
    }

    private getIssues(): void {
        this.router.route("/issues").get((req: Request, res: Response) => {
            mainController.getIssues(req, res)
        })
    }

    private getIssuesById(): void {
        this.router.route("/issues/:id").get((req: Request, res: Response) => {
            mainController.getIssuesById(req, res)
        })
    }

    private addIssue(): void {
        this.router.route("/issues/add").post((req: Request, res: Response) => {
            mainController.addIssue(req, res)
        })
    }

    private updateIssue(): void {
        this.router.route("/issues/update/:id").post((req: Request, res: Response) => {
            mainController.updateIssue(req, res)
        })
    }

    private deleteIssue(): void {
        this.router.route("/issues/delete/:id").get((req: Request, res: Response) => {
            mainController.deleteIssue(req, res)
        })
    }
}

export const mainRoutes = new MainRoutes().router