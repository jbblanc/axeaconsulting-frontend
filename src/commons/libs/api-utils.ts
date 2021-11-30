interface Request {
	method: string;
	headers: any;
	credentials?: RequestCredentials;
	body?: any;
}

export interface ApiRequest {
	route: string;
	token?: string;
	data?: any;
}
export interface ApiResponse {
	body?: any;
	ok: boolean;
	code?: number; // http code
	error?: {
		message?: string;
		stack?: string;
	};
}

async function send(method: string, path: string, token: string, data?: any) {
	const headers = {
			Accept: "application/json, text/plain, */*",
			"Content-Type": "application/json",
			...(token && { Authorization: `Bearer ${token}` }),
	}
	const opts: Request = {
		method,
		headers,
	};

	if (data) {
		// We check if the data is already stringified and if not we stringify it
		opts.body = typeof data === "string" ? data : JSON.stringify(data);
	} else if (method === "POST"){
		opts.body = "{}";// default empty body
	}

	let url: string = `${path}`;
	//console.log(`${method} ${url}`);
	return await fetch(url, opts);
}

function buildSuccessResponse(body: any, code?: number): ApiResponse {
	return {
		code,
		body,
		ok: true,
	};
}

function buildErrorResponse(message: string, stack?: string, code?: number): ApiResponse {
	return {
		code,
		error: {
			message,
			stack,
		},
		ok: false,
	};
}

function get({ route, token = null }: ApiRequest) {
	return send("GET", route, token);
}

function post({ route, token = null, data = null }: ApiRequest) {
	return send("POST", route, token, data);
}

function put({ route, token = null, data = null }: ApiRequest) {
	return send("PUT", route, token, data);
}

function patch({ route, token = null, data = null }: ApiRequest) {
	return send("PATCH", route, token, data);
}

async function standardGet({ route, token = null }: ApiRequest): Promise<ApiResponse> {
	try {
		const res = await get({ route, token });
		if (res.status === 200) {
			const body = await res.json();
			return buildSuccessResponse(body, res.status);
		} else {
			//TODO get server message in body ??
			return buildErrorResponse("GET failed - Unexpected status", "", res.status);
		}
	} catch (e) {
		return buildErrorResponse(e.message);
	}
}

async function standardPost({
	route,
	token = null,
	data = null,
}: ApiRequest): Promise<ApiResponse> {
	try {
		const res = await post({ route, token, data });
		if (res.status === 200 || res.status === 201) {
			const body = await res.json();
			return buildSuccessResponse(body, res.status);
		} else {
			//TODO get server message in body ??
			console.log(res);
			return buildErrorResponse("POST failed - Unexpected status", "", res.status);
		}
	} catch (e) {
		return buildErrorResponse(e.message);
	}
}

async function standardPut({ route, token = null, data = null }: ApiRequest) {
	try {
		const res = await put({ route, token, data });
		if (res.status === 200) {
			const body = await res.json();
			return buildSuccessResponse(body, res.status);
		} else {
			//TODO get server message in body ??
			return buildErrorResponse("PUT failed - Unexpected status", "", res.status);
		}
	} catch (e) {
		return buildErrorResponse(e.message);
	}
}

async function standardPatch({ route, token = null, data = null }: ApiRequest) {
	try {
		const res = await patch({ route, token, data });
		if (res.status === 200) {
			const body = await res.json();
			return buildSuccessResponse(body, res.status);
		} else {
			//TODO get server message in body ??
			return buildErrorResponse("PATCH failed - Unexpected status", "", res.status);
		}
	} catch (e) {
		return buildErrorResponse(e.message);
	}
}

export { get, post, put, patch, standardGet, standardPost, standardPut, standardPatch };
