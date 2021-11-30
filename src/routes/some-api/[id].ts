export async function get({ params }): Promise<any> {
	// execute your stuff here given req params and return response
	const { id } = params;
	const found = {
		id,
		name: "Bob",
		phone: "+33654676543",
	};

	if (found) {
		return {
			body: {
				found,
			},
		};
	}
}
