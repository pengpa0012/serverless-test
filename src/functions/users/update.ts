import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
// Create CRUD todo
// Save on dynamo DB

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log(event)

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