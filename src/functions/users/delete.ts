import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import AWS from "aws-sdk";

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = "Todos";

export const deleteTodo = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters?.id;

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: "Missing todo ID"
        },
        null,
        2
      )
    };
  }

  const params = {
    TableName: tableName,
    Key: {
      id: id
    }
  };

  try {
    const data = await dynamoDB.delete(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Todo deleted successfully",
          deletedTodo: data.Attributes
        },
        null,
        2
      ),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: "Cannot delete todo"
        },
        null,
        2
      ),
    };
  }
};