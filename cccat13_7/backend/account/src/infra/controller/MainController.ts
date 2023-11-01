import GetAccount from "../../application/usecase/GetAccount";
import HttpServer from "../http/HttpServer";
import Signup from "../../application/usecase/Signup";
import Registry from "../di/Registry";
import inject from "../di/Inject";

// interface adapter
export default class MainController {
	@inject("signup")
	signup?: Signup;
	@inject("getAccount")
	getAccount?: GetAccount;
	@inject("httpServer")
	httpServer?: HttpServer;

	constructor (
	) {
		this.httpServer?.on("post", "/signup", async (params: any, body: any) => {
			const output = await this.signup?.execute(body);
			return output;
		});

		this.httpServer?.on("get", "/accounts/:accountId", async function (params: any, body: any) {
			const output = await Registry.getInstance().inject("getAccount").execute(params.accountId);
			return output;
		});
	}
}
