interface ExpectedBody {
	id: number;
	name: string;
	phone: string;
}
export async function post({ body }): Promise<any> {
	let { id, name, phone } = body;

	// execute your stuff on rceived data here...

	return {
		status: 201,
		body: {
			messsage: `${name} has been registered with phone number ${phone} under identifier ${id}`,
		},
	};
}
