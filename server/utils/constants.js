// status types //
const statusTypes = {
	EMAIL_ALREADY_EXISTS: 'Email Already Exists',
	INVALID_USER: 'User Not Found',
	INTERNAL_SERVER_ERROR: 'Internal Server Error',
	SOMETHING_WENT_WRONG: 'Something Went Wrong',
	INCORRECT_CREDENTIAL: 'Incorrect Email or Password',
	INVALID_CREDENTIAL: 'Invalid Credentials',
	LOGIN_SUCCESS: 'Login Successfully',
	TOKEN_REQUIRED: 'Token Required',
	PASSWORD_REQUIRED: 'Password Required',
	CREATE_PASSWORD: 'Create your password first'
};

// schema title //
const schemaTitle = {
	POSITION: 'Position',
	ROLE: 'Role',
	USER: 'User',
	VERIFICATION: 'Verification',
	COUNTRY: 'Country',
	STATE: 'State',
	CITY: 'City',
	DIVISION: 'Division'
};

module.exports = { statusTypes, schemaTitle };
