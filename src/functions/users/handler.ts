import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
// Create CRUD todo

export const hello = async (
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
      },
      null,
      2
    ),
  };
};