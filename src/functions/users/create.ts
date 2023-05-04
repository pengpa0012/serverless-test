import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import AWS from "aws-sdk";

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = "Todos"; 

export const createTodo = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const { title, description } = JSON.parse(event.body as string);
    
    const item = {
      id: Math.random().toString(36).substr(2, 9), // generate a random id
      title,
      description
    };
    
    await dynamoDB.put({
      TableName: tableName,
      Item: item
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Todo created successfully",
        todo: item
      })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "An error occurred",
        error
      })
    };
  }
};