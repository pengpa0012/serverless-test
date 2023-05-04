import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const updateTodo = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        event
      },
      null,
      2
    ),
  };
};