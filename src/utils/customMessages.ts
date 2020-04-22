export const validationMessage = (status: number, error: string, property: string, message: string) => {
    return {
        statusCode: status,
        error: error,
        message: [
            {
                property: property,
                children: [],
                constraints: {
                    value: message
                }
            }
        ]
    }
}